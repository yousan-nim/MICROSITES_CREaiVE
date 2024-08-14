import React from "react";
import { data } from "./data"

import Link from "next/link"

function BestSkincare() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white ">
      <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
        <div className="flex w-full m-auto items-center justify-center">
          <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
        </div>

        {/* <div className="absolute flex top-[30%] w-full h-full">
          <img src={data.data.BestEssence.first.image}
            className="absolute w-[400px] h-[400px] z-20 top-[1200px]" />
          <img src={data.data.BestEyeCream.first.image}
            className="w-[400px] h-[400px] z-20" />
          <img src={data.data.BestMenSkincare.first.image}
            className="w-[400px] h-[400px] z-20" />
          <img src={data.data.BestMoisturizer.first.image}
            className="w-[400px] h-[400px] z-20" />
          <img src={data.data.BestSerum.first.image}
            className="w-[400px] h-[400px] z-20" />
          <img src={data.data.BestSuncreen.first.image}
            className="absolute w-[400px] h-[400px] z-20 top-[1200px] r-[1200px]" />
        </div> */}

        <div className="relative w-screen h-screen m-auto items-center justify-center top-0 ">
          <img src={data.dataTrophy} className="absolute top-[-20%]" />
          <div>
            {/* Top Center */}
            <Link
              href="/central-beuaty-award/BestFrangrance"
            // onClick={() => {}}
            >
              <button className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-[1800px] m-auto">
                <img
                  src={data.data.BestEssence.first.image}
                  className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[600px]"
                />
              </button>
            </Link>
            {/* Top Center */}
            <Link
              href="/central-beuaty-award/BestEcoFriendly"
            // onClick={() => {}}
            >
              <button className="absolute top-1/2  right-[20%] -translate-y-[1800px] m-auto">
                <img
                  src={data.data.BestSuncreen.first.image}
                  className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[600px]"
                />
              </button>
            </Link>

            <Link
              href="/central-beuaty-award/BestLuxury"
            // onClick={() => {}}
            >
              <button className="absolute top-1/2 left-[2%] -translate-y-[1100px] m-auto">
                <img
                  src={data.data.BestSerum.first.image}
                  className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[600px]"
                />
              </button>
            </Link>

            <Link
              href="/central-beuaty-award/BestMakeUp"
            // onClick={() => {}}
            >
              <button className="absolute top-1/2 right-[8%] -translate-y-[1100px] m-auto">
                <img
                  src={data.data.BestMenSkincare.first.image}
                  className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[200px] hv:h-[400px]"
                />
              </button>
            </Link>

            <Link
              href="/central-beuaty-award/BestSkincare"
            // onClick={() => {}}
            >
              <button className="absolute top-1/2 left-[8%] -translate-y-[300px] m-auto">
                <img
                  src={data.data.BestMoisturizer.first.image}
                  className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[600px]"
                />
              </button>
            </Link>

            <Link
              href="/central-beuaty-award/BestEcoFriendly"
            // onClick={() => {}}
            >
              <button className="absolute top-1/2 right-[8%] -translate-y-[300px] m-auto">
                <img
                  src={data.data.BestEyeCream.first.image}
                  className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[600px]"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="relative w-screen h-full">
          <img src={data.dataTrophy} className="z-10" />
        </div>

      </div>
    </div>
  );
};

export default BestSkincare;
