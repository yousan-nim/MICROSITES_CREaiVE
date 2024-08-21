import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="w-full text-black text-[200px] text-center">
        TEST Deployment
      </div>

      <div className="w-full text-black m-auto grid grid-cols-4 gap-4">
        <div className="border-2 p-4 rounded-xl">
          <Link href="/central-beuaty-award">
            Centrall Beauty Award 2024
          </Link>
        </div>
        <div className="border-2 p-4 rounded-xl">
          <Link href="/central-beuaty-award">
            Centrall Beauty Award 2024
          </Link>
        </div>
        <div className="border-2 p-4 rounded-xl">
          <Link href="/central-beuaty-award">
            Centrall Beauty Award 2024
          </Link>
        </div>
        <div className="border-2 p-4 rounded-xl">
          <Link href="/central-beuaty-award">
            Centrall Beauty Award 2024
          </Link>
        </div>
      </div>
    </main>
  );
}
