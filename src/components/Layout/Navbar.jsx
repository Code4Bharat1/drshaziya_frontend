"use client";
import Image from "next/image";
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
    <header className="relative w-full h-20 bg-white overflow-hidden">
      {/* Logo Section */}
      <div className="absolute left-0 top-0 h-full w-72 bg-white flex items-center justify-center z-30 px-4">
        <Image
          src="/logo.webp"
          className="w-auto h-16 object-contain"
          alt="Dr. Shazia Waghoo Logo"
          width={200}
          height={64}
          priority
        />
      </div>

      {/* Yellow Section */}
      <div className="absolute left-60 top-0 h-full bg-yellow-500 z-20" style={{ width: '180px' }}>
        {/* Yellow section background */}
      </div>

      {/* Blue Section with Triangle Arrow Shape */}
      <div className="absolute left-72 top-0 h-full bg-blue-500 z-10" style={{ width: 'calc(100% - 288px)' }}>
        {/* Triangle Arrow Shape */}
        <div className="absolute left-0 top-0 h-full">
          <svg width="80" height="80" viewBox="0 0 80 80" className="h-full">
            <path 
              d="M0 0 L80 40 L0 80 Z" 
              fill="#EAB308" 
              className="fill-yellow-500"
            />
          </svg>
        </div>
      </div>

      {/* Desktop Navigation Menu */}
      <nav className="hidden lg:flex items-center h-full absolute top-0 z-30" style={{ left: '360px', right: '0' }}>
        <div className="flex items-center justify-center w-full">
          <div className="flex space-x-8 xl:space-x-12">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-white font-bold text-sm xl:text-base tracking-wider hover:text-yellow-300 transition-colors duration-200 whitespace-nowrap relative ${
                  item.active ? "text-yellow-300" : ""
                }`}
              >
                {item.name}
                {item.active && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-300 rounded-full"></div>
                )}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-40 text-white focus:outline-none p-2 hover:bg-white/10 rounded-md transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "rotate-180" : ""
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

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed top-20 left-0 w-full bg-blue-500 transition-all duration-300 ease-in-out z-50 shadow-2xl ${
          isMobileMenuOpen
            ? "transform translate-y-0 opacity-100 visible"
            : "transform -translate-y-full opacity-0 invisible"
        }`}
      >
        <nav className="px-6 py-6 space-y-1">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block text-white font-bold text-sm tracking-wider hover:text-yellow-300 hover:bg-blue-600/50 px-4 py-3 rounded-lg transition-all duration-200 ${
                item.active ? "text-yellow-300 bg-blue-600/50" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;