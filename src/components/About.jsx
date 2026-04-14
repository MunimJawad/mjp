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
            Backend-focused Full Stack Developer with 2+ years of experience building scalable web applications using Django
            and modern technologies. Specialized in REST APIs, real-time systems, and enterprise-grade platforms. Strong focus
            on backend architecture, system design, and performance optimization.
          </p>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="font-semibold text-2xl text-green-600 mb-4">
            Education & Training
          </h2>
          <ul className="space-y-3">
            <li className="text-gray-700">
              <span className="font-bold">Artificial Intelligence in Integreted Training Program(AITP)</span> – PKSF, 2025
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Bachelor's in Computer Science</span> – United Internatonal University, 2023
            </li>
            
            <li className="text-gray-700">
              <span className="font-bold">Python, Django, React & Advanced JavaScript</span> – Online Training Platform, 2022
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
    <span className="font-bold">Full Stack Developer</span> – Padakhep ICT (Padakhep Manabik Unnayan Kendra, Bangladesh), 2024–Present
    <p className="text-sm text-gray-600">
      Developed and maintained scalable web applications using Django, Laravel, React, and PostgreSQL, supporting multiple business workflows. Designed and implemented REST APIs for frontend and third-party integrations, optimized backend systems and database queries to improve performance, built dynamic and responsive user interfaces using JavaScript and Tailwind CSS, and collaborated with team members to deliver production-ready features and system improvements.
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
              Python
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              Django
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              Django Rest Framework
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              PostgresSQL, MySQL
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              RESTful APIs, WebSocket
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              JavaScript
            </span>
             <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              React, Next.js
            </span>
             <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              PHP, Laravel
            </span>
            <span className="bg-gray-100 px-4 py-2 rounded-md shadow-sm text-gray-700 font-medium">
              CSS, Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
