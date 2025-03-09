import { Geist, Geist_Mono } from "next/font/google";
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ProductivityPal",
  description: "Website for Increasing Productivity",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider>
          <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                  <SignInButton mode={"modal"}/>
                  <SignUpButton  mode={"modal"}/>
              </SignedOut>
              <SignedIn>
                  <UserButton />
              </SignedIn>
          </header>
          {children}
          </body>
          </html>
      </ClerkProvider>
  );
}
