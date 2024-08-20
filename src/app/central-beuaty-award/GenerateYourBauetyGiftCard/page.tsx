"use client";
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useState
import { FaCamera } from "react-icons/fa";
import { useQRCode } from 'next-qrcode';
import useSound from 'use-sound';
import ButtonClick from "@/app/central-beuaty-award/utils"
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { useRouter } from "next/navigation";


import Loader from "@/components/Loader";

const page = () => {

  // window.my_mute = false;

  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [buttonHidden, setButtonHidden] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState(3);
  const [keepUrls, setKeepUrls] = useState<string>("");
  const { Canvas } = useQRCode();
  const [play] = useSound('/MICROSITES_CREaiVE/mp3/click.mp3');
  const [count] = useSound('/MICROSITES_CREaiVE/mp3/cound.mp3');
  const router = useRouter();
  const POST_request = async (imageSrc: string) => {
    // setButtonHidden(!buttonHidden)
    const response = await fetch(
      "https://thairath.promptdue.com/centrall/uploadBase64",
      // https://thairath.promptdue.com/centrall/uploadBase64
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          img_upload: imageSrc,
        }),
      }
    );
    const result = await response.json();
    console.log(result, "response post image");
    // POST_nextStept(result._id);

    setKeepUrls(result.images_faceSwap);
    // console.log(result.images_faceSwap);
    // setButtonHidden(!buttonHidden)
  };

  const capture = () => {
    // play()
    count()
    setButtonHidden(!buttonHidden)
    const delay = 3000;

    setInterval(() => {
      setTimeLeft((timeLeft) => --timeLeft);
    }, 1000);

    setTimeout(async () => {
      const imageSrc = webcamRef.current?.getScreenshot();
      if (imageSrc) {
        setImgSrc(imageSrc);
        POST_request(imageSrc);
      }
    }, delay);
    setButtonHidden(!buttonHidden)
  };

  useEffect(() => {
    // console.log(keepUrls);
    // console.log(keepUrls.length)

  }, [keepUrls]);

  return (
    <div>
      {keepUrls.length > 0 ? (
        <div className="absolute z-100 w-screen h-auto bg-[#F6E7DF]">
          <div className="flex w-[80%] m-auto items-center justify-center">
            <img src="/MICROSITES_CREaiVE/img/CentralBeautyAward2024/CentralBeautyAward2024.png" />
          </div>
          {/* <div className="absolute z-100 text-black text-[18px] justify-end w-full h-[100px] top-[80%] hv:top-[17%] pt-4 ">
          </div> */}
          <div className=" grid grid-cols-1 w-screen p-4 gap-4 bg-[#F6E7DF] pt-8">
            <img
              src={`${keepUrls}`}
              className="w-[400px] hv:w-[1200px] rounded-[40px] m-auto"
            />
            <div className="absolute text-black text-[18px] justify-center w-full h-[100px] top-[69%] hv:top-[12%] pt-4 ">
              <ButtonClick />
            </div>

            <div className="hidden relative z-20 w-full m-auto justify-center items-center hv:flex overflow-hidden">
              <div className="m-auto justify-center items-center bg-white ">
                <Canvas
                  text={`${keepUrls}`}
                  options={{
                    errorCorrectionLevel: 'M',
                    margin: 3,
                    scale: 8,
                    width: 300,
                    color: {
                      dark: '#000000',
                      light: '#FFFFFF',
                    },
                  }}
                />
                <div className="text-[18px] text-semiBlod text-black w-full m-auto text-center">
                  SCAN FOR DOWNLOAD
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-auto bg-[#F6E7DF]">

          <div className="flex w-[80%] m-auto items-center justify-center">
            <img src="/MICROSITES_CREaiVE/img/CentralBeautyAward2024/CentralBeautyAward2024.png" />
          </div>

          {imgSrc ? (
            <div className="border-[#e4c7ad] h-full">
              <div className="absolute text-black text-[18px] w-[100px] h-[100px] top-[50%] p-4 ">
              </div>
              <div className="relative">
                {/*  */}
                <img
                  src={imgSrc}
                  alt="webcam"
                  className="z-0 flex blur-lg m-auto items-center justify-center bg-white rounded-[40px] w-[400px] h-[500px] object-center hv:w-[1200px] hv:h-auto"
                />
                {/*  */}
                <div className="absolute z-10 w-full top-[40%]">
                  <Loader />
                </div>
              </div>
            </div>
          ) : (
            <div className="border-[#e4c7ad] h-[100vh]">
              <div className="absolute w-full items-center justify-center flex top-[30%] text-[200px]">
                {timeLeft}
              </div>

              <div className="absolute hidden hv:flex justify-start ml-[100px] text-black text-[18px]  w-full h-[100px] top-[69%] hv:top-[12%] pt-4 ">
                <ButtonClick />
              </div>

              <div>
                <Webcam
                  ref={webcamRef}
                  screenshotFormat="image/png"
                  color="#e4c7ad"
                  className="flex w-[400px] h-[500px] object-cover hv:w-[1200px] hv:h-auto m-auto items-center justify-center bg-white rounded-[40px]"
                />
              </div>


              <div className="relative w-full h-auto m-auto justify-center items-center flex py-4 border-[#e4c7ad]">
                {
                  buttonHidden ? (
                    <div>

                    </div>
                  ) : (
                    <button
                      className="relative flex justify-around top-[10vh] w-auto  hv:w-[150px] hv:h-[150px] text-black text-center text-[40px] rounded-[100%]  "
                      onClick={capture}
                    >
                      <MdOutlineArrowBack
                        size={80}
                        onClick={() => {
                          play()
                          router.back()
                        }}
                        color="#e4c7ad"
                        className="m-4 border-2 border-[#e4c7ad] rounded-[100px] bg-[#F6E7DF] w-[150px] hv:hidden"
                      />
                      <FaCamera
                        className="w-full m-auto border-[#e4c7ad] "
                        size={80}
                        color="#e4c7ad"
                      // style={{ color: "#7e7e7e" }}
                      />
                      <MdHome
                        size={80}
                        onClick={() => {
                          play()
                          router.push("/central-beuaty-award")
                        }}
                        color="#e4c7ad"
                        className="m-4 border-2 border-[#e4c7ad] rounded-[100px] bg-[#F6E7DF] w-[150px] hv:hidden"
                      />
                    </button>
                  )
                }
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default page;
