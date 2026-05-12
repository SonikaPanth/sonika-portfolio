import type { Metadata } from "next";
import { Inter, Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sonika Panth | Digital Frontier Architect",
  description: "Full-stack engineer specializing in immersive web experiences and 3D interactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${montserrat.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md text-body-md selection:bg-primary-container selection:text-on-primary-container">
        {/* Floating Backgrounds from Stitch UI */}
        <div className="floating-bg radial-gradient-1"></div>
        <div className="floating-bg radial-gradient-2"></div>

        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
