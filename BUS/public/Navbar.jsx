import React,{useState} from 'react';
import {AiOutlineClose,AiOutlineMenu}  from 'react-icons/ai';


const Navbar = () => {

    const [nav,setNav]= useState(false)

    const handleNav = () =>{
     
        setNav(!nav)

    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 text-white'>
        <h1 className='flex w-full text-3xl font-bold text-[#00df9a]' >React.</h1>
        <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resource</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav?<AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-[#000300] ease-in-out duration-500' : 'hidden'}>
      <h1 className='w-full text-3xl mt-5 font-bold  text-[#00df9a] m-4' >React.</h1>
        <ul className='uppercase m-4'>
        <li className='pt-4 border-b border-gray-600 border-spacing-y-8'>Home</li>
        <li className='pt-4 border-b border-gray-600'>Company</li>
        <li className='pt-4 border-b border-gray-600'>Resource</li>
        <li className='pt-4 border-b border-gray-600'>About</li>
        <li className='pt-4 '>Contact</li>
        </ul>
      </div>
    </div>
  )
}


