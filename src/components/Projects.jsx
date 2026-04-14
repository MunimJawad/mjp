import React from "react";
import python from "../assets/Python.jpg";
import java from "../assets/java.jpeg";
import react from "../assets/react.png";
import django from "../assets/django.png";
import mysql from "../assets/MySQL.png";
import images from "../assets/images.png";

function Projects() {
 const cardItem = [
  {
    id: 1,
    logo: django,
    name: "Ticketing System",
    description:
      "Built a full-stack ticketing system to manage issue lifecycle with assignment, status tracking, and resolution workflows. Implemented role-based access control, advanced filtering, and optimized database queries for performance.",
    demoLink: "https://stage-op.padakhep.org/login", // add live link if available
    sourceCode: "#",
  },
  {
    id: 2,
    logo: django,
    name: "Vehicle Management System",
    description:
      "Developed a vehicle management system to track vehicle usage, assignments, and maintenance records. Designed scalable backend with optimized database schema and role-based permissions for operational workflows.",
    demoLink: "https://stage-op.padakhep.org/login",
    sourceCode: "#",
  },
  {
    id: 3,
    logo: django,
    name: "Enterprise Management System (OnePadakhep)",
    description:
      "Designed and developed a production-grade enterprise system integrating multiple business workflows into a unified platform with modular architecture, role-based access control, and scalable backend.",
    demoLink: "https://stage-op.padakhep.org/login",
    sourceCode: "#",
  },
  {
    id: 4,
    logo: django,
    name: "CMS – padakhep.org",
    description:
      "Built a production-grade content management system with dynamic page, post, and media management. Implemented admin workflows and scalable backend architecture for non-technical users.",
    demoLink: "https://www.padakhep.org/",
    sourceCode: "#",
  },
  {
    id: 5,
    logo: django,
    name: "Real-time Messaging System",
    description:
      "Developed a real-time chat system using WebSockets supporting one-to-one and group messaging with presence tracking, typing indicators, and optimized message storage.",
    demoLink: "https://github.com/MunimJawad/Real-time-chat-application",
    sourceCode: "https://github.com/MunimJawad/Real-time-chat-application",
  },
    {
  id: 6,
  logo: django,
  name: "E-commerce API Backend",
  description:
    "Developed a scalable e-commerce REST API using Django REST Framework with authentication, product management, cart, and order processing. Implemented JWT-based authentication, optimized database queries, and structured modular API architecture for performance and scalability.",
  demoLink: "#", // add live API/docs if available
  sourceCode: "https://github.com/MunimJawad/EcommerceAPI-Django-",
},
];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h1 className="mt-20 text-4xl font-extrabold text-gray-800 border-b-4 border-green-500 w-fit text-center">
         
        </h1>
        <p className="text-gray-600 mt-10">
          A showcase of some of the technologies I've worked with and projects
          I've built.
        </p>

       <div className="mt-4">
    <p className="text-sm text-gray-500 italic max-w-2xl mx-auto">
      Note: Some projects listed below were developed as part of my professional work at Padakhep ICT. Due to confidentiality, source code for these projects cannot be publicly shared.
    </p>
  </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardItem.map(({ id, logo, name, description, demoLink, sourceCode }) => (
          <div
            className="bg-white border border-gray-200 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow duration-300"
            key={id}
          >
            <img
              className="w-24 h-24 mx-auto rounded-full border-4 border-green-500"
              src={logo}
              alt={name}
            />
            <h2 className="text-xl font-bold text-center mt-4 text-gray-800">
              {name}
            </h2>
            <p className="text-gray-600 text-sm text-center mt-2 leading-relaxed">
              {description}
            </p>
            <div className="flex justify-center space-x-4 mt-5">
             {demoLink !== "#" ? (
  <a
    href={demoLink}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded shadow-sm"
  >
    View Live
  </a>
) : (
  <span className="bg-gray-400 text-white font-bold px-5 py-2 rounded cursor-not-allowed">
    Not Hosted
  </span>
)}
               {sourceCode !== "#" ? (
    <a
      href={sourceCode}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2 rounded shadow-sm"
    >
      Source Code
    </a>
  ) : (
    <span className="bg-gray-400 text-white font-bold px-5 py-2 rounded cursor-not-allowed">
      Private Code
    </span>
  )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
