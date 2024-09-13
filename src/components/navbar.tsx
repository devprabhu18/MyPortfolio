'use client'
import { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "@/ui/ThemeSwitch";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger and close icons

const navItems = {
  '/': { name: 'Home' },
  '/projects': { name: 'Projects' },
  '/experience': { name: 'Experience' },
  '/contact': { name: 'Contact' }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <>
      <div className="pl-5 pr-5 sticky top-0 bg-background z-20  border-opacity-5 border-b border-bordercol">
        <nav className="flex justify-between items-center py-4">
          <div>
            <Link href="/">
              <h2 className="font-sans text-xl sm:text-2xl italic">
                &lt;Devananda Prabhu/&gt;
              </h2>
            </Link>
          </div>
          <div className="hidden sm:flex space-x-10 items-center">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link className="hover:text-blue-600" href={path} key={path}>
                {name}
              </Link>
            ))}
            <div className="hover:cursor-pointer">
              <ThemeSwitch />
            </div>
          </div>

          {/* Hamburger Menu for smaller screens */}
          <div className="sm:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>

        {/* Dropdown Menu for smaller screens */}
        {isOpen && (
          <div className="sm:hidden flex flex-col items-center space-y-4 pb-4 ">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link onClick={toggleMenu} className="hover:text-blue-600" href={path} key={path}>
                {name}
              </Link>
            ))}
            <div className="hover:cursor-pointer">
              <ThemeSwitch />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
