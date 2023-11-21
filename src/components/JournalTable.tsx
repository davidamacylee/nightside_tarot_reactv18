import { useState, useEffect } from 'react';
import { journal_server_calls } from '../api/journal_server';
import JournalEntry from './JournalEntry';
import Button from './Button';
import Modal from './Modal';

export default function JournalTable() {

  let [ open, setOpen ] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

    let [ entries, setEntries ] = useState<any[]>([])
    const getEntries = async () => {
      const result = await journal_server_calls.get();
      console.log(result);
      setEntries(result);
  }

  useEffect( () => {
    getEntries();
  }, [])
  
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        />
      <div className='flex flex-col w-screen'>
        <div className='flex flex-row justify-between w-100'>
          <div
            className='bg-purple-800 m-5 p-5 rounded-lg text-white
            min-w-fit max-w-fit'>
            <h1>Community Journal Entries</h1>
          </div>
          <Button
            onClick={handleOpen}
            className='bg-purple-800 m-5 p-5 rounded-lg text-white
            min-w-fit max-w-fit mr-10'
            >
            New Journal Entry
            </Button>
        </div>
        {entries.map((entry: any, index:any) => (
          <JournalEntry
            entry={entry}
            key={index}
            />
        ))}
      </div>
    </>
  );
}