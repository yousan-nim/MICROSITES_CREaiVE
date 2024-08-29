import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type { Viewport } from 'next'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MICROSITES",
  description: "Microsites Power by Creaive.ai",
  // viewport: "viewport",
  // content: "width=device-width, user-scalable=no",
};

// export type ViewportLayout = {
//   width?: string | number;
//   height?: string | number;
//   initialScale?: 1;
//   minimumScale?: 1;
//   maximumScale?: 1;
//   userScalable?: boolean;
//   viewportFit?: 'auto' | 'cover' | 'contain';
//   interactiveWidget?: 'resizes-visual' | 'resizes-content' | 'overlays-content';
// };


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0,
  minimumScale: 0,
  maximumScale: 0,
  viewportFit: 'cover',
  userScalable: false,
  // interactiveWidget: 'overlays-content',
  // layout: viewportLayout, // Example usage of custom viewport layout
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no"
        />
      </head>

      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}


