import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import homeImg from "../assets/image.png";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
       <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                <span className='text-xl'>Welcome in My Feed!</span>
                <div className='flex space-x-1 text-2xl md:text-4xl'>
                <h1>Hello, I'm a</h1>
               {/*<span className='text-red-700 font-bold'> Developer.</span>*/} 

               <ReactTyped className='text-red-700 font-bold'
          strings={["Developer", "Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
                </div>
               <br/>
                <p className='text-sm md:text-md text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut congue arcu, quis lacinia sem. Suspendisse aliquet ligula eget ultricies egestas. Integer ac turpis pulvinar arcu vulputate pulvinar vitae in tortor. Cras sollicitudin neque at lorem commodo consectetur. Phasellus a risus id orci finibus maximus. Fusce non vehicula ante. Praesent tincidunt nibh molestie enim fringilla congue. Praesent sodales imperdiet ultricies.
                Fusce a hendrerit sapien, et ultrices risus.
                </p>
                <br />
                {/* Social media icons*/}
                <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                <div className='space-y-2'>
                    <h1 className='font-bold'>
                        Available on  
                    </h1>
                    <div className='flex space-x-5' >
                    <FaSquareFacebook size={24} className='text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    <FaLinkedin size={24} className='text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    <FaSquareYoutube size={24} className='text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    <BsTelegram size={24} className='text-2xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    </div>
                   
                    </div>

                    <div  className='space-y-2'>
                        <h1 className='font-bold'>Currently Working on</h1>
                        <div className='flex space-x-5' >
                    <FaReact  size={24} className='text-2xl md:text-4xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    <DiDjango size={24} className='text-2xl md:text-4xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    <SiMysql size={24} className='text-2xl md:text-4xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    <SiTailwindcss size={24} className='text-2xl md:text-4xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]'/>
                    </div>
                    </div>


                    </div>
                </div>


                <div className='md:w-1/2 md:ml-48 md:mt-15 order-1 md:order-2 mt-8'>
                <img src={homeImg} alt="" className='rounded-full md:w-[450px] md:h-[450px] h-[450px] w-[450px]' />
                </div>
            </div>
       </div>
       <br/>
    </>
  )
}

export default Home;
