"use client"

import React, { useEffect } from 'react'
import { useRouter } from "next/navigation";
import useSound from 'use-sound';
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";






const ButtonClick = () => {
    const router = useRouter();
    const [play] = useSound('/MICROSITES_CREaiVE/mp3/click.mp3');


    const BackClick = () => {
        play()
        router.back()
    }
    const BackHome = () => {
        play()
        router.push("/central-beuaty-award")
    }


    return (
        <div className="justify-start hv:justify-start hv:ml-[10px]"> 
            <MdOutlineArrowBack
                size={80}
                onClick={BackClick}
                color="#e4c7ad"
                className="m-4 border-2 border-[#e4c7ad] rounded-[100px]"
            />
            <MdHome
                size={80}
                onClick={BackHome}
                color="#e4c7ad"
                className="m-4 border-2 border-[#e4c7ad] rounded-[100px]"
            />
        </div>
    )
}

export default ButtonClick