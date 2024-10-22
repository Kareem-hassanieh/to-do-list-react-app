import React from 'react'

function ToDoItems() {
  const todoList = [
    {
      id: 1,
      title:"laundary",
      priority: 2,
      task: 'Do laundry'
    },
    {
      id: 2,
      title:"code",
      priority: 3,
      task: 'Complete React project'
    },
    {
      id: 3,
      title:"shopping",
      priority: 1,
      task: 'Grocery shopping'
    },
  ];


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
                date:20
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