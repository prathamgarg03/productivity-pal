"use client"

import { useChat } from "@ai-sdk/react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ChatPage() {
    const { messages, input, handleSubmit, handleInputChange, status } = useChat({
        api: '/api/stream-chat'
    })

    return (
        <div className="flex min-h-svh flex-col items-center justify-between p-6 md:p-10">
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

                <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
                    <Input
                        value={input}
                        placeholder="Send message..."
                        onChange={handleInputChange}
                        className="flex-1"
                        disabled={status !== 'ready'}
                    />
                    <Button
                        type="submit"
                        size="icon"
                        disabled={status !== 'ready' || !input.trim()}
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </div>
        </div>
    )
}