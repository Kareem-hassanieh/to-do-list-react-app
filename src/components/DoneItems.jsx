import React from 'react'
import useTodoStore from '../store/store';

function DoneItems() {

  const doneList = useTodoStore((state) => state.doneList);
  const{deleteToDoDone}=useTodoStore();



  return (
    <div className='w-[50%]'>
      <h2 className='text-center b-[20px] font-bold text-2xl'>Done items</h2>
      <div className='flex flex-col gap-[30px] mt-[18px]'>
        {doneList.map(item => (
          <div key={item.id} className='flex flex-col bg-[green]  mr-[15px] ml-[15px]'>
            <div className='flex justify-between'>
              <div className='flex gap-[10px]'>
                <p>{item.priority}</p>
                <p>{item.title}</p>
              </div>
              <div className='flex gap-[5px]'>
                <span>{item.dueDate}</span>
                <input type="checkbox" checked disabled />
              </div>
            </div>
            <div>
              {item.task}
            </div>


            <div className='ml-[auto] '>

             

              <button onClick={() => deleteToDoDone(item.id)} >delete</button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}


export default DoneItems