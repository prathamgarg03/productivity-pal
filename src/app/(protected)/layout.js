import Sidebar from "@/components/sidebar"; // Make sure this path is correct
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"; // Make sure to import any necessary global styles

// Google font setup
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function ProtectedLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex h-screen bg-gray-100">  {/* Ensure background color is applied */}
            {/* Sidebar on the left */}
            <Sidebar className="w-64 bg-gray-800 text-white" />

            {/* Main content area */}
            <div className="flex-1">
                {/* Main content (children pages will render here) */}
                <main className="p-6 bg-white">  {/* Set a light background color here */}
                    {children}
                </main>
            </div>
        </div>
        </body>
        </html>
    );
}
