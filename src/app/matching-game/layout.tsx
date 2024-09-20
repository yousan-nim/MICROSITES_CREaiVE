import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import type { Viewport } from 'next'
// import Sound from './Sound';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MICROSITES GAMES",
    description: "Microsites Games Power by Creaive.ai",
};



export const viewport: Viewport = {
    //   width: 'device-width',
    //   initialScale: 0,
    //   minimumScale: 0,
    //   maximumScale: 0,
    //   viewportFit: 'cover',
    //   userScalable: false,
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
            {/* <Sound /> */}
            <div className="w-screen h-screen bg-purple-800 p-[100px]">
                {children}
            </div>
        </html>
    );
}


