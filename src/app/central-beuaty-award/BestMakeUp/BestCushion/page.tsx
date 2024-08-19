"use client"
import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/navigation'

import { data } from "../data"
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { audio } from "../../utils"

const page = () => {
  const router = useRouter()

  const [hero, setHero] = useState({
    img: data.data.BestCushion.first.image,
    name: data.data.BestCushion.first.name,
    qr: data.data.BestCushion.first.imageQr
  })

  const FirstClick = () => {
    audio.play()
    setHero({
      img: data.data.BestCushion.first.image,
      name: data.data.BestCushion.first.name,
      qr: data.data.BestCushion.first.imageQr
    })
  }

  const SecondClick = () => {
    audio.play()
    setHero({
      img: data.data.BestCushion.second.image,
      name: data.data.BestCushion.second.name,
      qr: data.data.BestCushion.second.imageQr
    })
  }

  const ThirdClick = () => {
    audio.play()
    setHero({
      img: data.data.BestCushion.third.image,
      name: data.data.BestCushion.third.name,
      qr: data.data.BestCushion.third.imageQr
    })
  }

  const FourthClick = () => {
    audio.play()
    setHero({
      img: data.data.BestCushion.fourth.image,
      name: data.data.BestCushion.fourth.name,
      qr: data.data.BestCushion.fourth.imageQr
    })
  }

  const FifthClick = () => {
    audio.play()
    setHero({
      img: data.data.BestCushion.fifth.image,
      name: data.data.BestCushion.fifth.name,
      qr: data.data.BestCushion.fifth.imageQr
    })
  }


  useEffect(() => {

    console.log(hero)

  }, [hero])

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white ">
      <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
        <div className="flex w-[80%] hv:w-full m-auto items-center justify-center">
          <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
        </div>

        <div className="absolute z-50 text-black text-[18px] h-[10vh] top-[85%] hv:top-[30%] flex hv:flex-none hv:justify-start justify-around p-4 w-full hv:w-auto">
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
            className="m-4 border-2 border-[#e4c7ad] rounded-[100px] "
          />
        </div>

        <div className='absolute z-50 right-1 hv:right-8 w-[20vw] hv:w-[250px] text-black top-[20vh] hv:p-4 hv:pt-0 move-left-animation'>
          <div onClick={FirstClick} className='border-2 rounded-[20px] shadow-xl '>
            <img src={data.data.BestCushion.first.image} className='hv:pt-4' />
            <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-gothamBook uppercase'>
              {data.data.BestCushion.first.name}
            </div>
          </div>

          <div onClick={SecondClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestCushion.second.image} className='hv:pt-4' />
            <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-gothamBook uppercase'>
              {data.data.BestCushion.second.name}
            </div>
          </div>

          <div onClick={ThirdClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestCushion.third.image} className='hv:pt-4' />
            <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-gothamBook uppercase'>
              {data.data.BestCushion.third.name}
            </div>
          </div>

          <div onClick={FourthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestCushion.fourth.image} className='hv:pt-4' />
            <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-gothamBook uppercase'>
              {data.data.BestCushion.fourth.name}
            </div>
          </div>

          <div onClick={FifthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestCushion.fifth.image} className='hv:pt-4' />
            <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-gothamBook uppercase'>
              {data.data.BestCushion.fifth.name}
            </div>
          </div>
        </div>

        <div className='w-[55vw] h-auto m-auto appear-animetion'>
          <div className='relative m-auto pt-10 justify-center items-center text-center w-full text-black text-[15px] hv:text-[40px] uppercase font-gothamBook'>
            {data.dataPageTitle} : {data.data.BestCushion.name}
          </div>

          {/* Hero image */}
          <div className='relative m-auto pt-10 justify-center items-center text-center w-full'>
            <img src={hero.img}
              className='w-[90vw] m-auto pb-2 hv:pb-8'
            />

            {/* Text */}
            <div className='text-black text-[15px] hv:text-[25px] border-2 rounded-[20px] w-[90%] h-auto m-auto shadow-sm hv:p-4 font-gothamBook uppercase p-2'>
              {hero.name}
            </div>
          </div>

          {/* QR code */}
          <div className='w-full m-auto text-black pt-2 '>
            <img src={hero.qr}
              className='w-[90%] m-auto border-2 rounded-[20px] shadow-sm p-4'
            />
            <div className='hidden hv:text-[20px] hv:pt-4 hv:font-gothamBook hv:uppercase hv:p-2'>
              BUY HERE!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page