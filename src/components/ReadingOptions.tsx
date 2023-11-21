import Button from './Button'

interface ReadingOptionsProps {
    singleCard: any;
    threeCard: any;
    clearTable: any;
}
function ReadingOptions( props: ReadingOptionsProps ) {

    return (
        <div className='flex flex-col object-center justify-center items-center'>
            <div className='flex flex-row justify-center'>
                <Button
                    onClick={props.singleCard}
                    className='p-3 bg-slate-300 rounded m-3 hover:bg-slate-800
                    hover:text-white'
                    >
                    Single Card
                </Button>
                <Button
                    onClick={props.threeCard}
                    className='p-3 bg-slate-300 rounded m-3 hover:bg-slate-800
                    hover:text-white'
                    >
                    Three Cards
                </Button>
            </div>
            <div className='flex'>
                <Button
                    onClick={props.clearTable}
                    className='p-3 bg-slate-300 rounded m-3 hover:bg-slate-800
                    hover:text-white'
                    >
                    Clear the Table    
                </Button>
            </div>
        </div>
    )
}

export default ReadingOptions
