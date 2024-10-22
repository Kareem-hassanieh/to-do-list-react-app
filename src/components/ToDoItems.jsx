import React from 'react'
import useTodoStore from '../store/store.js';

function ToDoItems() {
  const todoList = useTodoStore((state) => state.todoList);


  return (
    <div className='w-[50%] ml-[15px]'>
      <h2 className='mb-[20px] text-center' >To Do Items</h2>
      <div className='flex flex-col gap-[30px]'>
        {todoList.map(item => (
          <div key={item.id} className='flex flex-col bg-[green] '>
            <div className='flex justify-between'>
              <div className='flex gap-[10px]'>
                <p>{item.priority}</p> 
                <p>{item.title}</p>
              </div>

              <div>
              {item.dueDate}
              </div>
            </div>

            <div>
              {item.task}
            </div>
  
          </div>
        ))}
      </div>
    </div>
  );
 
   
  }
  



export default ToDoItems