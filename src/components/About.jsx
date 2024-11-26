import React from 'react'

function About() {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div>
      <h1 className='text-3xl font-bold mb-5'>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut congue arcu, quis lacinia sem. Suspendisse aliquet ligula eget ultricies egestas. 
        Integer ac turpis pulvinar arcu vulputate pulvinar vitae in tortor.</p>
        <br />

        <h1 className='font-semibold text-green-600 text-xl'>Education & Training</h1>
        <span>
          [Degree/Certification], [Institution], [Year] [Degree/Certification],
          [Institution], [Year] [Relevant Course], [Platform/Institution],
          [Year]
        </span>
        <br />
        <br />

        <h1 className='font-semibold text-green-600 text-xl'>Professional Experience</h1>
        <span>
          [Degree/Certification], [Institution], [Year] [Degree/Certification],
          [Institution], [Year] [Relevant Course], [Platform/Institution],
          [Year]
        </span>
        <br />
        <br />

        <h1 className='font-semibold text-green-600 text-xl'>Skill & Expertise</h1>
        <span>
          [Degree/Certification], [Institution], [Year] [Degree/Certification],
          [Institution], [Year] [Relevant Course], [Platform/Institution],
          [Year]
        </span>
        <br />
        <br />
    </div>
    </div>
  )
}

export default About
