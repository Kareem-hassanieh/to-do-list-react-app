import React from 'react'

function Header({onAddClick}) {
  return (
    <>
    <h2 className='text-center bg-[black] text-white  p-[10px] ml-[15px] mr-[15px] mt-[20px] rounded-lg text-xl'>Get Things Done</h2>

    <div className='ml-[15px] mr-[15px] flex items-center'>
    <button onClick={onAddClick}  className='bg-[#fae652] pt-[10px] pb-[10px] pl-[30px] pr-[30px] rounded-md mt-[10px] text-xl flex justify-center items-center'>+</button>
    <input type="text" placeholder='Search...' className='p-1 rounded-md ml-[10px]
    mt-[10px] h-[45px] flex-grow'></input>


    </div>

    <div className=" bg-black h-[5px] ml-[15px] mr-[15px] mt-[10px] mb-[10px] rounded-lg"></div>
    
    </>
    
  )
}

export default Header