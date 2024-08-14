import React from 'react'
import { data } from "../data"


const page = () => {



  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white ">
      <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
        <div className="flex w-full m-auto items-center justify-center">
          <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
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