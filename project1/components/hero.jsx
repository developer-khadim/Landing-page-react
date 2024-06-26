import React from "react";

const Hero = () => {
  return (
    <>
      <section className=" mt-4 order flex flex-col lg:flex-row justify-between items-center w-full lg:w-[73vw] px-4 lg:px-0">
        <div className="flex flex-col w-full lg:order-1 lg:w-[50%] mb-8 lg:mb-0 order-2 ">
          <h1 className="text-4xl lg:text-7xl font-extrabold text-center lg:text-left   ">
            YOUR FEET <br />
            DESERVE
            <br />
            THE BEST
          </h1>
          <p className="w-full lg:w-[70%] my-6 text-gray-600 text-center lg:text-left">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a     
              href="#"
              className="font-semibold bg-red-400 hover:border hover:border-black/80 hover:bg-transparent hover:text-black transition-all duration-300 px-3 py-2 text-[13px] rounded-sm text-white"
            >
              Shop Now
            </a>
            
            <a  href="#"
              className="font-semibold border hover:bg-red-400 hover:text-white hover:border-none transition-all duration-300 border-black/80 px-3 py-2 text-[13px] rounded-sm"
            >
              Category
            </a>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-2 my-4">
            <p className="text-[12px]">Also Available On</p>
            <img src="./src/assets/amazon.png" alt="a" className="w-[25px]" />
          </div>
        </div>
        <div className="w-full lg:order-2 lg:w-[40%] flex justify-center items-center mt-6 h-[40vh] order-1 lg:h-[66vh]">
          <img
            src="./src/assets/shoe.png"
            className="hover:rotate-45 transition duration-300 w-[80%] lg:w-[520px]"
            alt="Shoe"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;