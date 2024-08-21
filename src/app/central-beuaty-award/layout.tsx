import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
// import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MICROSITES",
    description: "Microsites Power by Creaive.ai",
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // C:\Users\U\Desktop\CREaiVE\MICROSITES_CREaiVE\public\mp3\award.mp3

    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <audio src="/mp3/award.mp3" autoPlay loop /> */}
                <div className="flex w-[80%] hv:w-full m-auto items-center justify-center z-0 absolute">
                    <img src="/img/CentralBeautyAward2024/CentralBeautyAward2024.png" className='w-[70%]'/>
                </div>
                <div className="w-screen h-screen overflow-hidden">
                    {children}
                </div>
                <div className="fixed flex z-50 w-full m-auto top-[97%] items-center justify-center">
                    <img src="/img/CentralBeautyAward2024/PoweredBy.png" className="w-[100px] hv:mr-10 mr-4" />
                </div>
            </body>
        </html>
    );
}

