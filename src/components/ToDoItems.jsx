import React from 'react'
import useTodoStore from '../store/store.js';

function ToDoItems() {
  const todoList = useTodoStore((state) => state.todoList);
  const filteredTodoList = useTodoStore((state) => state.filteredTodoList);

  

  const {deleteToDo}=useTodoStore();
  const {moveToDone}=useTodoStore();

  const sortTodoList = useTodoStore((state) => state.sortTodoList);


  const resetTodoList = useTodoStore((state) => state.resetTodoList);

  const displayList = filteredTodoList && filteredTodoList.length > 0 ? filteredTodoList : todoList;

 


  return (
    <div className='w-[80%] md:w-1/2 m-auto md:m-[0]'>
     
      <div className='flex justify-center gap-[15px] '>
      <h2 className='mb-[20px] text-center font-bold text-2xl' >To Do Items</h2>

      <div className='flex flex-col '>
        <button onClick={()=>sortTodoList('priority','asc')}>
          SPA
         </button>
        <button  onClick={()=>sortTodoList('priority','desc')}>SPD</button>
      </div>

      <div className='flex flex-col'>

      <button onClick={()=>sortTodoList('dueDate', 'asc')}>
          SPA
         </button>
        <button  onClick={()=>sortTodoList('dueDate', 'desc')}>SPD</button>
      </div>

      <button onClick={resetTodoList}>Reset</button>

        
      </div>



      <div className='flex flex-col gap-[30px] '>
        {displayList.map(item => (
          <div key={item.id} className='flex flex-col bg-[#1D1D1D] text-white p-[8px] rounded-lg w-[90%] m-auto'>
            <div className='flex justify-between'>
              <div className='flex gap-[5px]'>
                <p>({item.priority})</p> 
                <p>{item.title}</p>
              </div>

              <div className='flex gap-[5px]'>
               
              <span className='text-[#91622E]'>{item.dueDate}</span>
              <input onChange={() => moveToDone(item.id)}  type="checkbox"></input>
              </div>
             
            </div>

            <div className='mt-[5px] mb-[5px]'>
              {item.task}
            </div>

          


              <div className='ml-[auto] '>

              <button className='mr-[10px]'>edit</button>

              <button onClick={()=>deleteToDo(item.id)} >delete</button>

              </div>
           
          


            
  
          </div>
        ))}
      </div>
    </div>
  );
 
   
  }
  



export default ToDoItems