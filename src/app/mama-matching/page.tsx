"use client"
import React, { useEffect, useState, useRef } from 'react'
import useSound from 'use-sound';
import data, { cardsData } from './data'
import CardComponent from './CardComponent'
// import Sound from './Sound';
import { Data } from './types'
import { DataShow } from './types'

import { IoMdRefresh } from "react-icons/io";


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
    const [overtime] = useSound('/mp3/timeout.mp3');
    const [youlose] = useSound('/mp3/youlose.mp3');

    // const [soundGame] = useSound('/mp3/Full Version.mp3');
    // const [soundgame, setSoundGame] = useState<boolean>(false);

    const audioRef = useRef<HTMLAudioElement>(null);

    const [start, setStart] = useState(false)
    const [time, setTime] = useState(50);
    const [timeOut, setTimeOut] = useState(false)
    const [winGame, setWinGame] = useState(false)
    const [failGame, setFailGame] = useState(false)


    const shuffle = (array: Data[]) => {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array
    }

    const checker = async () => {

        console.log("check")
        console.log(listcard)

        // cardState.map(data => changeCardStatusHandlerOpenAll(data))

        if (cardState.every(data => data.open === true)) {
            setWinGame(true)

            console.log("win")
            setTimeout(() => {
                cardState.map(data => changeCardStatusHandler(data))
                setCradState(shuffle(cardsData))
                setStart(false)
                // setWinGame(true)

            }, 3000)
            win()

            



            setTimeout(() => {
                setCradState(shuffle(cardsData))
                // setStart(false)
                // setWinGame(false)
            }, 6000)

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

    const changeCardStatusHandlerCloseAll = async (card: DataShow) => {
        card.open = false
        let newState = [...cardState];
        await setCradState(newState);
    };

    const changeCardStatusHandlerOpenAll = async (card: DataShow) => {
        card.open = true
        let newState = [...cardState];
        await setCradState(newState);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>, card: DataShow) => {
        e.preventDefault()

        play()

        // setCradState(shuffle(cardsData))

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

    // Timer Logic
    useEffect(() => {
        if (winGame || !start || time <= 0) return;

        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        // Cleanup timer
        return () => clearInterval(timer);
    }, [start, time]);

    useEffect(() => {
        // Handle timer reaching zero
        if (time <= 0) {
            setFailGame(true);
            setStart(false);
            overtime();
            setTimeout(() => {
                youlose();
            }, 2000);

            setTimeout(() => {
                setFailGame(false)
                cardState.map(data => changeCardStatusHandlerCloseAll(data))
                setCradState(shuffle(cardsData))
                setTime(50)
            }, 6000);
        }
    }, [time]);

    //Music Audio  
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, [1000]);

    return (
        <div className='max-w-[1780px] m-auto xl:[1280px] relative'>
            <div className='absolute w-[150px] h-[150px] text-[80px] font-mono text-pink-500 border-pink-500 border-2 rounded-[100%] text-center pt-4'>
                {
                    time
                }s
            </div>
            {/* <CouterTime start={start} /> */}
            {!start && (
                <div className='absolute z-10 w-full text-[120px] top-[20%] text-center h-[60vh] pt-[15vh] backdrop-blur-sm'>
                    <button
                        onClick={() => setStart(true)}
                        className='flex justify-center items-center m-auto w-[400px] pt-[300px] text-black font-bold '>
                        <img src='/assets/AI Games Start Button.png' />
                    </button>
                </div>
            )}

            {winGame && (
                <div className='absolute z-20 w-full text-[120px] top-[20%] text-center h-[60vh] pt-[15vh] backdrop-blur-sm'>
                    <img src="/MAMA/You Win.png" className='w-full h-full' />

                    {!start && (
                        <button
                            onClick={() => {
                                setStart(false)
                                setWinGame(false)
                                setTime(50)
                            }}
                            className='flex justify-center items-center m-auto w-[400px] pt-[30px] text-black font-bold '>
                            <IoMdRefresh size={80} className='text-purple-700'/>
                        </button>
                    )}
                </div>
            )}

            {failGame && (
                <div className='absolute z-10 w-full text-[120px] top-[20%] text-center h-[60vh] pt-[15vh] backdrop-blur-sm '>
                    <img src="/MAMA/You Lose.png" className='w-full h-full' />
                </div>
            )}

            <audio ref={audioRef} loop>
                <source src="/mp3/Full Version.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>


            {/* <Sound /> */}


            {/*  */}
            <div className='md:text-[30px] text-[8em] font-bold text-white w-full text-center pt-[8vh] pb-[5vh]'>
                MATCHING GAMES
            </div>
            {/*  */}
            <div className='w-full pt-[2vh] m-auto'>


                <div className='grid grid-cols-4 gap-[1vw] m-auto '>
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