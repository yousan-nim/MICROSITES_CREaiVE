"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
// <!-- COLORS -->
// <!-- #F6E7DF -->
// <!-- #e4c7ad -->
// <!-- #dcbb9a -->
// <!-- #b18b68 -->

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CentralBeuatyAward = () => {
  const [isTouch, setIstouch] = useState(true);

  const CliclHandler = () => {
    setIstouch(!isTouch);
  };

  const GenerateBauetyGiftCard = () => {};

  useEffect(() => {
    if (isTouch) {
        setTimeout(() => {
            setIstouch(!isTouch)
        }, 30000)
    }
  }, [isTouch]);

  return (
    <div>
      {isTouch ? (
        <div className="relative w-screen h-screen overflow-hidden bg-white ">
          <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
            <div className="flex w-full m-auto items-center justify-center">
              <img
                src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png"
                // onClick={}
              />
            </div>

            <div className="relative z-50 w-screen h-screen m-auto items-center justify-center top-0 ">
              <Link
                href="/central-beuaty-award/GenerateYourBauetyGiftCard"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[900px] m-auto "
                onClick={() => {}}
              >
                <img
                  src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/Generate your beauty giftcard.png"
                  className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[800px]"
                />
              </Link>

              {/* Top Center */}
              <Link
                href="/central-beuaty-award/BestFrangrance"
                onClick={() => {}}
              >
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[1600px] m-auto">
                  <img
                    src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/BestFrangrance/Best Fragrance.png"
                    className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[600px]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestLuxury"
                onClick={() => {}}
              >
                <button className="absolute top-1/2 left-[2%] -translate-y-[1100px] m-auto">
                  <img
                    src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/BestLuxury/Best Luxury.png"
                    className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[600px]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestMakeUp"
                onClick={() => {}}
              >
                <button className="absolute top-1/2 right-[2%] -translate-y-[1100px] m-auto">
                  <img
                    src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/BestMakeUp/Best Make Up.png"
                    className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[600px]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestSkincare"
                onClick={() => {}}
              >
                <button className="absolute top-1/2 left-[8%] -translate-y-[300px] m-auto">
                  <img
                    src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/BestEcoFriendly/.png"
                    className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[600px]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestEcoFriendly"
                onClick={() => {}}
              >
                <button className="absolute top-1/2 right-[8%] -translate-y-[300px] m-auto">
                  <img
                    src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/BestEcoFriendly/.png"
                    className="w-[100px] sm:w-[80px] md:w-[400px] xl:w-[200px] hv:w-[600px]"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-screen h-screen overflow-hidden bg-black transition-all duration-75">
          <div className="absolute z-20 w-full h-full opacity-60">
            <video loop muted autoPlay preload="none" className="w-full">
              <source
                src="/MICROSITES_CREaiVE/mp4/CentralBauetyAward2024/award.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="absolute z-30 w-full text-gray text-center top-[55%] opacity-loop-animate">
            <button onClick={CliclHandler}>
              <div className="animate-bounce flex text-[50px] justify-center items-center w-[300px] h-[300px] border-4 rounded-[100%] font-light font-serif text-gray-200 border-gray-200 m-auto bg-black bg-opacity-50 uppercase">
                Click !
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CentralBeuatyAward;
