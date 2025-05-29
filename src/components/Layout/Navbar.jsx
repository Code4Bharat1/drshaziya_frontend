"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/aboutus" },
    { name: "SPECIALITIES", href: "/specialiest" },
    { name: "TESTIMONIALS & MEDIA", href: "/testimonial" },
    { name: "RESOURCES", href: "/resource" },
    { name: "CONTACT US", href: "/contactus" },
  ];

  return (
    <div className="w-full bg-white fixed top-0 left-0 z-50">
      <div className="flex relative pl-15">
        {/* Logo Section */}
        <div className="z-30 bg-white flex items-center px-4 sm:px-7">
          <Image
            src="/logo.webp"
            className="w-100 h-20"
            alt="image"
            width={100}
            height={100}
          />
        </div>

        {/* Yellow and Blue Sections */}
        <div className="flex bg-yellow-500 relative w-full h-20 clip-triangle-left shadow-lg">
          <div className="absolute top-0 left-7 bg-blue-500 w-full h-20 clip-triangle-left shadow-lg flex items-center justify-center">
            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-20 px-16 mr-12">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-white font-bold text-sm tracking-wider hover:text-yellow-300 transition-colors duration-200 whitespace-nowrap relative ${
                    pathname === item.href ? "text-yellow-300" : ""
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-300"></div>
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden absolute right-4 sm:right-6 text-white focus:outline-none p-2"
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
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden fixed top-20 left-0 right-0 bg-blue-500 transition-all duration-300 ease-in-out z-40 shadow-xl overflow-y-auto ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{ maxHeight: isMobileMenuOpen ? "500px" : "0" }}
        >
          <nav className="px-4 py-4 space-y-2">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block text-white font-bold text-sm tracking-wider hover:text-yellow-300 hover:bg-blue-600 px-4 py-3 rounded-lg transition-all duration-200 ${
                  pathname === item.href ? "text-yellow-300 bg-blue-600" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;