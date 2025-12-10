import type { Metadata } from "next";
import { Geist, Geist_Mono, Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dance Monkeys",
  description: "The hub for every event you should not miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
