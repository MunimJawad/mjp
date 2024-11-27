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
      logo: python,
      name: "Python",
      description: "Built robust data pipelines and automation scripts.",
      demoLink: "#",
      sourceCode: "#",
    },
    {
      id: 2,
      logo: java,
      name: "Java",
      description: "Developed scalable backend services and APIs.",
      demoLink: "#",
      sourceCode: "#",
    },
    {
      id: 3,
      logo: react,
      name: "React",
      description: "Crafted dynamic and interactive front-end applications.",
      demoLink: "#",
      sourceCode: "#",
    },
    {
      id: 4,
      logo: django,
      name: "Django",
      description: "Engineered web applications with a powerful backend.",
      demoLink: "#",
      sourceCode: "#",
    },
    {
      id: 5,
      logo: mysql,
      name: "MySQL",
      description: "Designed and optimized relational databases.",
      demoLink: "#",
      sourceCode: "#",
    },
    {
      id: 6,
      logo: images,
      name: "Tailwind CSS",
      description: "Enhanced UI/UX with responsive design systems.",
      demoLink: "#",
      sourceCode: "#",
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
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded shadow-sm"
              >
                Demo
              </a>
              <a
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2 rounded shadow-sm"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
