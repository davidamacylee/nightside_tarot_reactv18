import ReadingTable from '../components/ReadingTable'
import Background from '../assets/images/sage_background.jpg';

function Reading() {

  console.log()
  return (
    <section style={{ backgroundImage: `url(${ Background })`}}
    className='flex mx-auto bg-cover bg-center bg-fixed w-100'>
        <ReadingTable/>
    </section>
  )
}

export default Reading
