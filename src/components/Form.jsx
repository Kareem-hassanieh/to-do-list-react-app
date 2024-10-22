import React, { useState } from 'react';



function Form({ onClose }) {




  const [title, setTitle] = useState('');

  const [priority, setPriority] = useState('');

  const [task, setTask] = useState('');


  const [dueDate, setDueDate] = useState('');









  return (
    <div className='flex flex-col mt-[20px] w-[40%] border rounded-lg p-[20px] bg-[#d8ecf1]'>
      <h1 className='text-center mb-[20px] text-2xl font-bold text-black'>Create your to do</h1>
      <div className='mb-2'>
        <label htmlFor='title' className='block mb-1'>Title</label>
        <input
          id='title'
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='p-1 rounded-md mb-2 w-[100%] border border-gray-300 focus:border-blue-500 focus:outline-none'
        />
      </div>

      <div className='mb-2'>
        <label htmlFor='priority' className='block mb-1 text-black'>Priority (1-5)</label>
        <input
          id='priority'
          type='number'
          placeholder='Priority'
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          min='1'
          max='5'
          className='p-1 rounded-md mb-2 w-[100%] border border-gray-300 focus:border-blue-500 focus:outline-none'
        />
      </div>

      <div className='mb-2'>
        <label htmlFor='task' className='block mb-1 text-black'>Task Description</label>
        <textarea
          id='task'
          placeholder='Task Description'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='p-1 rounded-md mb-2 w-[100%] border border-gray-300 focus:border-blue-500 focus:outline-none'
        />
      </div>

      <div className='mb-2'>
        <label htmlFor='dueDate' className='block mb-1 text-black font-medium'>Due Date</label>
        <input
          id='dueDate'
          type='date'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className='p-2 rounded-lg w-full border border-gray-300 focus:border-blue-500 focus:outline-none bg-gray-50 hover:bg-gray-100 transition-shadow shadow-sm focus:shadow-md'
        />
      </div>



      <button onClick={onClose} className='bg-black text-white p-2 rounded-md w-[40%] ml-auto'>
        Submit
      </button>
    </div>
  )
}

export default Form