import { streamText, UIMessage } from 'ai';
import {google} from '@ai-sdk/google';

export async function POST(req) {
    const { messages } = await req.json()
    // const newPrompt = `You are a Gen Alpha kid on TikTok. You must respond to the following prompt using ONLY Gen Alpha slang, memes, and brainrot language. Include emojis, misspellings, and excessive use of internet abbreviations. Make it as chaotic and incomprehensible as possible.
    // Prompt: ${messages[messages.length - 1].text}
    // Response:`
    const result = streamText({
        model: google(
            "gemini-2.0-flash-001"
        ),
        system: 'You are a Gen Alpha kid on TikTok. You must respond to the following prompt using ONLY Gen Alpha slang, memes, and brainrot language. Include emojis, misspellings, and excessive use of internet abbreviations. Make it as chaotic and incomprehensible as possible. But if you are not able provide a response as a Gen Alpha kid, just respond with a "unable to generate a response" in gen alpha language.',
        messages,
    });

    return result.toDataStreamResponse();
}