import JournalForm from './JournalForm'

type ModalProps = {
  open: boolean;
  onClose: () => void;
  cards?: any;
  id?: string;
}

function Modal( props: ModalProps ) {
  if ( !props.open ) return (<></>)
  return (
    <div
      onClick={ props.onClose }
      className='fixed w-full h-full flex overflow-auto z-1
      justify-center align-middle bg-gray-300 bg-opacity-25'
      >
      <div
        className="max-w-600px w-4/5 fixed flex z-1
         bg-white shadow-x1 rounded"
        onClick={(e) => {
          e.stopPropagation()
        }}
        >
          <div className="w-full flex flex-col">
            <div className="flex flex-row space-apart">
              <p
                className="flex justify-start m-3 bg-slate-300 p-2
                rounded hover:bg-slate-800 text-white fixed z-2"
                onClick={props.onClose}>
                X
              </p>
            </div>
            <div className="flex flex-col items-center text-center mt-10 ml-6 p-2">
              <JournalForm
                id={props.id}
                cards={props.cards} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Modal
