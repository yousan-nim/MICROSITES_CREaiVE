"use client"
import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/navigation'

import { data } from "../data"
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";


const page = () => {
  const router = useRouter()

  const [hero, setHero] = useState({
    img: data.data.BestSerum.first.image,
    name: data.data.BestSerum.first.name,
    qr: data.data.BestSerum.first.imageQr
  })

  const FirstClick = () => {
    setHero({
      img: data.data.BestSerum.first.image,
      name: data.data.BestSerum.first.name,
      qr: data.data.BestSerum.first.imageQr
    })
  }

  const SecondClick = () => {
    setHero({
      img: data.data.BestSerum.second.image,
      name: data.data.BestSerum.second.name,
      qr: data.data.BestSerum.second.imageQr
    })
  }

  const ThirdClick = () => {
    setHero({
      img: data.data.BestSerum.third.image,
      name: data.data.BestSerum.third.name,
      qr: data.data.BestSerum.third.imageQr
    })
  }

  const FourthClick = () => {
    setHero({
      img: data.data.BestSerum.fourth.image,
      name: data.data.BestSerum.fourth.name,
      qr: data.data.BestSerum.fourth.imageQr
    })
  }

  const FifthClick = () => {
    setHero({
      img: data.data.BestSerum.fifth.image,
      name: data.data.BestSerum.fifth.name,
      qr: data.data.BestSerum.fifth.imageQr
    })
  }


  useEffect(() => {

    console.log(hero)

  }, [hero])

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white ">
      <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
        <div className="flex w-full m-auto items-center justify-center">
          <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
        </div>

        <div className='absolute z-50 text-black text-[18px] w-[100px] h-[100px] top-[50%] p-4'>
          <MdHome size={80} onClick={() => router.push('/central-beuaty-award')} color='#e4c7ad' className='m-4 border-2 border-[#e4c7ad] rounded-[100px]' />
          <MdOutlineArrowBack size={80} onClick={() => router.back()} color='#e4c7ad' className='m-4 border-2 border-[#e4c7ad] rounded-[100px]' />
        </div>

        <div className='absolute z-50 right-0 w-[250px] text-black top-[16vh] p-2'>
          <div onClick={FirstClick} className='border-2 rounded-[20px] shadow-xl '>
            <img src={data.data.BestSerum.first.image} />
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestSerum.first.name}
            </div>
          </div>

          <div onClick={SecondClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestSerum.second.image} />
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestSerum.second.name}
            </div>
          </div>

          <div onClick={ThirdClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestSerum.third.image} />
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestSerum.third.name}
            </div>
          </div>

          <div onClick={FourthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestSerum.fourth.image} />
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestSerum.fourth.name}
            </div>
          </div>

          <div onClick={FifthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestSerum.fifth.image} />
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestSerum.fifth.name}
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div className='relative m-auto pt-10 justify-center items-center text-center w-[50vw]'>
          <img src={hero.img}
            className='w-[80vw] m-auto'
          />

          {/* Text */}
          <div className='text-black text-[30px] border-2 rounded-[20px] w-[50vw] m-auto shadow-xl p-4 font-centrallMeduim uppercase'>
            {hero.name}
          </div>

        </div>

        {/* QR code */}
        <div className='w-full m-auto text-black pt-10 '>
          <img src={hero.qr}
            className='w-[30%] m-auto border-2 rounded-[20px] shadow-xl p-4'
          />
          <div className='text-[20px] pt-4 font-gothamBook uppercase'>
            BUY HERE!
          </div>
        </div>
      </div>
    </div>
  )
}

export default page