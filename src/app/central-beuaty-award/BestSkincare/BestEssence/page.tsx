import React from 'react'
import { data } from "../data"


const page = () => {



  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white ">
      <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
        <div className="flex w-full m-auto items-center justify-center">
          <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
        </div>


        <div className='absolute left-0 w-[300px] text-black border-2 rounded-r-[20px] top-[50%]'>
          <img src={data.data.BestEssence.first.imageQr}
            className='w-full'
          />
          <div className='text-[20px]'>
            BUY HERE!
          </div>
        </div>

        <div className='absolute right-0 w-[300px] text-black border-2 rounded-l-[20px] top-[20px] p-4'>
          <div className=''>
            <img src={data.data.BestEssence.second.image} />
            <div className='text-[20px]'>
              {data.data.BestEssence.second.name}
            </div>
          </div>

          <div className=''>
            <img src={data.data.BestEssence.third.image} />
            <div className='text-[20px]'>
              {data.data.BestEssence.third.name}
            </div>
          </div>

          <div className=''>
            <img src={data.data.BestEssence.fourth.image} />
            <div className='text-[20px]'>
              {data.data.BestEssence.fourth.name}
            </div>
          </div>

          <div className=''>
            <img src={data.data.BestEssence.fifth.image} />
            <div className='text-[20px]'>
              {data.data.BestEssence.fifth.name}
            </div>
          </div>
        </div>

        <div className='m-auto justify-center items-center pt-10'>
          <img src={data.data.BestEssence.first.image}
            className='w-[80vw] m-auto'
          />

          <div className='text-black text-[40px]'>
            {data.data.BestEssence.first.name}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page