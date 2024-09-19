"use client"
import React, { useEffect, useState } from 'react'

import data, { cardsData } from './data'
import CardComponent from './CardComponent'

import { DataShow } from './types'


const MatchingGame = () => {
    let [cardState, setCradState] = useState(cardsData)
    // let [clickSet, setClickSet] = useState([])
    let [firstCard, setFirstCard] = useState<DataShow | null>();
    let [secondCard, setSecondCard] = useState<DataShow | null>();
    let [wait, setWait] = useState(false);

    const [listcard, setListCard] = useState<DataShow[]>([])

    const checker = async () => {

        console.log("check")
        console.log(listcard)

        if (cardState.every(data => data.open === true)) {
            console.log("win")
            setTimeout(() => {
                cardState.map(data => changeCardStatusHandler(data))
            }, 3000)

        }

        if (listcard.length <= 2) {
            if (listcard[0].name === listcard[1].name) {
                // console.log("hellooo");
                setListCard([...listcard, listcard[0]])
                setListCard([...listcard, listcard[1]])
                setListCard([])
                // console.log(cardState)
            } else {
                // console.log("reset");
                changeCardStatusHandler(listcard[0]);
                changeCardStatusHandler(listcard[1]);
                setListCard([])
            }

        } else if (listcard.length > 2) {
            listcard.shift()
        } else {
            setListCard([])
        }

        if (firstCard)
            changeCardStatusHandler(firstCard);

        if (secondCard)
            changeCardStatusHandler(secondCard);
    };

    const changeCardStatusHandler = async (card: DataShow) => {
        card.open = !card.open;
        let newState = [...cardState];
        await setCradState(newState);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>, card: DataShow) => {
        e.preventDefault()

        if (listcard.length <= 0) {
            changeCardStatusHandler(card);
            listcard.push(card)
            console.log("first")
        } else if (listcard.length <= 1) {
            changeCardStatusHandler(card);
            listcard.push(card)
            console.log("second")
            setTimeout(() => {
                checker()
            }, 1000);


        }

    };


    useEffect(() => {
        // checker();
    }, [])

    return (
        <div>
            {/*  */}
            <div className='text-[8em] font-bold text-white w-full text-center pt-[8vh]'>
                MATCHING GAMES
            </div>
            {/*  */}
            <div className='w-full pt-[2vh] m-auto'>

                <div className='grid grid-cols-4 gap-[1vw] w-full'>
                    {
                        cardState?.map((card_) => {
                            return (
                                <CardComponent
                                    key={card_.id}
                                    card={card_}
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) => handleClick(e, card_)}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MatchingGame