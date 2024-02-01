import React, { useState } from 'react';
import Logo from '../img/logo-outbg.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-3 lg:h-auto w-screen lg:fixed lg:top-0 lg:left-1/2 lg:-translate-x-1/2 z-50 lg:bg-white/70 lg:backdrop-blur-[8px]">
      <div className="container flex items-center gap-40">
        <a href="#main" className="text-white text-lg font-bold">
          <img src={Logo} className="w-[400px] m-auto" alt="company logo" />
        </a>
        {/* Responsive(start) */}
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {/* Responsive(end) */}
        <div className="w-full">
          <div className="text-lg flex items-center justify-between">
            <a
              href="#youlp"
              className="text-[#343a40] no-underline hover:!text-[#5F73F1] font-semibold"
            >
              What is YouLP?
            </a>
            <a
              href="#intern"
              className="text-[#343a40] no-underline hover:!text-[#5F73F1] font-semibold"
            >
              Our Interns
            </a>
            <a
              href="#news"
              className="text-[#343a40] no-underline hover:!text-[#5F73F1] font-semibold"
            >
              News & Insights
            </a>
            <a
              href="/services"
              className="text-[#343a40] no-underline hover:!text-[#5F73F1] font-semibold"
            >
              Internship Programmes
            </a>
            <a
              href="/services"
              className="text-[#343a40] no-underline hover:!text-[#5F73F1] font-semibold"
            >
              Applications
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
