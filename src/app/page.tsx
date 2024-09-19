import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-purple-700">

      <div className="w-full text-white font-bold text-[400px] text-center bg-purple-800">
        CREAIVE.ai Microsites
      </div>

      <div className="w-full text-black m-auto grid grid-cols-2 gap-4 p-[10px] justify-center ">
        <div className="border-2 m-[100px] items-center flex rounded-[100px] text-[400px] justify-center text-center h-[10vh] bg-slate-100">
          <Link href="/central-beuaty-award">
            Centrall Beauty Award 2024
          </Link>
        </div>
        <div className="border-2 m-[100px] items-center flex rounded-[100px] text-[400px] justify-center text-center h-[10vh] bg-slate-100">
          <Link href="/central-beuaty-award">
            Centrall Beauty Award 2024
          </Link>
        </div>
        <div className="border-2 m-[100px] items-center flex rounded-[100px] text-[400px] justify-center text-center h-[10vh] bg-slate-100">
          <Link href="/matching-game">
            Matching-Game
          </Link>
        </div>
        <div className="border-2 m-[100px] items-center flex rounded-[100px] text-[400px] justify-center text-center h-[10vh] bg-slate-100">
          <Link href="/matching-game">
            Matching-Game
          </Link>
        </div>
      </div>
    </main>
  );
}
