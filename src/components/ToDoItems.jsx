import React from 'react'
import useTodoStore from '../store/store.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // or faAngleUp and faAngleDown
import { faRedo } from '@fortawesome/free-solid-svg-icons';



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
        <FontAwesomeIcon icon={faChevronUp} className="mr-2 text-green-200" />
       
         </button>
        <button  onClick={()=>sortTodoList('priority','desc')}>
        <FontAwesomeIcon icon={faChevronDown} className="mr-2 text-red-300" />
        </button>
      </div>

      <div className='flex flex-col'>

      <button onClick={()=>sortTodoList('dueDate', 'asc')}>
      <FontAwesomeIcon icon={faChevronUp} className="mr-2 text-green-200" />
         </button>
        <button  onClick={()=>sortTodoList('dueDate', 'desc')}>
        <FontAwesomeIcon icon={faChevronDown} className="mr-2 text-red-300" />
        </button>
      </div>

      <button onClick={resetTodoList}>
      <FontAwesomeIcon icon={faRedo} className="mr-2" />
      </button>

        
      </div>



      <div className='flex flex-col gap-[30px] '>
        {displayList.map(item => (
          <div key={item.id} className='flex flex-col bg-[#1D1D1D] text-white p-[8px] rounded-lg w-[90%] m-auto'>
            <div className='flex justify-between'>
              <div className='flex gap-[5px]'>
                <p>({item.priority})</p> 
                <p className='font-bold text-[#aba9a9] text-[15px]'>{item.title}</p>
              </div>

              <div className='flex gap-[5px]'>
               
              <span className='text-[#91622E]'>{item.dueDate}</span>
              <input onChange={() => moveToDone(item.id)}  type="checkbox"></input>
              </div>
             
            </div>

            <div className='mt-[10px] mb-[5px] text-[13px]'>
              {item.task}
            </div>

          


              <div className='ml-[auto] '>

              <button className='mr-[10px]'>
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              </button>

              <button onClick={()=>deleteToDo(item.id)} >
              <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
              </button>

              </div>
           
          


            
  
          </div>
        ))}
      </div>
    </div>
  );
 
   
  }
  



export default ToDoItems