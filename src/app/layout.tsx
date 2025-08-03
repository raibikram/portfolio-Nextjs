import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bikram Rai | Software Developer",
  description:
    "'m a Software Developer from Kathmandu, Nepal. I work with the MERN stack, Next.js, TypeScript, and PostgreSQL to build scalable full-stack web applications. I'm also learning and working with Docker, CI/CD, and Kubernetes to improve production workflows. Always curious, always building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <ReactLenis root>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
