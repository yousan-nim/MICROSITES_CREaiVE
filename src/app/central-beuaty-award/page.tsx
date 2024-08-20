"use client";

import React, { useEffect, useRef, useState } from "react";
import useSound from 'use-sound';
import { useAppSelector, useAppDispatch, useAppStore } from '../../lib/hook'
import Link from "next/link";
// <!-- COLORS -->
// <!-- # -->
// <!-- #e4c7ad -->
// <!-- #dcbb9a -->
// <!-- #b18b68 -->


const CentralBeuatyAward = () => {
  // const router = useRouter()
  const store = useAppStore()
  const initialized = useRef(false)
  if (!initialized.current) {
    // store.dispatch(initializeProduct(product))
    initialized.current = true
  }


  const [isTouch, setIstouch] = useState(true);

  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  const [play] = useSound('/MICROSITES_CREaiVE/mp3/click.mp3');


  const CliclHandler = () => {
    setIstouch(!isTouch);
  };

  useEffect(() => {

    const heightx = window.innerHeight
    const widthx = window.innerWidth

    setHeight(heightx)
    setWidth(widthx)

    if (isTouch) {
      setTimeout(() => {
        setIstouch(!isTouch)
      }, 30000)
    }
  }, [isTouch]);

  return (
    <div>
      {isTouch ? (
        <div className="relative w-screen h-screen overflow-hidden bg-white appear-animetion">
          {/* <div className="absolute text-[100px] bg-red-600">
            {width}x{height}
           </div>  */}
          <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
            <div className="flex w-[80%] hv:w-full m-auto items-center justify-center">
              <img
                src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png"
              // onClick={}
              />
            </div>

            <div className="relative z-50 w-screen h-screen m-auto items-center justify-center top-[15%] ">
              <Link

                href="/central-beuaty-award/GenerateYourBauetyGiftCard"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40vh] m-auto "
                onClick={() => play()}
              >
                <img
                  src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/Generate your beauty card.png"
                  className="w-[40vw]"
                />
              </Link>

              {/* Top Center */}
              <Link
                href="/central-beuaty-award/BestFrangrance"
                onClick={() => play()}
              >
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58vh] m-auto">
                  <img
                    src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/BestFrangrance/Best Fragrance.png"
                    className="w-[30vw]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestLuxury"
                onClick={() => play()}
              >
                <button className="absolute top-1/2 left-[2%] -translate-y-[44vh] m-auto">
                  <img
                    src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/BestLuxury/Best Luxury.png"
                    className="w-[30vw]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestMakeUp"
                onClick={() => play()}
              >
                <button className="absolute top-1/2 right-[2%] -translate-y-[44vh] m-auto">
                  <img
                    src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/BestMakeUp/Best Make Up.png"
                    className="w-[30vw]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestSkincare"
                onClick={() => play()}
              >
                <button className="absolute top-1/2 left-[8%] -translate-y-[22vh] m-auto">
                  <img
                    src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/BestSkincare/Best Skincare.png"
                    className="w-[30vw]"
                  />
                </button>
              </Link>

              <Link
                href="/central-beuaty-award/BestEcoFriendly"
                onClick={() => play()}
              >
                <button className="absolute top-1/2 right-[8%] -translate-y-[22vh] m-auto">
                  <img
                    src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/BestEcoFriendly/Best Eco-Friendly.png"
                    className="w-[30vw]"
                  />
                </button>
              </Link>
            </div>

          </div>
        </div>
      ) : (
        <div className="relative w-screen h-screen overflow-hidden bg-black transition-all duration-75" onClick={CliclHandler}>
          <div className="absolute z-20 w-full h-full opacity-60">
            <video loop muted autoPlay preload="none" className="w-screen h-screen object-cover">
              <source
                src="/MICROSITES_CREaiVE/mp4/CentralBauetyAward2024/award.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="absolute z-30 w-full text-gray text-center top-[50%] hv:text-end hv:top-[20%] opacity-loop-animate">
            <button onClick={CliclHandler}>
              <div className="animate-bounce flex text-[40px] justify-center items-center w-[200px] h-[200px] border-4 rounded-[100%] font-light font-serif text-gray-200 border-gray-200 m-auto bg-black bg-opacity-50 uppercase hv:mr-10">
                Touch
              </div>
            </button>
          </div>
          {/* <MdTouchApp size={120} className="justify-end w-full"/> */}
        </div>
      )}
    </div>
  );
};

export default CentralBeuatyAward;
