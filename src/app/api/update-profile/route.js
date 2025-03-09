import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs";

export async function POST(req) {
    try {
        const { userId } = auth();
        if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { username, phoneNumber } = await req.json();

        await clerkClient.users.updateUser(userId, {
            publicMetadata: {
                profileCompleted: true,
                username,
                phoneNumber,
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
