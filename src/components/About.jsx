import React from 'react';

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-24">
      <div className="space-y-12">
        {/* About Section */}
        <div>
          <h1 className="text-4xl font-extrabold mb-6 text-gray-800 border-b-4 border-green-500 w-fit">
            About Me
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            I am a passionate and detail-oriented Full Stack Developer with a knack for creating efficient and scalable web applications. 
            My journey in tech has been fueled by a love for solving complex problems and bringing ideas to life through code. 
            I specialize in building user-friendly interfaces and robust backend systems that deliver impactful user experiences.
          </p>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="font-semibold text-2xl text-green-600 mb-4">
            Education & Training
          </h2>
          <ul className="space-y-3">
            <li className="text-gray-700">
              <span className="font-bold">Bachelor's in Computer Science</span> – XYZ University, 2020
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Certified Full Stack Developer</span> – ABC Coding Bootcamp, 2021
            </li>
            <li className="text-gray-700">
              <span className="font-bold">React & Advanced JavaScript</span> – Online Training Platform, 2022
            </li>
          </ul>
        </div>

        {/* Professional Experience Section */}
        <div>
          <h2 className="font-semibold text-2xl text-green-600 mb-4">
            Professional Experience
          </h2>
          <ul className="space-y-3">
            <li className="text-gray-700">
              <span className="font-bold">Frontend Developer</span> – TechCorp Solutions, 2020-2022
              <p className="text-sm text-gray-600">
                Led the development of responsive web applications, ensuring seamless user experiences.
              </p>
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Full Stack Developer</span> – InnovateHub, 2022-Present
              <p className="text-sm text-gray-600">
                Designed and implemented scalable backend systems and interactive frontend components for enterprise clients.
              </p>
            </li>
          </ul>
        </div>

        {/* Skills & Expertise Section */}
        <div>
          <h2 className="font-semibold text-2xl text-green-600 mb-4">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              React.js
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              Node.js
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              JavaScript (ES6+)
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              MongoDB
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              RESTful APIs
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
