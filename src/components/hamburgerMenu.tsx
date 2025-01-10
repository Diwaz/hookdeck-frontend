"use client";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <input
        type="checkbox"
        className="appearance-none w-10 h-10 bg-center bg-no-repeat cursor-pointer"
        style={{
          backgroundImage: isOpen
            ? 'var(--close)' // Close icon
            : 'var(--open)', // Open icon
        }}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-white shadow-md rounded-md w-48">
          <ul className="flex flex-col p-2">
            <li className="p-2 hover:bg-gray-100">
              <a href="#home">Home</a>
            </li>
            <li className="p-2 hover:bg-gray-100">
              <a href="#about">About</a>
            </li>
            <li className="p-2 hover:bg-gray-100">
              <a href="#services">Services</a>
            </li>
            <li className="p-2 hover:bg-gray-100">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
