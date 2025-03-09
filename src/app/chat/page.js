"use client"

import {useChat} from "@ai-sdk/react"
import {Input} from "@/components/ui/input";

export default function ChatPage() {

    const { messages, input, handleSubmit, handleInputChange, status } = useChat({
        api: '/api/stream-chat'
    })

    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <h1 className="text-2xl">productive.chat</h1>
            <p className="text-muted-foreground">
                Chat with our AI to gain AURA POINTS.
            </p>
            <div className="w-full max-w-sm md:max-w-3xl">

                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 p-2">
                        {messages.map(message => (
                            <div key={message.id} className="flex flex-row gap-2">
                                <div className="w-24 text-zinc-500">{`${message.role}: `}</div>
                                <div className="w-full">{message.content}</div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className=" w-full p-2">
                        <Input
                            value={input}
                            placeholder="Send message..."
                            onChange={handleInputChange}
                            className="w-full p-2 bg-zinc-100"
                            disabled={status !== 'ready'}
                        />
                    </form>
                </div>

            </div>
        </div>
    )
}
