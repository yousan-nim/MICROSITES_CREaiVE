"use client";
import React from "react";
import { data } from "./data";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { MdOutlineArrowBack } from "react-icons/md";
import { MdHome } from "react-icons/md";

type Props = {
  image: string;
  name: string;
  href_to: string;
};

const First_ProductBox = ({ image, name, href_to }: Props) => {
  return (
    <Link href={href_to}>
      <img src={image} className="w-[20vw] h-[12vh] z-20 top-[1200px] m-auto" />
      <div className="text-black text-[10px] hv:text-[30px] font-semiBold p-4 m-auto">{name}</div>
    </Link>
  );
};


function BestSkincare() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white ">
      <div className="relative w-screen h-screen items-center text-center text-[200px] m-auto">
        <div className="flex w-full m-auto items-center justify-center">
          <img src="/MICROSITES_CREaiVE/img/CentralBauetyAward2024/CentralBauetyAward2024.png" />
        </div>

        <div className="absolute z-0 hv:z-20 text-black text-[18px] w-screen h-[10vh] top-[85%] hv:top-[30%] flex hv:flex-none hv:justify-start justify-around p-4">
          <MdOutlineArrowBack
            size={80}
            onClick={() => router.back()}
            color="#e4c7ad"
            className="m-4 border-2 border-[#e4c7ad] rounded-[100px]"
          />
          <MdHome
            size={80}
            onClick={() => router.push("/central-beuaty-award")}
            color="#e4c7ad"
            className="m-4 border-2 border-[#e4c7ad] rounded-[100px] "
          />
        </div>

        <div className="absolute z-10 flex top-[23%] w-full m-auto font-gothamBook uppercase">
          <div className="grid grid-cols-12 justify-center items-center m-auto gap-10">
            <div className="col-start-4">{/*  */}</div>
            <div className="col-start-5 col-span-4 items-center justify-center m-auto top-[10vh]">
              <First_ProductBox
                image={data.data.BestFragranceEveryday.first.image}
                name={data.data.BestFragranceEveryday.name}
                href_to={data.data.BestFragranceEveryday.href}
              />
            </div>

            {/* <div className="col-end-11 col-span-3 items-center justify-center m-auto">
              <First_ProductBox
                image={data.data.BestSuncreen.first.image}
                name={data.data.BestSuncreen.name}
                href_to={data.data.BestSuncreen.href}
              />
            </div> */}

            <div className="col-start-2 col-span-3 text-[40px]">
              <First_ProductBox
                image={data.data.BestFragranceSporty.first.image}
                name={data.data.BestFragranceSporty.name}
                href_to={data.data.BestFragranceSporty.href}
              />
            </div>
            {/* <div className="col-end-12 col-span-3 text-[40px]">
              <First_ProductBox
                image={data.data.BestSerum.first.image}
                name={data.data.BestSerum.name}
                href_to={data.data.BestSerum.href}
              />
            </div> */}

            {/* <div className="col-start-3 col-span-3 text-[40px]">
              <First_ProductBox
                image={data.data.BestFragranceSpecialOcciasion.first.image}
                name={data.data.BestFragranceSpecialOcciasion.name}
                href_to={data.data.BestFragranceSpecialOcciasion.href}
              />
            </div> */}

            <div className="col-start-9 col-span-3 text-[40px]">
              <First_ProductBox
                image={data.data.BestFragranceSpecialOcciasion.first.image}
                name={data.data.BestFragranceSpecialOcciasion.name}
                href_to={data.data.BestFragranceSpecialOcciasion.href}
              />
            </div>
          </div>
        </div>

        <div className="relative w-screen h-full top-[-16%]">
          <img src={data.dataTrophy} className="z-0" />
        </div>
      </div>
    </div>
  );
}

export default BestSkincare;
