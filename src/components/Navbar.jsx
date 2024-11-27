import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import proImg from "../assets/propic.jpg";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItem = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "About", to: "/about" },
    { id: 3, text: "Blog", to: "/blog" },
    { id: 4, text: "Projects", to: "/projects" },
    { id: 5, text: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => setMenu(!menu);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white z-50 mb-10">
      <div className="flex justify-between items-center h-16">
        {/* Brand Logo */}
        <div className="flex space-x-2">
          <img className="h-12 w-12 rounded-full" src={proImg} alt="Profile" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Muni<span className="text-green-500 text-2xl">M</span>
            <p className="text-sm">FullStack Developer</p>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItem.map(({ id, text, to }) => (
            <li
              key={id}
              className="hover:scale-105 duration-200 cursor-pointer font-medium"
            >
              <Link
                to={to} // Use react-router Link for navigation
                className="cursor-pointer"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu Icon */}
        <div onClick={toggleMenu} className="md:hidden cursor-pointer">
          {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6">
          <ul className="space-y-4 text-lg">
            {navItem.map(({ id, text, to }) => (
              <li
                key={id}
                className="hover:scale-105 duration-200 cursor-pointer font-medium"
              >
                <Link
                  to={to}
                  onClick={toggleMenu} // Close menu on click
                  className="cursor-pointer"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
