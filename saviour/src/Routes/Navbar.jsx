import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const pages = [
  { id: 1, to: 'home', name: 'Home' },
  { id: 2, to: 'idoevent', name: 'IDOEvent' },
  { id: 3, to: 'tokenomics', name: 'TokenOmics' },
  { id: 4, to: 'roadmap', name: 'Roadmap' },
  { id: 5, to: 'comingsoon', name: 'Coming Soon' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center px-4 lg:px-8">
        <div className="flex items-center">
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
            </button>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            {pages.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white text-xl mr-6 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-800 z-50">
          <div className="flex flex-col items-start">
            {pages.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleMenu}
                className="py-3 px-4 border-b border-gray-700 text-white w-full cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { Navbar };
