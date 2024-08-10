"use client";
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useState
import { FaCamera } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { PostImgAPI } from "./controller";

import Loader from "@/components/Loader";

const page = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(1);
  // const dumpImage = () => <img src="" width={100} />;
  const capture = useCallback(async () => {
    const delay = 1000;
    //
    setInterval(() => {
      setTimeLeft((timeLeft) => --timeLeft);
    }, delay);
    //
    setTimeout(async () => {
      const imageSrc = webcamRef.current?.getScreenshot();
      if (imageSrc) {
        console.log("imgSrc", imageSrc);
        // PostImgAPI(imageSrc);
        setImgSrc(imageSrc);
        // try {
        //   const result = await fetch(
        //     "https://campaign.creaive.ai/centrall/uploadBase64",
        //     {
        //       method: "POST",
        //       headers: {
        //         "Content-type": "application/json",
        //       },
        //       body: JSON.stringify({
        //         img_upload: imageSrc,
        //       }),
        //     }
        //   );

        //   console.log(result, "res");
        // } catch (e) {
        //   console.log(e);
        // }
      }
    }, delay);

    // setImgSrc(imageSrc);
  }, [webcamRef]);

  const share = useCallback(() => {
    //
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

  const takeCap = () => {};

  useEffect(() => {
    // deepFunction()
  }, []);

  return (
    <div className="w-screen h-screen bg-[#F6E7DF]">
      <div className="flex w-full m-auto items-center justify-center">
        <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024.png" />
      </div>

      {imgSrc ? (
        <div>
          <div className="relative">
            {/*  */}
            <img
              src={imgSrc}
              alt="webcam"
              className="z-0 flex blur-lg w-[1728px] h-auto m-auto items-center justify-center bg-white rounded-[40px]"
            />
            {/*  */}
            <div className="absolute z-10 w-full top-[40%]">
              <Loader />
            </div>
          </div>

          {/* 1728 1296 */}
          <div className="relative w-full m-auto justify-center items-center flex ">
            <button
              className="absolute z-50 w-[150px] h-[150px] text-black text-center text-[40px] bg-white rounded-[100%] border-2 border-gray-400"
              onClick={share}
            >
              <IoShareOutline
                className="w-full"
                size={80}
                style={{ color: "#7e7e7e" }}
              />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="absolute w-full items-center justify-center flex top-[30%] text-[200px]">
            {timeLeft}
          </div>

          <Webcam
            ref={webcamRef}
            screenshotFormat="image/png"
            className="flex w-[1728px] h-auto m-auto items-center justify-center bg-white rounded-[40px]"
          />

          <div className="relative w-full m-auto  justify-center items-center flex ">
            <button
              className="absolute w-[150px] h-[150px] text-black text-center text-[40px] bg-white rounded-[100%] border-2 border-gray-400"
              onClick={capture}
            >
              <FaCamera
                className="w-full m-auto"
                size={80}
                style={{ color: "#7e7e7e" }}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
