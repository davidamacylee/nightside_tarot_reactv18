import Background from '../assets/images/cards_background.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-col mx-auto bg-cover bg-center bg-fixed w-100 h-100'>
      <div className="container m-10 p-10">
        <div className='bg-purple-600 bg-opacity-75 rounded py-10 flex justify-center shadow-lg'>
          <div className="bg-purple-800 rounded p-5 m-5 text-white w-fit text-center shadow-lg">
            <h1 className='text-lg font-extrabold'>
              N I G H T S I D E <br /> T A R O T
            </h1>
            </div>
        </div>
      </div>
      <div className="container mx-10 p-10">
        <div className='bg-purple-600 bg-opacity-75 rounded p-10 flex flex-col items-center justify-center'>
          <div className="bg-purple-800 rounded p-5 text-white w-fit text-center">
            What is the Tarot?
          </div>
          <div className="bg-purple-400 text-sm rounded p-5 mt-5 w-fit text-center">
            <p>
              The Tarot is a deck of 78 cards, each containing symbolic imagery that has
              been used for centuries to gain insights into the past, present, and future.
              The origins of the Tarot are somewhat mysterious, with roots in various cultural and mystical traditions.
              The deck is divided into two main sections: the Major Arcana and the Minor Arcana.
              The Major Arcana consists of 22 cards, each representing significant life events and archetypal symbols.
              The Minor Arcana consists of four suits—Cups, Wands, Swords, and Pentacles—each associated with different aspects of life.
              Tarot readings involve selecting cards and interpreting their meanings based on the reader's intuition, symbolism, and established interpretations.
              While some view the Tarot as a tool for divination, others see it as a psychological or spiritual tool for self-reflection and guidance.
              The practice of reading Tarot cards has evolved over time, offering individuals a unique and personalized way to explore their thoughts, emotions, and life path.
              <br />
              <br />
              Are you ready to dive into the rich and wonderful world of the Tarot?
            </p>
          </div>
          <Link
              to='/reading'
              className="flex place-items-center text-purple-200 hover:text-white bg-purple-800 p-3 mt-5 justify-center rounded"
              >
              To the Reading Table
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
