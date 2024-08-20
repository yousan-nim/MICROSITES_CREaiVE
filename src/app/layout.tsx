
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};









export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  


  return (
    <html lang="en">
      <body className={inter.className}>
        <audio src="/MICROSITES_CREaiVE/mp3/award.mp3" autoPlay loop id='award'/>
        {children}
        <div className="absolute flex z-50 w-full m-auto top-[97%] items-center justify-center">
          <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/PoweredBy.png" className="w-[100px] mr-10" />
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