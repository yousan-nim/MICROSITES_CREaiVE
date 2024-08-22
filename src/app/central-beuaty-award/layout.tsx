
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { useEffect, useRef } from "react";

import Sound from "./Sound";

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



    return (
        <html lang="en">
            <body className={inter.className}>
                <Sound muted={true}/>
                <div className="flex hv:w-full m-auto items-center justify-center z-0 absolute w-full">
                    <img src="/img/CentralBeautyAward2024/BeautyGalerie.png" className='w-[70%] '/>
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

