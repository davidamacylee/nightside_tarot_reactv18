import { useState } from 'react'
import TarotCard from './TarotCard'
import TarotDescription from './TarotDescription'
import ReadingOptions from './ReadingOptions'
import { tarot_server_calls } from '../api/tarot_server'
import Button from './Button'
import Modal from './Modal'

function ReadingTable() {

    const defaultCard = [
            {
                name: 'The Tarot awaits...',
                desc: 'Pull a card to begin',
                img: '../src/assets/images/default.jpg',
                name_short: 'default'
            }
        ]

    let [ open, setOpen ] = useState(false)
    let [ cards, setCards ] = useState(defaultCard)
    let [ isVisible, setIsVisible ] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const singleCardPull = async () => {
        const result = await tarot_server_calls.getRandomCard();
        setCards(result.cards);
        console.log(result.cards)
        setIsVisible(true);
    }

    const threeCardPull = async () => {
        const result = await tarot_server_calls.getThreeCards();
        setCards(result.cards);
        console.log(result.cards)
        setIsVisible(true);
    }

    const clearTable = () => {
        setCards(defaultCard);
        setIsVisible(false);
    }

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                cards={cards}
            />
            <div className='flex flex-row object-center justify-center my-5'>
                <div className='flex flex-1 flex-col object-top justify-start items-center my-5
                    bg-slate-600 rounded bg-opacity-50 p-3 ml-3 h-fit'>
                    <h1
                    className='text-lg justify-center
                    bg-slate-400 p-5 rounded-lg bg-opacity-75'>
                    What is your question?
                    </h1>
                    <ReadingOptions
                        singleCard={singleCardPull}
                        threeCard={threeCardPull}
                        clearTable={clearTable}/>
                    { isVisible ?
                        <div className='flex mt-10'>
                            <Button
                            onClick={handleOpen}
                            className='p-3 bg-slate-300 rounded m-3
                            hover:bg-slate-800 hover:text-white'>
                            Log Journal Entry
                            </Button>
                        </div>
                    :
                        <></>
                    }
                </div>
                <div className='flex flex-col flex-auto'>
                    <TarotCard cards={cards}/>
                    <TarotDescription cards={cards}/>
                </div>
            </div>
        </>
    )
}

export default ReadingTable
