'use client'
import React, { useEffect } from 'react'
import Webcam from "react-webcam";
import { useRef, useState, useCallback } from "react"; // import useState


import { FaCamera } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";


const page = () => {
    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState(5);

    const capture = useCallback(async () => {
        setInterval(() => {
            setTimeLeft(timeLeft => --timeLeft)
        }, 1000);
        setTimeout(() => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
        }, 5000);
    }, [webcamRef])

    const share = useCallback(() => {
        // 
    }, [webcamRef]);

    const retake = () => {
        setImgSrc(null);
    };

    const takeCap = () => {
    }

    useEffect(() => {
        let i = 0;

        function pollDOM() {
            console.log(i);
            i++;
        }

        const interval = setInterval(pollDOM, 3000);

        return () => clearInterval(interval);
    }, [])


    return (
        <div className='w-screen h-screen bg-[#F6E7DF]'>

            <div className='flex w-full m-auto items-center justify-center'>
                <img
                    src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024.png"
                />
            </div>

            {
                imgSrc ? (
                    <div>
                        <img
                            height={600}
                            width={600}
                            src={imgSrc}
                            alt="webcam"
                            className='flex w-[80%] h-auto m-auto items-center justify-center bg-white rounded-[40px]'
                        />
                        <div className='relative w-full m-auto justify-center items-center flex '>
                            <button
                                className='absolute w-[150px] h-[150px] text-black text-center text-[40px]  bg-white rounded-[100%] border-2 border-gray-400'
                                onClick={share}
                            >
                                <IoShareOutline className='w-full' size={80} style={{ color: '#7e7e7e' }} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>

                        <div className='absolute w-full items-center justify-center flex top-[30%] text-[200px]'>
                            {timeLeft}
                        </div>

                        <Webcam
                            height={600}
                            width={600}
                            ref={webcamRef}
                            className='flex w-[80%] h-auto m-auto items-center justify-center bg-white rounded-[40px]'

                        />
                        <div className='relative w-full m-auto  justify-center items-center flex '>
                            <button
                                className='absolute w-[150px] h-[150px] text-black text-center text-[40px]  bg-white rounded-[100%] border-2 border-gray-400'
                                onClick={capture}
                            >
                                <FaCamera className='w-full' size={80} style={{ color: '#7e7e7e' }} />
                            </button>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default page