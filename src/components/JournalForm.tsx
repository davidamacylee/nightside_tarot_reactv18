import Button from './Button'
import Input from './Input'

import { useForm } from 'react-hook-form'
import { journal_server_calls } from '../api/journal_server'
import { useDispatch, useStore } from 'react-redux'
import { chooseName, chooseDate, chooseCards, chooseJournalEntry } from '../redux/slices/RootSlice'

interface JournalFormProps {
  id?: string;
  cards: any;
  // onClose: () => void
}

const JournalForm = ( props: JournalFormProps ) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      journal_server_calls.update(props.id, data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset();
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseDate(data.date));
      dispatch(chooseCards(data.cards));
      dispatch(chooseJournalEntry(data.journal_entry));
      console.log('entry created')

      journal_server_calls.create(store.getState());
      setTimeout( () => {window.location.reload()}, 1000);
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-row'>
          <div className='flex flex-col w-1/4 mx-3'>
            <div>
              <label htmlFor="name">Full Name</label>
              <Input {...register('name')} name='name' placeholder="Full Name"/>
            </div>
            <div>
              <label htmlFor="date">Date of Entry</label>
              <Input {...register('date')} name='date' placeholder='Date' />
            </div>
          </div>
          <div className='flex flex-col w-3/4 mx-3'>
            <div>
              <label htmlFor="cards">Cards in Reading</label>
              <Input {...register('cards')} name='cards' placeholder="Cards" />
            </div>
            <div>
              <label htmlFor="journal_entry">Journal Entry</label>
              <Input {...register('journal_entry')} name='journal_entry' placeholder="Journal Entry" />
            </div>
          </div>
        </div>
        <div className="flex p-1">
          <Button
            // onClick={props.onClose}
            className="flex justify-start m-3 bg-slate-300 p-2 rounded
            hover:bg-slate-800 text-white"
            >
            Submit
            </Button>
        </div>
      </form>
    </div>
  )
}

export default JournalForm

