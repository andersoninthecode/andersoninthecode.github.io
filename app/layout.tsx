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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Adiciona padding responsivo ao container principal */}
          <Header />
          <div className="py-8 md:px-10">{children}</div> {/* Remove px-30 e adiciona padding vertical padrão */}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
