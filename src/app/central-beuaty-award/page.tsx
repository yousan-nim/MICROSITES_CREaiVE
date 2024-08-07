'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PointLight } from 'three';

import Tropgy from './Trophy';
// <!-- BODY -->
// <!-- #F6E7DF -->
// <!-- #e4c7ad -->
// <!-- #dcbb9a -->
// <!-- #b18b68 -->



interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CentralBeuatyAward = () => {

    // const [cardType, setCardType] = useState()
    const lightRef = useRef<PointLight>(null);

    const [isTouch, setIstouch] = useState(false)
    // bg-[#F6E7DF]








    const CliclHandler = () => {
        setIstouch(!isTouch)
    }


    useEffect(() => {

        // setTimeout(() => {
        //     setIstouch(!isTouch)
        //     console.log("text")
        // }, 2000)

        if (isTouch) {
            setTimeout(() => {
                setIstouch(!isTouch)
                console.log("text")
            }, 30000)
        }

    },[isTouch])

    return (
        <div className='relative w-screen h-screen overflow-hidden bg-black'>

            {/* <div className='absolute w-screen items-center text-center text-[200px] text-black m-auto '>
                CENTRAL 
            </div> */}



            {
                isTouch ? (
                    <div>
                        {/* selecting coins */}

                        <div className="absolute text-[120px] w-full text-center top-[30%]">
                            "ไม่มีคนทำต่อ รอไปก่อน"
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='absolute z-20 w-full h-full opacity-60'>
                            <video
                                loop
                                muted
                                autoPlay
                                preload='none'
                                className='w-full'
                            >
                                <source
                                    src="/MICROSITES_CREaiVE/mp4/award.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>

                        <div className='absolute z-30 w-full text-gray text-center top-[55%] opacity-loop-animate'>
                            <button onClick={CliclHandler}>
                                <div className='flex text-[50px] justify-center items-center w-[300px] h-[300px] border-4 rounded-[100%] font-light font-serif text-gray-200 border-gray-200 m-auto bg-black bg-opacity-50 uppercase'>
                                    Click !
                                </div>
                            </button>
                        </div>
                    </div>
                )
            }


            {/* <div className='absolute w-full h-full z-50 '>
                <Canvas
                    className='overflow-visible rounded-[20px]'>
                    <OrbitControls
                        // enableRotate
                        // autoRotate
                        onChange={(e) => {
                            if (!e) return;
                            const camera = e.target.object;

                            if (lightRef.current) {
                                lightRef.current.position.set(0, 1, 0);
                                lightRef.current.position.add(camera.position);
                            }
                        }} />
                    <ambientLight intensity={1} />

                    <pointLight
                        ref={lightRef}
                        intensity={15}
                        position={[1, 1, 1]}
                    />
                    <Tropgy />
                </Canvas>
            </div> */}




        </div>
    )
}

export default CentralBeuatyAward