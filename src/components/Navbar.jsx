import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

import {Link} from "react-scroll"


import proImg from "../assets/propic.jpg";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItem = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Contact",
    },
   
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md left-0 top-0 right-0">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img className="h-12 w-12 rounded-full" src={proImg} alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Muni<span className="text-green-500 text-2xl">M</span>
              <p className="text-sm">FullStack Developer</p>
            </h1>
          </div>

          <div>
            <ul className="hidden md:flex space-x-8">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link to="{text}" smooth={true}
                  duration={500} offset={-70}
                  activeClass="active"
                  >{text}</Link>
                 
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen  mt-4 md:mt-0 items-center justify-center space-y-4">
              {navItem.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
