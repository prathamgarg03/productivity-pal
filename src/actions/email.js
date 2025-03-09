"use server"

import { resend } from "@/lib/resend";
import BetaAcceptanceEmail from "../../public/emails/email";

export async function sendBetaEmail(
    email,
){
    try {
        const { data, error } = await resend.emails.send({
            from: 'productivity-pal@prathamgarg.com',
            to: email,
            subject: "Productivity Pal ",
            react: BetaAcceptanceEmail(),
        });
        return {success: true, message: "Email sent successfully"}
    } catch (emailError) {
        console.error("Error sending email", emailError)
        return {success: false, message: "Failed to send email"}
    }
}