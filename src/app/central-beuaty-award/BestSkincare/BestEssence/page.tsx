import React from 'react'
import { data } from "../data"


const page = () => {



  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white ">
      <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
        <div className="flex w-full m-auto items-center justify-center">
          <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
        </div>

        <div className='absolute right-0 w-[300px] text-black top-[6vh] p-4'>
          <div className=''>
            <img src={data.data.BestEssence.second.image} />
            <div className='text-[18px]'>
              {data.data.BestEssence.second.name}
            </div>
          </div>

          <div className=''>
            <img src={data.data.BestEssence.third.image} />
            <div className='text-[18px]'>
              {data.data.BestEssence.third.name}
            </div>
          </div>

          <div className=''>
            <img src={data.data.BestEssence.fourth.image} />
            <div className='text-[18px]'>
              {data.data.BestEssence.fourth.name}
            </div>
          </div>

          <div className=''>
            <img src={data.data.BestEssence.fifth.image} />
            <div className='text-[18px]'>
              {data.data.BestEssence.fifth.name}
            </div>
          </div>
        </div>

        <div className='m-auto justify-center items-center pt-10'>
          <img src={data.data.BestEssence.first.image}
            className='w-[80vw] m-auto'
          />

          <div className='text-black text-[32px]'>
            {data.data.BestEssence.first.name}
          </div>
        </div>
        <div className='w-full m-auto text-black pt-10 '>
          <img src={data.data.BestEssence.first.imageQr}
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