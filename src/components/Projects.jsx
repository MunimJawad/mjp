import React from 'react'
import python from '../assets/Python.jpg'

import java from '../assets/java.jpeg'

import react from '../assets/react.png'
import django from '../assets/django.png'
import mysql from '../assets/MySQL.png'
import images from '../assets/images.png'

function Projects() {

    const cardItem=[
        {
            id:1,
            logo:python,
            name:"Python"
        },
        {
            id:2,
            logo:java,
            name:"Java"
        },
        {
            id:3,
            logo:react,
            name:"React"
        },
        {
            id:4,
            logo:django,
            name:"Django"
        },
        {
            id:5,
            logo:mysql,
            name:"MySQL"
        },
        {
            id:6,
            logo:images,
            name:"TailWind CSS"
        },
    ]
  return (
    <div name="Projects" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
        <div>
        <h1 className='text-3xl font-bold mb-5'>Projects</h1>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
              {
                cardItem.map(({id,logo,name})=>(
                    <div className='md:w-[300px] md:h-[300px]  border-[2px] rounded-lg shadow-lg p-1 cursor-pointer md:hover:scale-110 duration-300 mb-5' key={id}> 
                     <img className='w-[120px] h-[120px] p-1 rounded-full border-[2px]' src={logo} alt="" />
                     <div>
                       <div className='px-2 font-bold text-xl mb-2'>{name}</div> 
                     
                     <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='justify-around space-x-6 px-6 py-4'>
                        <button className='bg-blue-600 hover:bg-blue-900 text-white font-bold px-4 py-2 rounded'>Demo</button>
                        <button className='bg-green-600 hover:bg-green-900 text-white font-bold px-4 py-2 rounded'>Source Code</button>
                    </div>
                    </div>
                ))
              }
        </div>
     
    </div>
  )
}

export default Projects
