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

    const [isTouch, setIstouch] = useState(true)
    // bg-[#F6E7DF]








    const CliclHandler = () => {
        setIstouch(!isTouch)
    }


    useEffect(() => {

        if (isTouch) {
            setTimeout(() => {
                setIstouch(!isTouch)
                console.log("text")
            }, 30000)
        }

    }, [isTouch])

    return (
        <div >
            {
                isTouch ? (
                    <div className='relative w-screen h-screen overflow-hidden bg-[#F6E7DF] transition-all duration-75'>
                        <div className='relative w-screen h-screen items-center text-center text-[200px] m-auto' >
                            {/* selecting coins */}

                            <div className="absolute text-[90px] w-full h-screen text-center text-black top-[10%] ">
                                {/* "NOBODY DO THIS TASK PLEASE WAITING..." */}

                                <div className='absolute z-30'>                   
                                    <img 
                                        src='/MICROSITES_CREaiVE/img/Central trophy2.png'
                                        className='w-full h-full'
                                    />
                                </div>
                            </div>


                            <div>


                            </div>

                        </div>
                    </div>
                ) : (
                    <div className='relative w-screen h-screen overflow-hidden bg-black transition-all duration-75'>
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
                                <div className='animate-bounce flex text-[50px] justify-center items-center w-[300px] h-[300px] border-4 rounded-[100%] font-light font-serif text-gray-200 border-gray-200 m-auto bg-black bg-opacity-50 uppercase'>
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