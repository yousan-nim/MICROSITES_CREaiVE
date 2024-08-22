"use client"
import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/navigation'

import { data } from "../data"
import ButtonClick from '@/app/central-beuaty-award/utils'
import useSound from 'use-sound';

const page = () => {
  const [play] = useSound('/mp3/click.mp3');
  const router = useRouter()

  const [hero, setHero] = useState({
    img: data.data.BestCushion.first.image,
    name: data.data.BestCushion.first.name,
    qr: data.data.BestCushion.first.imageQr
  })

    const FirstClick = () => {
    play()
    setHero({
      img: data.data.BestCushion.first.image,
      name: data.data.BestCushion.first.name,
      qr: data.data.BestCushion.first.imageQr
    })
  }

  const SecondClick = () => {
    play()
    setHero({
      img: data.data.BestCushion.second.image,
      name: data.data.BestCushion.second.name,
      qr: data.data.BestCushion.second.imageQr
    })
  }

  const ThirdClick = () => {
    play()
    setHero({
      img: data.data.BestCushion.third.image,
      name: data.data.BestCushion.third.name,
      qr: data.data.BestCushion.third.imageQr
    })
  }

  const FourthClick = () => {
    play()
    setHero({
      img: data.data.BestCushion.fourth.image,
      name: data.data.BestCushion.fourth.name,
      qr: data.data.BestCushion.fourth.imageQr
    })
  }

  const FifthClick = () => {
    play()
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
          <img src="/img/CentralBeautyAward2024/CentralBeautyAward2024.png" />
        </div>

        <div className="absolute z-50 text-black text-[18px] h-[10vh] top-[85%] hv:top-[30%]  hv:flex-none hv:justify-start justify-around p-4 w-full hv:w-auto">
          <ButtonClick />
        </div>

        <div className='absolute z-50 right-1 hv:right-8 w-[20vw] hv:w-[250px] text-black top-[20vh] hv:p-4 hv:pt-0 move-left-animation'>
          <div onClick={FirstClick} className='border-2 rounded-[20px] shadow-xl '>
            <img src={data.data.BestCushion.first.image} className='hv:pt-4' />
            <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-sctoBold uppercase'>
              {data.data.BestCushion.first.name}
            </div>
          </div>

          <div onClick={SecondClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestCushion.second.image} className='hv:pt-4' />
            <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-sctoBold uppercase'>
              {data.data.BestCushion.second.name}
            </div>
          </div>

          <div onClick={ThirdClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestCushion.third.image} className='hv:pt-4' />
            <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-sctoBold uppercase'>
              {data.data.BestCushion.third.name}
            </div>
          </div>

          <div onClick={FourthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestCushion.fourth.image} className='hv:pt-4' />
            <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-sctoBold uppercase'>
              {data.data.BestCushion.fourth.name}
            </div>
          </div>

          <div onClick={FifthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestCushion.fifth.image} className='hv:pt-4' />
            <div className='hidden hv:text-[14px] hv:pt-4 hv:px-2 font-sctoBold uppercase'>
              {data.data.BestCushion.fifth.name}
            </div>
          </div>
        </div>

        <div className='w-[55vw] h-auto m-auto appear-animetion'>
          <div className='relative m-auto pt-10 justify-center items-center text-center w-full text-black text-[15px] hv:text-[30px] uppercase font-sctoBold'>
            {data.dataPageTitle}: {data.data.BestCushion.name}
          </div>

          {/* Hero image */}
          <div className='relative m-auto pt-10 justify-center items-center text-center w-full'>
            <img src={hero.img}
              className='w-[90vw] m-auto pb-2 hv:pb-8'
            />

            {/* Text */}
            <div className='text-black text-[15px] hv:text-[25px] w-[90%] h-[5vh] m-auto hv:p-4 font-sctoBold  uppercase p-2'>
              {hero.name}
            </div>
          </div>

          {/* QR code */}
          <div className='w-full m-auto text-black pt-10 hv:pt-[5vh] '>
            <div className='text-[12px] hv:text-[20px] pt-2 font-sctoBold uppercase p-2'>
              SCAN HERE!
            </div>
            <img src={hero.qr}
              className='w-[30vw] m-auto border-2 rounded-[20px] shadow-sm p-4'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page