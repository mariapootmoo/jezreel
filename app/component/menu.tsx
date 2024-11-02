import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import ContactForm from "./contact";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative text-white">
      <TiThMenu
        width={50}
        height={50}
        onClick={toggleMenu}
        className="cursor-pointer lg:hidden"
      />
      <div
        className={`
    fixed top-0 right-0 h-full w-1/2 bg-gradient-to-b from-black
     via-slate-800 to-slate-600 shadow-lg transform 
    ${isOpen ? "translate-x-0" : "translate-x-full"}
    transition-transform duration-300 ease-in-out lg:hidden z-50
  `}
      >
        <div className="flex justify-end p-4">
          <AiOutlineClose
            width={50}
            height={50}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
        </div>{" "}
        <ul className=" text-white flex flex-col items-center justify-center space-y-6 mt-10">
          <li>
            <a href="#server">Nuestros servicios</a>
          </li>
          <li>
            <a href="#work">Nuestro trabajo</a>
          </li>
          <li>
            <a href="#we">Acerca de</a>
          </li>
          <li>
            <ContactForm />
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};
