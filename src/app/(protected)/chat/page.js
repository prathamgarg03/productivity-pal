"use client"

import { useChat } from "@ai-sdk/react"
import { useRef, useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send, X, SkipForward } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ChatPage() {
    const { messages, input, handleSubmit, handleInputChange, status } = useChat({
        api: '/api/stream-chat'
    })

    const [showMeme, setShowMeme] = useState(false)
    const [showCloseButton, setShowCloseButton] = useState(false)
    const [messageCount, setMessageCount] = useState(0)
    const [skipButtonPosition, setSkipButtonPosition] = useState({ top: '70%', left: '80%' })
    const [skipClickCount, setSkipClickCount] = useState(0)
    const videoRef = useRef(null)
    const overlayRef = useRef(null)

    // Check local storage on component mount
    useEffect(() => {
        const storedCount = localStorage.getItem('messageCount')
        if (storedCount) {
            setMessageCount(parseInt(storedCount))
        }
    }, [])

    // Show close button after set time when video is showing
    useEffect(() => {
        let timer
        if (showMeme) {
            timer = setTimeout(() => {
                setShowCloseButton(true)
            }, 10000) // 10 seconds
        }

        return () => {
            if (timer) clearTimeout(timer)
        }
    }, [showMeme])

    const handleFormSubmit = (e) => {
        handleSubmit(e)

        // Increment message count
        const newCount = messageCount + 1
        setMessageCount(newCount)
        localStorage.setItem('messageCount', newCount.toString())

        // Show meme with 40% probability after the 3rd message
        if (newCount >= 3 && Math.random() < 0.4) {
            setShowMeme(true)
            setShowCloseButton(false) // Reset close button state
            setSkipClickCount(0) // Reset skip click count
            // Set initial position for skip button
            setSkipButtonPosition({ top: '70%', left: '80%' })
        }
    }

    const handleCloseMeme = () => {
        setShowMeme(false)
        setShowCloseButton(false)
    }

    const handleSkipClick = () => {
        // Get the overlay container dimensions
        const overlayRect = overlayRef.current?.getBoundingClientRect() || { width: 800, height: 600 };

        // Generate new random position, ensuring button stays within viewport
        const maxTop = Math.max(overlayRect.height - 100, 400);
        const maxLeft = Math.max(overlayRect.width - 100, 700);

        // Calculate new position based on viewport size
        // Use different ranges for different click counts to make it more unpredictable
        let newTop, newLeft;

        if (skipClickCount % 3 === 0) {
            // Move to opposite side
            newTop = skipButtonPosition.top.startsWith('8') ? '10%' : '80%';
            newLeft = skipButtonPosition.left.startsWith('8') ? '10%' : '80%';
        } else if (skipClickCount % 3 === 1) {
            // Random position
            newTop = `${Math.floor(Math.random() * 70) + 10}%`;
            newLeft = `${Math.floor(Math.random() * 70) + 10}%`;
        } else {
            // More subtle movement
            const currentTop = parseInt(skipButtonPosition.top);
            const currentLeft = parseInt(skipButtonPosition.left);

            // Move slightly but stay in bounds
            newTop = `${Math.min(Math.max(currentTop + (Math.random() > 0.5 ? 15 : -15), 5), 85)}%`;
            newLeft = `${Math.min(Math.max(currentLeft + (Math.random() > 0.5 ? 20 : -20), 5), 85)}%`;
        }

        // Update the position state
        setSkipButtonPosition({ top: newTop, left: newLeft });

        // Increment click count
        setSkipClickCount(prev => prev + 1);
    }

    return (
        <div className="flex min-h-svh flex-col items-center justify-between p-6 md:p-10 relative">
            <div className="w-full max-w-3xl">
                <div className="flex flex-col mb-8">
                    <h1 className="text-2xl font-bold text-center">productive.chat</h1>
                    <p className="text-muted-foreground text-center">
                        Chat with our AI to gain AURA POINTS.
                    </p>
                </div>

                <ScrollArea className="h-[60vh] rounded-md p-4">
                    <div className="flex flex-col gap-4">
                        {messages.map(message => (
                            <div key={message.id}
                                 className={cn(
                                     "flex",
                                     message.role === "user" ? "justify-end" : "justify-start"
                                 )}
                            >
                                <div
                                    className={cn(
                                        "max-w-[60%] break-words",
                                        message.role === "user"
                                            ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-none px-4 py-2"
                                            : "bg-secondary text-secondary-foreground rounded-2xl rounded-tl-none px-4 py-2"
                                    )}
                                >
                                    {message.content}
                                </div>
                            </div>
                        ))}
                        {messages.length === 0 && (
                            <div className="text-center text-muted-foreground p-4">
                                Start a conversation by sending a message.
                            </div>
                        )}
                    </div>
                </ScrollArea>

                <form onSubmit={handleFormSubmit} className="flex items-center gap-2 mt-4">
                    <Input
                        value={input}
                        placeholder="Send message..."
                        onChange={handleInputChange}
                        className="flex-1"
                        disabled={status !== 'ready' || showMeme}
                    />
                    <Button
                        type="submit"
                        size="icon"
                        disabled={status !== 'ready' || !input.trim() || showMeme}
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </div>

            {/* Meme Video Overlay */}
            {showMeme && (
                <div
                    ref={overlayRef}
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center overflow-hidden"
                >
                    <div className="relative max-w-2xl w-full">
                        <video
                            ref={videoRef}
                            className="w-full rounded-lg shadow-2xl"
                            autoPlay
                            muted={false}
                            controls={false}
                            onContextMenu={(e) => e.preventDefault()}
                        >
                            <source src="/memes/interruption.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="text-center mt-6">
                            <p className="text-white text-lg mb-4">
                                Sorry for the interruption!
                            </p>

                            {showCloseButton && (
                                <Button
                                    onClick={handleCloseMeme}
                                    variant="destructive"
                                    className="px-6 py-2 text-lg animate-pulse"
                                >
                                    <X className="mr-2 h-5 w-5" /> Close
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Troll Skip Button that moves randomly */}
                    <Button
                        onClick={handleSkipClick}
                        variant="outline"
                        className="absolute z-50 bg-white/90 hover:bg-white transition-all duration-150"
                        style={{
                            position: 'absolute',
                            top: skipButtonPosition.top,
                            left: skipButtonPosition.left,
                            transform: 'translate(-50%, -50%)',
                        }}
                    >
                        <SkipForward className="mr-1 h-4 w-4" />
                        {skipClickCount > 5 ? "Nice try 😂" : "Skip"}
                    </Button>
                </div>
            )}
        </div>
    )
}