"use client";
import React from 'react'
import Nav from '../components/nav';
import Hero from '../components/hero';

const Page = () => {
  return (
    <main className=" max-w-[100vw] h-[90vh] " >
    <div className="nav ">
    <Nav />
    </div>
    <div className="hero h-[85vh] flex justify-center  ">
      < Hero className="w-[80vw] " />
    </div>
    </main>
  )
}

export default Page
