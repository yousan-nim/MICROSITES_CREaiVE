import React from "react";
import { data } from "./data"

import Link from "next/link"


type Props = {
  image: string
}



const First_ProductBox = ({ image }: Props) => {
  return (
    <div>
      <img src={image}
        className="w-[400px] h-[400px] z-20 top-[1200px]"
      />
    </div>
  )
}





function BestSkincare() {


  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white ">
      <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
        <div className="flex w-full m-auto items-center justify-center">
          <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
        </div>

        <div className="absolute z-10 flex top-[25%] w-full m-auto">
          <div className="grid grid-cols-12 justify-center items-center m-auto">
            <div className="col-start-4">
              {/*  */}
            </div>
            <div className="col-start-5 col-span-6 col-end-9 items-center justify-center m-auto">
              <First_ProductBox image={data.data.BestSerum.first.image} />
            </div>

            <div className="col-start-3 col-span-3">
              <First_ProductBox image={data.data.BestSerum.second.image} />
            </div>

            <div className="col-end-11 col-span-3">
              <First_ProductBox image={data.data.BestSerum.third.image} />
            </div>

            <div className="col-end-4 col-span-3">
              <First_ProductBox image={data.data.BestSerum.fourth.image} />
            </div>

            <div className="col-end-13 col-span-3">
              <First_ProductBox image={data.data.BestSerum.fifth.image} />
            </div>
          </div>
        </div>


        <div className="relative w-screen h-full">
          <img src={data.dataTrophy} className="z-0" />
        </div>

      </div>
    </div>
  );
};

export default BestSkincare;
