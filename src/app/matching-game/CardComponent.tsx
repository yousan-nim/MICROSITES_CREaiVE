import React, { ReactHTML } from 'react'

import { DataShow } from './types'


type Props = {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  card: DataShow,
}

const CardComponent: React.FC<Props> = ({ onClick, card }) => {

  return (
    <div
      className={`w-full h-[10vh]  col-span-1 p-4 ${card.open ? card.color : "bg-white"}`}
      onClick={(e) => onClick && onClick(e)}
      data-testid={card.id}
    >
      <a className='relative text-[40px] flex text-center m-auto justify-center items-center pt-[30%]'>
        ?
      </a>
    </div>
  )
}

export default CardComponent