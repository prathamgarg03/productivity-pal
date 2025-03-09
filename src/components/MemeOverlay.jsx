"use client"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, SkipForward } from "lucide-react"


export function MemeOverlay({
    videoSrc,
    isVisible,
    onClose,
    closeButtonDelay = 10000,
    text
}) {
    const [showCloseButton, setShowCloseButton] = useState(false)
    const [skipButtonPosition, setSkipButtonPosition] = useState({ top: '70%', left: '80%' })
    const [skipClickCount, setSkipClickCount] = useState(0)
    const videoRef = useRef(null)
    const overlayRef = useRef(null)

    // Reset states when visibility changes
    useEffect(() => {
        if (isVisible) {
            setShowCloseButton(false)
            setSkipClickCount(0)
            setSkipButtonPosition({ top: '70%', left: '80%' })

            // Start timer for close button
            const timer = setTimeout(() => {
                setShowCloseButton(true)
            }, closeButtonDelay)

            return () => clearTimeout(timer)
        }
    }, [isVisible, closeButtonDelay])

    const handleSkipClick = () => {
        // Get the overlay container dimensions
        const overlayRect = overlayRef.current?.getBoundingClientRect() || { width: 800, height: 600 };

        // Generate new random position based on movement pattern
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

    if (!isVisible) return null;

    return (
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
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="text-center mt-6">
                    <p className="text-white text-lg mb-4">
                        {text}
                    </p>

                    {showCloseButton && (
                        <Button
                            onClick={onClose}
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
    )
}