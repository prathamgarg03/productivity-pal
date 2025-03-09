import { Geist, Geist_Mono } from "next/font/google";
// import {
//     ClerkProvider,
//     SignInButton,
//     SignUpButton,
//     SignedIn,
//     SignedOut,
//     UserButton,
// } from '@clerk/nextjs'
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
      // <ClerkProvider>
      //
      // </ClerkProvider>
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

      {children}
      </body>
      </html>
  );
}
