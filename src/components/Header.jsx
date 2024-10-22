import React, { useState } from 'react';
import useTodoStore from '../store/store.js';



function Header({ onAddClick }) {

  const [searchQuery, setSearchQuery] = useState('');
  const setFilteredTodos = useTodoStore(state => state.setFilteredTodos);


  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setFilteredTodos(query); // Update the filtered todos in the store
  };


  

 

  return (
    <>
      <h2 className='text-center bg-[black] text-white  p-[10px] ml-[15px] mr-[15px] mt-[20px] rounded-lg text-xl'>Get Things Done</h2>

      <div>

      </div>

      <div className='ml-[15px] mr-[15px] flex items-center'>
        <button onClick={onAddClick} className='bg-[#BE7729] pt-[10px] pb-[10px] pl-[30px] pr-[30px] rounded-md mt-[10px] text-xl flex justify-center items-center'>+</button>


        <input 
        
        type="text" placeholder='Search...' className='p-1 rounded-md ml-[10px] mt-[10px] h-[45px] flex-grow'  value={searchQuery}   onChange={handleSearchChange}
         >
          


          </input>


      </div>

      <div className=" bg-black h-[5px] ml-[15px] mr-[15px] mt-[10px] mb-[10px] rounded-lg"></div>

    </>

  )
}

export default Header