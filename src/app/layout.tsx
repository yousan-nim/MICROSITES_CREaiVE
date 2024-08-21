
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

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
        <audio src="/mp3/award.mp3" autoPlay loop />
        {children}
        <div className="fixed flex z-50 w-full m-auto top-[97%] items-center justify-center">
          <img src="/img/CentralBeautyAward2024/PoweredBy.png" className="w-[100px] hv:mr-10 mr-4" />
        </div>
      </body>
    </html>
  );
}



// const AudioPlayer = () => {
  
//   const audio = document.getElementById("audio_tag");
//   const [play, setPlay] = useState(false);
  
//   return(
//      ...
//       <button
//         onClick={() => {
//           play ? setPlay(false) : setPlay(true);
//           play ? audio.pause() : audio.play();
//         }}
//       >
//       ...
//      </button>
//      <audio id="audio_tag" src={mySound} />
//   )
// }