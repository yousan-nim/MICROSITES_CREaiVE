"use client"
import React, { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/navigation'

import { data } from "./data"
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";


const page = () => {
  const router = useRouter()

  const [hero, setHero] = useState({
    img: data.data.BestEcoFriendly.first.image,
    name: data.data.BestEcoFriendly.first.name,
    qr: data.data.BestEcoFriendly.first.imageQr
  })

  const FirstClick = () => {
    setHero({
      img: data.data.BestEcoFriendly.first.image,
      name: data.data.BestEcoFriendly.first.name,
      qr: data.data.BestEcoFriendly.first.imageQr
    })
  }

  const SecondClick = () => {
    setHero({
      img: data.data.BestEcoFriendly.second.image,
      name: data.data.BestEcoFriendly.second.name,
      qr: data.data.BestEcoFriendly.second.imageQr
    })
  }

  const ThirdClick = () => {
    setHero({
      img: data.data.BestEcoFriendly.third.image,
      name: data.data.BestEcoFriendly.third.name,
      qr: data.data.BestEcoFriendly.third.imageQr
    })
  }

  const FourthClick = () => {
    setHero({
      img: data.data.BestEcoFriendly.fourth.image,
      name: data.data.BestEcoFriendly.fourth.name,
      qr: data.data.BestEcoFriendly.fourth.imageQr
    })
  }

  const FifthClick = () => {
    setHero({
      img: data.data.BestEcoFriendly.fifth.image,
      name: data.data.BestEcoFriendly.fifth.name,
      qr: data.data.BestEcoFriendly.fifth.imageQr
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

        <div className='absolute z-50 right-0 w-[250px] text-black top-[20vh] p-4 pt-0'>
          <div onClick={FirstClick} className='border-2 rounded-[20px] shadow-xl '>
            <img src={data.data.BestEcoFriendly.first.image} />
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestEcoFriendly.first.name}
            </div>
          </div>

          <div onClick={SecondClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestEcoFriendly.second.image} />
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestEcoFriendly.second.name}
            </div>
          </div>

          <div onClick={ThirdClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestEcoFriendly.third.image} />
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestEcoFriendly.third.name}
            </div>
          </div>

          <div onClick={FourthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestEcoFriendly.fourth.image} />
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestEcoFriendly.fourth.name}
            </div>
          </div>

          <div onClick={FifthClick} className='pt-4 mt-4  border-2 rounded-[20px] shadow-xl'>
            <img src={data.data.BestEcoFriendly.fifth.image} />
            <div className='text-[14px] pt-4 px-2 font-gothamBook uppercase'>
              {data.data.BestEcoFriendly.fifth.name}
            </div>
          </div>
        </div>

                <div className='border-2 rounded-[20px] w-[60vw] h-[60vh] m-auto shadow-xl'>
          <div className='relative m-auto pt-10 justify-center items-center text-center w-full text-red-600 text-[40px] uppercase font-gothamBook'>
            {data.dataPageTitle} : {data.data.BestEcoFriendly.name}
          </div>

          {/* Hero image */}
          <div className='relative m-auto pt-10 justify-center items-center text-center w-[50vw]'>
            <img src={hero.img}
              className='w-[90vw] m-auto'
            />

            {/* Text */}
            <div className='text-black text-[25px] border-2 rounded-[20px] w-[50vw] h-[5vh] m-auto shadow-lg p-4 font-centrallMeduim uppercase'>
              {hero.name}
            </div>
          </div>

          {/* QR code */}
          <div className='w-full m-auto text-black pt-10 '>
            <img src={hero.qr}
              className='w-[40%] m-auto border-2 rounded-[20px] shadow-xl p-4'
            />
            <div className='text-[20px] pt-4 font-gothamBook uppercase'>
              BUY HERE!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page