"use client"
import React, { useEffect, useState, FC } from 'react'
import { data } from "../data"


const page = () => {
  const [hero, setHero] = useState({
    img: data.data.BestEssence.first.image,
    name: data.data.BestEssence.first.name,
    qr: data.data.BestEssence.first.imageQr
  })

  const FirstClick = () => {
    setHero({
      img: data.data.BestEssence.first.image,
      name: data.data.BestEssence.first.name,
      qr: data.data.BestEssence.first.imageQr
    })
  }

  const SecondClick = () => {
    setHero({
      img: data.data.BestEssence.second.image,
      name: data.data.BestEssence.second.name,
      qr: data.data.BestEssence.second.imageQr
    })
  }

  const ThirdClick = () => {
    setHero({
      img: data.data.BestEssence.third.image,
      name: data.data.BestEssence.third.name,
      qr: data.data.BestEssence.third.imageQr
    })
  }

  const FourthClick = () => {
    setHero({
      img: data.data.BestEssence.fourth.image,
      name: data.data.BestEssence.fourth.name,
      qr: data.data.BestEssence.fourth.imageQr
    })
  }

  const FifthClick = () => {
    setHero({
      img: data.data.BestEssence.fifth.image,
      name: data.data.BestEssence.fifth.name,
      qr: data.data.BestEssence.fifth.imageQr
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

        <div className='absolute right-0 w-[300px] text-black top-[6vh] p-4'>
        <div onClick={FirstClick}>
            <img src={data.data.BestEssence.first.image} />
            <div className='text-[18px]'>
              {data.data.BestEssence.first.name}
            </div>
          </div>

          <div onClick={SecondClick}>
            <img src={data.data.BestEssence.second.image} />
            <div className='text-[18px]'>
              {data.data.BestEssence.second.name}
            </div>
          </div>

          <div onClick={ThirdClick}>
            <img src={data.data.BestEssence.third.image} />
            <div className='text-[18px]'>
              {data.data.BestEssence.third.name}
            </div>
          </div>

          <div onClick={FourthClick}>
            <img src={data.data.BestEssence.fourth.image} />
            <div className='text-[18px]'>
              {data.data.BestEssence.fourth.name}
            </div>
          </div>

          <div onClick={FifthClick}>
            <img src={data.data.BestEssence.fifth.image} />
            <div className='text-[18px]'>
              {data.data.BestEssence.fifth.name}
            </div>
          </div>
        </div>

        <div className='m-auto justify-center items-center pt-10'>
          <img src={hero.img}
            className='w-[80vw] m-auto'
          />

          <div className='text-black text-[32px]'>
            {hero.name}
          </div>
        </div>
        <div className='w-full m-auto text-black pt-10 '>
          <img src={hero.qr}
            className='w-[40%] m-auto border-2 rounded-[20px] '
          />
          <div className='text-[20px] pt-4'>
            BUY HERE!
          </div>
        </div>
      </div>
    </div>
  )
}

export default page