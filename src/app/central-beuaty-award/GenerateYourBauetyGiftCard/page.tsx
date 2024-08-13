"use client";
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useState
import { FaCamera } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { PostImgAPI, NextStepImgAPI } from "./controller";


import Loader from "@/components/Loader";
import { setRequestMeta } from "next/dist/server/request-meta";

// const myAsync = async (): Promise<Record<string, number | string>> => {
//   await angelMowersPromise
//   const response = await myPaymentPromise
//   return response
// }


// async function PostImage(imageSrc:string): Promise<T> {
//   const { response } = await fetch(
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
//   ).then((response) => {
//     response.json()
//   }).then((response) =>
//     console.log(response)
//   )
//   return response.json()
// }



// const POSTImagg = async (): Promise<Record<string, number | string>> => {
//   await fetch(
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
//   )

//   return response
// }


const page = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null)

  const [timeLeft, setTimeLeft] = useState(1)
  const [totalURLs, setTotalURLs] = useState<string[]>([])
  const [totalImg, setTotalImg] = useState<string[]>([])
  const [temp, setTemp] = useState<string[]>([])


  const [stateRestponseUrl, setStateRestponseUrl] = useState<string[]>([])
  const [stateRestponse, setStateRestponse] = useState<string[]>([])
  const [ID, setID] = useState<string>()

  const urls = []


  // setTheArray(oldArray => [...oldArray, newElement]);
  // const POST_nextStept = async (_id: string) => {
  //   try {
  //     const response = await fetch(
  //       "https://campaign.creaive.ai/central/generateNextStep",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           _id: _id,
  //         }),
  //       }
  //     )
  //       .then(response => response.json())
  //       .then(response => {
  //         console.log(response)

  //         setStateRestponse((stateRestponse) => [...stateRestponse, response])
  //         console.log(stateRestponse)

  //         if (response.images_faceSwap.length < 4) {
  //           urls.push(response.images_faceSwap)
  //           POST_nextStept(_id)
  //         } else {
  //           console.log(totalURLs)
  //         }

  //         // setStateRestponse((stateRestponse) => [...stateRestponse, response])
  //         // console.log(stateRestponse)
  //         // setStateRestponse(stateRestponse => [...stateRestponse, response.images_faceSwap]),
  //         // setStateRestponseUrl(() => response.images_faceSwap)

  //       })

  //     // const result = await response.json()

  //     // setStateRestponse(stateRestponse => [...stateRestponse, result.images_faceSwap])
  //     // setStateRestponseUrl(() => result.images_faceSwap)

  //     // console.log(stateRestponse)
  //     // console.log(stateRestponseUrl)

  //     // if (result.images_faceSwap.length < 4) {
  //     //   POST_nextStept(_id)
  //     // } else {
  //     //   console.log(totalURLs)
  //     // }
  //   } catch (err) {
  //     console.error(err)
  //   }
  //   // finally {

  //   // }
  // }

  // const POST_request = async (imageSrc: string) => {

  //   const response = await fetch(
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
  //   )
  //   const result = await response.json()
  //   console.log(result, "response post image")




  //   POST_nextStept(result._id)

  // }



  const POST_nextStept = async (_id: string) => {
    try {
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
      )
        .then(response => response.json())
        .then(response => {
          console.log(response)

          setStateRestponse((stateRestponse) => [...stateRestponse, response])
          console.log(stateRestponse)

          if (response.images_faceSwap.length < 4) {
            urls.push(response.images_faceSwap)
            POST_nextStept(_id)
          } else {
            console.log(totalURLs)
          }

          // setStateRestponse((stateRestponse) => [...stateRestponse, response])
          // console.log(stateRestponse)
          // setStateRestponse(stateRestponse => [...stateRestponse, response.images_faceSwap]),
          // setStateRestponseUrl(() => response.images_faceSwap)

        })

      // const result = await response.json()

      // setStateRestponse(stateRestponse => [...stateRestponse, result.images_faceSwap])
      // setStateRestponseUrl(() => result.images_faceSwap)

      // console.log(stateRestponse)
      // console.log(stateRestponseUrl)

      // if (result.images_faceSwap.length < 4) {
      //   POST_nextStept(_id)
      // } else {
      //   console.log(totalURLs)
      // }
    } catch (err) {
      console.error(err)
    }
    // finally {

    // }
  }

  const POST_request = async (imageSrc: string) => {

    const response = await fetch(
      "https://campaign.creaive.ai/centrall/uploadBase64",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          img_upload: imageSrc,
        }),
      }
    )
    // const result = await response.json()
    // console.log(result, "response post image")


    // setStateRestponse(result)

    // console.log(stateRestponse)

    // POST_nextStept(result._id)

    return response.json()
  }



  // const capture = useCallback(async () => {
  //   const delay = 0;
  //   //
  //   setInterval(() => {
  //     setTimeLeft((timeLeft) => --timeLeft);
  //   }, delay);
  //   //
  //   setTimeout(async () => {
  //     const imageSrc = webcamRef.current?.getScreenshot();
  //     if (imageSrc) {
  //       setImgSrc(imageSrc);
  //       POST_request(imageSrc)
  //     }
  //   }, delay);
  // }, [webcamRef]);

  const capture = () => {
    const delay = 0;
    //
    setInterval(() => {
      setTimeLeft((timeLeft) => --timeLeft);
    }, delay);
    //
    setTimeout(async () => {
      const imageSrc = webcamRef.current?.getScreenshot();
      if (imageSrc) {
        setImgSrc(imageSrc);
        console.log(POST_request(imageSrc), "@ capture")


      }
    }, delay);
  }

  // const share = useCallback(() => {
  // }, [webcamRef]);

  // const retake = () => {
  //   setImgSrc(null);
  // };

  // const takeCap = () => {
  // };

  useEffect(() => {

    // const POST_nextStept = async (_id: string) => {
    //   try {
    //     const response = await fetch(
    //       "https://campaign.creaive.ai/central/generateNextStep",
    //       {
    //         method: "POST",
    //         headers: {
    //           "Content-type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           _id: _id,
    //         }),
    //       }
    //     )
    //     const result = await response.json()
    //     console.log(result, "response post next step")
    //     // setTotalURLs((totalURLs) => ([
    //     //   ...totalURLs,
    //     //   ...result.images_faceSwap
    //     // ]))
    //     // console.log(totalURLs)



    //     if (result.images_faceSwap.length < 4) {
    //       POST_nextStept(_id)
    //     } else {
    //       console.log(totalURLs)
    //     }
    //   } catch (err) {
    //     console.error(err)
    //   }
    // }

    // const POST_request = async (imageSrc: string) => {
    //   const response = await fetch(
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
    //   )
    //   const result = await response.json()
    //   console.log(result, "response post image")

    //   POST_nextStept(result._id)
    // }


    // if (imgSrc) {
    //   console.log("start")
    //   POST_request(imgSrc)
    // }


  }, [imgSrc]);

  return (
    <div className="w-screen h-screen bg-[#F6E7DF]">
      <div className="flex w-full m-auto items-center justify-center">
        <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
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
            // onClick={share}
            >
              <IoShareOutline
                className="w-full"
                size={80}
                style={{ color: "#7e7e7e" }}
              />
            </button>
          </div>


          {/* <div>
            {
              totalImg ?? (
                <div>
                  {totalURLs.map((img) =>
                    <div>
                      <img
                      src={img}
                      />
                    </div>
                  )}
                </div>
              )
            }


            <img src="https://campaign.creaive.ai/images/replicate/DQdOalCLETMyJtMUsrErrjNAyskvX6W7SWVLrKOcCk6gDGmbFxUswqAcnagzeFj6.png"
              className="w-full h-full"
            />
          </div> */}

          {/* <img src="https://campaign.creaive.ai/images/replicate/DQdOalCLETMyJtMUsrErrjNAyskvX6W7SWVLrKOcCk6gDGmbFxUswqAcnagzeFj6.png"
            className="w-full h-full"
          /> */}

          {
            totalImg.length == 4 ?? (
              <div className="grid grid-cols-2 w-full h-full p-4 gap-4">
                <img src="https://campaign.creaive.ai/images/replicate/DQdOalCLETMyJtMUsrErrjNAyskvX6W7SWVLrKOcCk6gDGmbFxUswqAcnagzeFj6.png"
                  className="w-full h-full"
                />

                <img src="https://campaign.creaive.ai/images/replicate/DQdOalCLETMyJtMUsrErrjNAyskvX6W7SWVLrKOcCk6gDGmbFxUswqAcnagzeFj6.png"
                  className="w-full h-full"
                />

                <img src="https://campaign.creaive.ai/images/replicate/DQdOalCLETMyJtMUsrErrjNAyskvX6W7SWVLrKOcCk6gDGmbFxUswqAcnagzeFj6.png"
                  className="w-full h-full"
                />

                <img src="https://campaign.creaive.ai/images/replicate/DQdOalCLETMyJtMUsrErrjNAyskvX6W7SWVLrKOcCk6gDGmbFxUswqAcnagzeFj6.png"
                  className="w-full h-full"
                />
              </div>
            )
          }

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
