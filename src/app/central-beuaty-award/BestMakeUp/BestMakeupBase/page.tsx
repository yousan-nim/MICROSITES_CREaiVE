"use client"
import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/navigation'

import { data } from "../data"
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";


const page = () => {
  const router = useRouter()

  const [hero, setHero] = useState({
    img: data.data.BestMakeupBase.first.image,
    name: data.data.BestMakeupBase.first.name,
    qr: data.data.BestMakeupBase.first.imageQr
  })

  const FirstClick = () => {
    setHero({
      img: data.data.BestMakeupBase.first.image,
      name: data.data.BestMakeupBase.first.name,
      qr: data.data.BestMakeupBase.first.imageQr
    })
  }

  const SecondClick = () => {
    setHero({
      img: data.data.BestMakeupBase.second.image,
      name: data.data.BestMakeupBase.second.name,
      qr: data.data.BestMakeupBase.second.imageQr
    })
  }

  const ThirdClick = () => {
    setHero({
      img: data.data.BestMakeupBase.third.image,
      name: data.data.BestMakeupBase.third.name,
      qr: data.data.BestMakeupBase.third.imageQr
    })
  }

  const FourthClick = () => {
    setHero({
      img: data.data.BestMakeupBase.fourth.image,
      name: data.data.BestMakeupBase.fourth.name,
      qr: data.data.BestMakeupBase.fourth.imageQr
    })
  }

  const FifthClick = () => {
    setHero({
      img: data.data.BestMakeupBase.fifth.image,
      name: data.data.BestMakeupBase.fifth.name,
      qr: data.data.BestMakeupBase.fifth.imageQr
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

        <div className='absolute text-black text-[18px] w-[100px] h-[100px] top-[50%] p-4'>
          <MdHome size={80} onClick={() => router.push('/central-beuaty-award')} color='#e4c7ad' className='m-4 border-2 border-[#e4c7ad] rounded-[100px]' />
          <MdOutlineArrowBack size={80} onClick={() => router.back()} color='#e4c7ad' className='m-4 border-2 border-[#e4c7ad] rounded-[100px]' />
        </div>

        <div className='absolute z-50 right-8 w-[250px] text-black top-[20vh] p-4 pt-0 '>
          <div onClick={FirstClick} className='border-2 rounded-[20px] shadow-xl '>
            <img src={data.data.BestMakeupBase.first.image} className='pt-4'/>
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestMakeupBase.first.name}
            </div>
          </div>

          <div onClick={SecondClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestMakeupBase.second.image} className='pt-4'/>
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestMakeupBase.second.name}
            </div>
          </div>

          <div onClick={ThirdClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestMakeupBase.third.image} className='pt-4'/>
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestMakeupBase.third.name}
            </div>
          </div>

          <div onClick={FourthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestMakeupBase.fourth.image} className='pt-4'/>
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestMakeupBase.fourth.name}
            </div>
          </div>

          <div onClick={FifthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestMakeupBase.fifth.image} className='pt-4'/>
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestMakeupBase.fifth.name}
            </div>
          </div>
        </div>

        <div className='w-[55vw] h-auto m-auto '>
          <div className='relative m-auto pt-10 justify-center items-center text-center w-full text-black text-[40px] uppercase font-gothamBook'>
            {data.dataPageTitle} : {data.data.BestMakeupBase.name}
          </div>

          {/* Hero image */}
          <div className='relative m-auto pt-10 justify-center items-center text-center w-full'>
            <img src={hero.img}
              className='w-[90vw] m-auto pb-8'
            />

            {/* Text */}
            <div className='text-black text-[25px] border-2 rounded-[20px] w-[90%] h-auto m-auto shadow-sm p-4 font-gothamBook uppercase'>
              {hero.name}
            </div>
          </div>

          {/* QR code */}
          <div className='w-full m-auto text-black pt-10 '>
            <img src={hero.qr}
              className='w-[90%] m-auto border-2 rounded-[20px] shadow-sm p-4'
            />
            <div className='text-[20px] pt-4 font-gothamBook uppercase p-2'>
              BUY HERE!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page