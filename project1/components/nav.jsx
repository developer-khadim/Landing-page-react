"use client";
import React from 'react';

const Nav = () => {
  return (
    <div className='mt-2 w-full h-auto sm:h-[50px] flex justify-center items-center'>
      <nav className='w-full px-4 sm:w-[90vw] h-auto sm:h-[30px] flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0'>
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <img src="./src/assets/brand_logo.png" alt="Brand Logo" className="h-8 sm:h-auto" />
        </div>
        <div className='text-[13px] flex flex-wrap justify-center gap-3 uppercase font-semibold'>
           <h3 className="hover:text-red-500 cursor-pointer">Menu</h3>
           <h3 className="hover:text-red-500 cursor-pointer">Location</h3>
           <h3 className="hover:text-red-500 cursor-pointer">About</h3>
           <h3 className="hover:text-red-500 cursor-pointer">Contact</h3>
        </div>
        <a href='https://github.com/developer-khadim' className='bg-red-500 px-3 py-2 text-[13px] rounded-sm text-white hover:bg-red-600 transition-colors duration-300'>
          GitHub
        </a>
      </nav>
    </div>
  )
}

export default Nav;