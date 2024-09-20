"use client"
import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import data, { cardsData } from './data'
import CardComponent from './CardComponent'
// import Sound from './Sound';
import { DataShow } from './types'

const Sound = () => {
    return (
        <audio loop autoPlay>
            <source id="myAudio" src="/mp3/Full Version.mp3" />
        </audio>

    )
}

const MatchingGame = () => {
    let [cardState, setCradState] = useState(cardsData)
    // let [clickSet, setClickSet] = useState([])
    let [firstCard, setFirstCard] = useState<DataShow | null>();
    let [secondCard, setSecondCard] = useState<DataShow | null>();
    let [wait, setWait] = useState(false);

    const [listcard, setListCard] = useState<DataShow[]>([])

    const [play] = useSound('/mp3/Modern Click 1.wav');
    const [win] = useSound('/mp3/Win Game Sound.wav');
    const [correct] = useSound('/mp3/Positive Game Sound.wav');
    const [fail] = useSound('/mp3/Game Fail Sound.wav');
    // const [soundGame] = useSound('/mp3/Full Version.mp3');

    const [soundgame, setSoundGame] = useState<boolean>(true);



    const checker = async () => {

        console.log("check")
        console.log(listcard)

        if (cardState.every(data => data.open === true)) {
            console.log("win")
            setTimeout(() => {
                cardState.map(data => changeCardStatusHandler(data))
            }, 3000)
            win()

        }

        if (listcard.length <= 2) {
            if (listcard[0].name === listcard[1].name) {
                // console.log("hellooo");
                setListCard([...listcard, listcard[0]])
                setListCard([...listcard, listcard[1]])
                setListCard([])

                correct()
                // console.log(cardState)
            } else {
                // console.log("reset");
                changeCardStatusHandler(listcard[0]);
                changeCardStatusHandler(listcard[1]);
                setListCard([])
                fail()
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

        play()

        if (listcard.length <= 0) {
            changeCardStatusHandler(card);
            listcard.push(card)
            console.log("first")
        } else if (listcard.length <= 1) {
            if (card.id != listcard[0].id) {
                changeCardStatusHandler(card);
                listcard.push(card)
                console.log("second")
                setTimeout(() => {
                    checker()
                }, 1000);

            }

        }

    };

    // soundGame()

    // useEffect(() => {
    //     soundGame()
    // },[])
    
    return (
        <div className='max-w-[1780px] m-auto xl:w-[1280px]'>
            {
                soundgame && (<audio src="/mp3/Full Version.mp3" autoPlay loop />)
            }


            {/* <Sound /> */}


            {/*  */}
            <div className='md:text-[30px] text-[8em] font-bold text-white w-full text-center pt-[8vh] pb-[5vh]'>
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