import Background from '../assets/images/mirror_background.jpg';
import JournalTable from '../components/JournalTable'

function Journal() {
  return (
    <section style={{ backgroundImage: `url(${ Background })`}}
    className='flex mx-auto bg-cover bg-center bg-fixed w-100 h-100'>
        <JournalTable/>
    </section>
  )
}

export default Journal
