import React from 'react';
import { ReactTyped } from "react-typed";
import Typing from './Typing';

const Hero = () => {
  return (
    <div className='text-white flex justify-center items-center h-[80vh]' >
      <div className='max-w-[800px] w-full text-center flex flex-col ' >
          <p className=' uppercase text-[#00df9a] font-bold p-2' > grow with data analytics </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6' > Grow with data. </h1>
          <div className='flex justify-center gap-2 items-center ' >
            <p className='md:text-5xl sm:text-4xl text-xl font-bold ' >Fast, flexible financing for</p>
            <Typing />
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500 px-2 xl:mt-2 md:mt-none ' >Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
      </div>
    </div>
  )
}

export default Hero
