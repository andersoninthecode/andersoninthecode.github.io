import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anderson Santana",
  description: "Anderson Santana - personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-indigo-100 selection:text-indigo-900`}
      >
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[calc(100vh-80px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
