"use client";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
    const handleClose = () => {
        setNav(false);
    };

    return (
        <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handleNav} className="cursor-pointer md:hidden transition-transform duration-300 ease-in-out">
                {nav ? <AiOutlineClose size={25} className="transform rotate-180" /> : <AiOutlineMenu size={25} className="transform rotate-0" />}
            </div>
            <div
                className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] px-4 pt-8 transition-transform duration-300 ${
                    nav ? "transform translate-x-0" : "transform -translate-x-full"
                } md:hidden`}
            >
                <h1 className="w-full text-3xl font-bold text-[#00df9a] pb-10">REACT.</h1>
                <ul className="uppercase font-bold p-4">
                    <li className="p-4 border-b border-b-gray-600" onClick={handleClose}>Home</li>
                    <li className="p-4 border-b border-b-gray-600" onClick={handleClose}>Company</li>
                    <li className="p-4 border-b border-b-gray-600" onClick={handleClose}>Resources</li>
                    <li className="p-4 border-b border-b-gray-600" onClick={handleClose}>About</li>
                    <li className="p-4" onClick={handleClose}>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;