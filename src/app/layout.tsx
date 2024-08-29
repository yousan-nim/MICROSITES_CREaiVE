import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MICROSITES",
  description: "Microsites Power by Creaive.ai",
  // viewport: "viewport",
  // content: "width=device-width, user-scalable=no",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <meta charSet="utf-8" />
        {/* <meta name="viewport" content="width=device-width, user-scalable=no" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
      </head>

      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}


