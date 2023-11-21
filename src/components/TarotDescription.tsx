interface TarotDescriptionProps {
    cards: any;
}
function TarotDescription( props: TarotDescriptionProps ) {
    
    return (
        <div className="flex flex-row gap-5">
        {props.cards.map(function(data: any, index: any) {
            return (
                <div key={index} className="flex flex-col gap-5 flex-1 bg-slate-400 bg-opacity-75 rounded-lg p-5 mx-5 mb-10">
                    <h1 className='text-lg'>
                        { data.name }
                    </h1>
                    <div className='text-sm'>
                        <p>{ data.desc } </p>
                    </div>
                    <div className='text-sm'>
                        <p>{ data.meaning_up } </p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default TarotDescription
