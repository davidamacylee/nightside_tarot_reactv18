import { useState } from 'react'
import Button from './Button';
import Modal from './Modal';
import { journal_server_calls } from '../api/journal_server';

interface EntryProps {
    entry: any;
}

function JournalEntry( props: EntryProps ) {

  let [ open, setOpen ] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const deleteData = () => {
    journal_server_calls.delete(props.entry.id);
    setTimeout( () => { window.location.reload() }, 500)
  }

  return (
    <>
      <Modal
      id={props.entry.id}
      open={open}
      onClose={handleClose}
      />
      <div
        className='flex flex-col bg-purple-600 rounded-lg m-5 mr-10
        p-5 bg-opacity-75 text-white'>
        <div
          className='flex flex-row justify-between w-100'>
          <div
            className='flex'>
            {props.entry.name}
          </div>
          <div
            className='flex'>
            {props.entry.date}
          </div>
        </div>
        <div
          className='flex flex-col bg-purple-400 rounded-lg p-3 mt-3 text-purple-800'>
          <div>
            {props.entry.cards}
          </div>
          <div className='mt-5'>
            {props.entry.journal_entry}
          </div>
        </div>
        <div
          className='flex flex-row'>
            <Button
              onClick={handleOpen}
              className='rounded-lg bg-purple-800 m-3 p-3 hover:bg-purple-200
              hover:text-purple-800'>
              Update
            </Button>
            <Button
              onClick={deleteData}
              className='rounded-lg bg-purple-800 m-3 p-3 hover:bg-purple-200
            hover:text-purple-800'>
              Delete
            </Button>
        </div>
      </div>
    </>
  )
}

export default JournalEntry
