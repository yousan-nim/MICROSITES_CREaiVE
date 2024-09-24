import React, { ReactHTML } from 'react'

import { DataShow } from './types'


type Props = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  card: DataShow,
}

const CardComponent: React.FC<Props> = ({ onClick, card }) => {


  return (
    <div
      className={`w-[11.5vh] h-[11.5vh] col-span-1 rounded-xl m-auto shadow-2xl shadow-black ${card.open ? "transition-all duration-300 [transform:rotateY(180deg)] bg-white" : "bg-black "}`}

      onClick={(e) => onClick && onClick(e)}
      data-testid={card.id}
    >
      <a className='relative text-[40px] flex text-center m-auto justify-center items-center '>
        {
          card.open ? <div className=''>
            <img
              src={`/assets/${card.img} `}
              className='w-full p-0 [transform:rotateY(180deg)] rounded-xl'
            />
          </div>
            :
            <div className={`flex text-center m-auto justify-center items-center ${card.open ? '' : "transition-all duration-300 [transform:rotateY(360deg)]"}`}>
              <img
                src='/assets/Creaive Logo Final 06.png'
                className='p-[1vh] m-[1vh] h-full pt-[30%]'
              />
            </div>
        }
      </a>
    </div>
  )
}

export default CardComponent