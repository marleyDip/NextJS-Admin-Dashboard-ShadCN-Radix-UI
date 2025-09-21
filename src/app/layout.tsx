import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js ShadCN Dashboard || React & Tailwind Admin Template",
  description: "Next.js dashboard template using ShadCN UI, React, and Tailwind CSS. Features responsive layouts, data tables, charts, dark mode, and reusable components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <AppSidebar />
        <main className="w-full">
          <Navbar />
          <div className="px-4">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
