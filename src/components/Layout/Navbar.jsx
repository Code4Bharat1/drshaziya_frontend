"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "HOME", href: "#home", active: true },
    { name: "ABOUT US", href: "#about", active: false },
    { name: "SPECIALITIES", href: "#specialities", active: false },
    { name: "TESTIMONIALS & MEDIA", href: "#testimonials", active: false },
    { name: "RESOURCES", href: "#resources", active: false },
    { name: "CONTACT US", href: "#contact", active: false },
  ];

  return (
    <header className="relative w-full h-24 bg-white overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-80 bg-white flex items-center justify-center z-30 px-6">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.webp"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>

      {/* Yellow Section */}
      <div
        className="absolute left-64 top-0 h-full z-20"
        style={{
          width: "200px",
          backgroundColor: "#FACC15", // Tailwind yellow-400
          clipPath: "polygon(84px 0%, 100% 0%, 100% 100%, 84px 100%, 0% 50%)",
        }}
      ></div>

      {/* Blue Section with Triangle Arrow Shape */}
      <div
        className="absolute left-80 top-0 h-full z-10"
        style={{
          width: "calc(100% - 320px)",
          backgroundColor: "#3B82F6", // Tailwind's blue-500
          clipPath: "polygon(84px 0%, 100% 0%, 100% 100%, 84px 100%, 0% 50%)",
        }}
      >
        <div className="absolute left-0 top-0 h-full">
          <svg width="84" height="96" viewBox="0 0 84 96" className="h-full">
            <path
              d="M0 0 L84 48 L0 96 Z"
              fill="#FCD34D"
              className="fill-yellow-400"
            />
          </svg>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center h-full absolute top-0 left-96 right-0 z-30">
        <div className="flex space-x-12 pl-12">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`text-white font-bold text-sm tracking-wider hover:text-yellow-300 transition-colors duration-200 whitespace-nowrap relative ${
                item.active ? "text-yellow-300" : ""
              }`}
            >
              {item.name}
              {item.active && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-300"></div>
              )}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden absolute right-6 top-1/2 transform -translate-y-1/2 z-40 text-white focus:outline-none p-2"
        aria-label="Toggle mobile menu"
      >
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-blue-500 transition-all duration-300 ease-in-out transform z-40 shadow-xl ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="px-6 py-6 space-y-2">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block text-white font-bold text-sm tracking-wider hover:text-yellow-300 hover:bg-blue-600 px-4 py-3 rounded-lg transition-all duration-200 ${
                item.active ? "text-yellow-300 bg-blue-600" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
