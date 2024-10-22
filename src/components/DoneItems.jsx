import React from 'react'
import useTodoStore from '../store/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DoneItems() {

  const doneList = useTodoStore((state) => state.doneList);
  const{deleteToDoDone}=useTodoStore();



  return (
    <div className='w-[80%] md:w-1/2 m-auto md:m-[0]'>
      <h2 className='text-center b-[20px] font-bold text-2xl self-start mt-[20px] md:mt-[0px]'>Done items</h2>
      <div className='flex flex-col gap-[30px] mt-[18px]'>
        {doneList.map(item => (
          <div key={item.id} className='flex flex-col bg-[#1D1D1D] mx-auto  text-white p-[8px] rounded-lg w-[90%] '>

            <div className='flex justify-between'>
              <div className='flex gap-[5px]'>
                <p>({item.priority})</p>
                <p className='line-through font-bold text-[#aba9a9] text-[15px]'>{item.title}</p>
              </div>
              <div className='flex gap-[5px]'>
                <span>{item.dueDate}</span>
                <input type="checkbox" checked disabled />
              </div>
            </div>
            <div className='mt-[7px] mb-[5px] text-[13px] line-through'>
              {item.task}
            </div>


            <div className='ml-[auto] '>

             

              <button onClick={() => deleteToDoDone(item.id)} >
              <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
              </button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}


export default DoneItems