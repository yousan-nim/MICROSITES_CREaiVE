"use client"
import React from "react";
import { data } from "./data"
import { useRouter } from 'next/navigation'

import Link from "next/link"
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";


type Props = {
  image: string
  name: string
  href_to: string
}



const First_ProductBox = ({ image, name, href_to }: Props) => {
  return (
    <Link href={href_to}>
      <img src={image}
        className="w-[400px] h-[400px] z-20 top-[1200px]"
      />
      <div className="text-black text-[18px] p-4 ">
        {name}
      </div>
    </Link>
  )
}





function BestSkincare() {
  const router = useRouter()

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white ">
      <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
        <div className="flex w-full m-auto items-center justify-center">
          <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
        </div>

        <div className='absolute z-20 text-black text-[18px] w-[100px] h-[100px] top-[50%] p-4'>
          <MdHome size={80} onClick={() => router.push('/central-beuaty-award')} color='#e4c7ad' className='m-4 border-2 border-[#e4c7ad] rounded-[100px]' />
          <MdOutlineArrowBack size={80} onClick={() => router.back()} color='#e4c7ad' className='m-4 border-2 border-[#e4c7ad] rounded-[100px]' />
        </div>

        <div className="absolute z-10 flex top-[25%] w-full m-auto">
          <div className="grid grid-cols-12 justify-center items-center m-auto gap-10">
            <div className="col-start-4">
              {/*  */}
            </div>
            <div className="col-start-3 col-span-8 items-center justify-center m-auto">
              <div className="flex">
                <First_ProductBox image={data.data.BestEssence.first.image} name={data.data.BestEssence.name} href_to={data.data.BestEssence.href} />

                <First_ProductBox image={data.data.BestEyeCream.first.image} name={data.data.BestEyeCream.name} href_to={data.data.BestEssence.href} />
              </div>
            </div>


            <div className="col-start-2 col-span-3">
              <First_ProductBox image={data.data.BestMenSkincare.first.image} name={data.data.BestMenSkincare.name} href_to={data.data.BestEssence.href} />
            </div>

            <div className="col-end-12 col-span-3">
              <First_ProductBox image={data.data.BestMoisturizer.first.image} name={data.data.BestMoisturizer.name} href_to={data.data.BestEssence.href} />
            </div>


            <div className="col-start-3 col-span-8  items-center justify-center m-auto">
              <div className="flex">
                <First_ProductBox image={data.data.BestSerum.first.image} name={data.data.BestSerum.name} href_to={data.data.BestEssence.href} />

                <First_ProductBox image={data.data.BestSuncreen.first.image} name={data.data.BestSuncreen.name} href_to={data.data.BestEssence.href} />
              </div>
            </div>



            {/* <div className="col-end-4 col-span-3">
              <First_ProductBox image={data.data.BestSerum.fourth.image} />
            </div>

            <div className="col-end-13 col-span-3">
              <First_ProductBox image={data.data.BestSerum.fifth.image} />
            </div> */}
          </div>
        </div>


        <div className="relative w-screen h-full top-[-16%]">
          <img src={data.dataTrophy} className="z-0" />
        </div>

      </div>
    </div>
  );
};

export default BestSkincare;
