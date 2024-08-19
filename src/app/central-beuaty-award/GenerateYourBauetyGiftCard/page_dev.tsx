"use client";
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useState
import { FaCamera } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { PostImgAPI, NextStepImgAPI } from "./controller";
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useQRCode } from 'next-qrcode';

// "/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" 
// import ImageTest from "/MICROSITES_CREaiVE/img/CentralBauetyAward2024/AW 01 No Logo.png"

import Loader from "@/components/Loader";

const page = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(2);
  // const [totalImg, setTotalImg] = useState<string[]>([]);
  const [keepUrls, setKeepUrls] = useState<string>("");

  const imageGen = 1
  // const imageGenTest = ImageTest

  const router = useRouter();
  const { Canvas } = useQRCode();


  // #########################################################################
  // #########################################################################
  // #########################################################################
  const POST_nextStept = async (_id: string) => {
    const response = await fetch(
      "https://campaign.creaive.ai/central/generateNextStep",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          _id: _id,
        }),
      }
    );
    const result = await response.json();
    // console.log(result, "response post next step");

    if (result.images_faceSwap.length < imageGen) {
      POST_nextStept(_id);
    } else {
      setKeepUrls(result.images_faceSwap);
      // console.log(keepUrls)
    }
  };

  // #########################################################################
  // #########################################################################
  // #########################################################################
  const POST_request = async (imageSrc: string) => {
    const response = await fetch(
      "https://openapi.akool.com/api/open/v3/faceswap/highquality/specifyimage",
      // https://thairath.promptdue.com/centrall/uploadBase64
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          // img_upload: imageSrc,
          clientId: "IDON4olpqHVDRKEhkx4GqHHg==",
          clientSecret: "iGqCtwP84vfdAFDNWc5oMz2o6WU0ShK+",
          // redirect: "follow"
          sourceImage: [
            {
              path: imageSrc
            }
          ],
          targetImage: [
            {
              path: "https://drive.google.com/file/d/1S_pAYK3efdH54iAK1TESud1wpYSP9Aqj/view?usp=sharing"
            }
          ],
          face_enhance: 0
        }),
        
      }
    );
    const result = await response.json();
    console.log(result, "response post image");
    // POST_nextStept(result._id);

    setKeepUrls(result.images_faceSwap);
    // console.log(result.images_faceSwap);
  };

  // #########################################################################
  // #########################################################################
  // #########################################################################
  const capture = () => {
    const delay = 2000;

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
  };

  // const share = useCallback(() => {
  // }, [webcamRef]);

  // const retake = () => {
  //   setImgSrc(null);
  // };

  // const takeCap = () => {
  // };

  useEffect(() => {
    console.log(keepUrls);
    console.log(keepUrls.length);
  }, [keepUrls]);

  return (
    <div>
      {keepUrls.length > 0 ? (
        <div className="absolute z-100 w-screen h-screen bg-[#F6E7DF]">
          <div className="flex w-full m-auto items-center justify-center">
            <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
          </div>
          <div className="absolute z-100 text-black text-[18px] justify-end w-full h-[100px] top-[80%] hv:top-[15%] pt-4 ">
            {/* <div className="flex justify-around  hv:justify-start hv:ml-[58px]">
              <MdOutlineArrowBack
                size={80}
                onClick={() => router.back()}
                color="#e4c7ad"
                className="m-4 border-2 border-[#e4c7ad] rounded-[100px]"
              />
              <MdHome
                size={80}
                onClick={() => router.push("/central-beuaty-award")}
                color="#e4c7ad"
                className="m-4 border-2 border-[#e4c7ad] rounded-[100px]"
              />
            </div> */}
          </div>
          <div className="absolute grid grid-cols-1 w-screen p-4 gap-4 bg-[#F6E7DF] pt-8">
            <img
              src={`${keepUrls}`}
              className="000px] rounded-[40px] m-auto"
            />
            <div className="relative z-20 w-full m-auto justify-center items-center flex ">
              <div className="flex border-2 rounded-[40px] m-auto justify-center items-center">
                <MdOutlineArrowBack
                  size={80}
                  onClick={() => router.back()}
                  color="#e4c7ad"
                  className="m-4 border-2 border-[#e4c7ad] rounded-[100px]"
                />
                <Canvas
                  text={`${keepUrls}`}
                  options={{
                    errorCorrectionLevel: 'M',
                    margin: 3,
                    scale: 8,
                    width: 250,
                    color: {
                      dark: '#000000',
                      light: '#F6E7DF',
                    },
                  }}
                />
              <MdHome
                size={80}
                onClick={() => router.push("/central-beuaty-award")}
                color="#e4c7ad"
                className="m-4 border-2 border-[#e4c7ad] rounded-[100px]"
              />
              </div>
              {/* <button
                className="absolute z-50 w-[150px] h-[150px] text-black text-center text-[40px] bg-[#F6E7DF] border-[#e4c7ad] rounded-[100%] border-2 "
              // onClick={share}
              >
                <IoShareOutline
                  className="w-full border-[#e4c7ad]"
                  size={80}
                  color="#e4c7ad"
                // style={{ color: "#7e7e7e" }}
                />
              </button> */}
            </div>
          </div>

        </div>
      ) : (
        <div className="w-screen h-screen bg-[#F6E7DF]">
          <div className="flex w-full m-auto items-center justify-center">
            <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
          </div>

          <div className="absolute text-black text-[18px] justify-end w-full h-[100px] top-[80%] hv:top-[15%] pt-4 ">
            <div className="flex justify-around  hv:justify-start hv:ml-[58px]">
              <MdOutlineArrowBack
                size={80}
                onClick={() => router.back()}
                color="#e4c7ad"
                className="m-4 border-2 border-[#e4c7ad] rounded-[100px]"
              />
              <MdHome
                size={80}
                onClick={() => router.push("/central-beuaty-award")}
                color="#e4c7ad"
                className="m-4 border-2 border-[#e4c7ad] rounded-[100px]"
              />
            </div>
          </div>

          {imgSrc ? (
            <div>
              <div className="absolute text-black text-[18px] w-[100px] h-[100px] top-[50%] p-4">
              </div>
              <div className="relative">
                {/*  */}
                <img
                  src={imgSrc}
                  alt="webcam"
                  className="z-0 flex blur-lg  m-auto items-center justify-center bg-white rounded-[40px] w-[400px] h-[600px] object-cover hv:w-[1000px] hv:h-auto"
                />
                {/*  */}
                <div className="absolute z-10 w-full top-[40%]">
                  <Loader />
                </div>
              </div>



              {/* {keepUrls.length === 4 && (
                <div className="absolute z-100 w-screen h-screen bg-[#F6E7DF]">
                  <div className="flex w-full m-auto items-center justify-center">
                    <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
                  </div>
                  <div className="relative grid grid-cols-2 w-screen h-screen p-4 gap-4 bg-[#F6E7DF] pt-8">
                    <img
                      src={`https://campaign.creaive.ai/images/replicate/${keepUrls[0]}`}
                      className="w-full h-full"
                    />

                    <img
                      src={`https://campaign.creaive.ai/images/replicate/${keepUrls[1]}`}
                      className="w-full h-full"
                    />

                    <img
                      src={`https://campaign.creaive.ai/images/replicate/${keepUrls[2]}`}
                      className="w-full h-full"
                    />

                    <img
                      src={`https://campaign.creaive.ai/images/replicate/${keepUrls[3]}`}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )} */}
            </div>
          ) : (
            <div>
              <div className="absolute w-full items-center justify-center flex top-[38%] text-[200px]">
                {timeLeft}
              </div>

              <Webcam
                ref={webcamRef}
                screenshotFormat="image/png"
                color="#e4c7ad"
                className="flex w-[400px] h-[600px] object-cover hv:w-[1000px] hv:h-auto m-auto items-center justify-center bg-white rounded-[40px]"
              />

              <div className="relative w-full m-auto  justify-center items-center flex pt-4">
                <button
                  className="absolute top-[100%] w-[100px] h-[100px] hv:w-[150px] hv:h-[150px] text-black text-center text-[40px] bg-[#F6E7DF] border-[#e4c7ad] rounded-[100%] border-2 "
                  onClick={capture}
                >
                  <FaCamera
                    className="w-full m-auto border-[#e4c7ad]"
                    size={80}
                    color="#e4c7ad"
                  // style={{ color: "#7e7e7e" }}
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default page;