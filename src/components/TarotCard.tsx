import { useFetchCard } from '../custom-hooks/FetchCard';

interface TarotCardProps {
  cards: any;
}

function TarotCard( props: TarotCardProps ) {
    return (
      <div className="flex flex-row gap-5 justify-center items-center my-10">
          {props.cards.map(function(data: any, index: any) {
            console.log(data)
            console.log(data.name_short)
            data.img = useFetchCard(data.name_short)
            return (
                <div key={index} className='flex justify-center items-center flex-1'>
                    <img className='w-2/3 max-w-sm' src={data.img} alt="" />
                </div>
            )
          })}
          </div>
    )
}

export default TarotCard
