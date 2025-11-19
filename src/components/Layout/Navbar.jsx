"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMediaDropdownOpen, setIsMediaDropdownOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const mediaButtonRef = useRef(null);
  const dropdownRef = useRef(null);
  const resourceButtonRef = useRef(null);
  const resourceDropdownRef = useRef(null);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  const navigationItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/aboutus" },
    { name: "SPECIALITIES", href: "/specialiest" },
    { name: "MEDIA", href: "/testimonial" },
    { name: "RESOURCES", href: "/resource" },
    { name: "CONTACT US", href: "/contactus" },
  ];

  // Function to handle smooth scroll to section
  const handleSectionScroll = (sectionId, targetPath) => {
    setIsMobileMenuOpen(false);
    setMediaOpen(false);
    setResourceOpen(false);

    if (pathname === targetPath) {
      // Already on the page, just scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Navigate to page first, then scroll
      router.push(`${targetPath}#${sectionId}`);
    }
  };

  // Handle scroll on page load if hash is present
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        mediaButtonRef.current &&
        !mediaButtonRef.current.contains(event.target)
      ) {
        setIsMediaDropdownOpen(false);
      }

      if (
        resourceDropdownRef.current &&
        !resourceDropdownRef.current.contains(event.target) &&
        resourceButtonRef.current &&
        !resourceButtonRef.current.contains(event.target)
      ) {
        setIsResourceDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full bg-white fixed top-0 left-0 z-50">
      {/* Main Navbar */}
      <div className="flex relative pl-15">
        {/* Logo Section */}
        <div className="z-30 bg-white flex items-center px-4 sm:px-7">
          <Link href="/" passHref>
            <Image
              src="/logo.webp"
              className="w-100 h-20 cursor-pointer"
              alt="image"
              width={100}
              height={100}
            />
          </Link>
        </div>

        {/* Yellow and Blue Sections */}
        <div className="flex bg-[#FFB900] relative w-full h-20 clip-triangle-left shadow-lg overflow-visible">
          <div className="absolute top-0 left-7 bg-[#284578] w-full h-20 clip-triangle-left shadow-lg flex items-center justify-center overflow-visible">
            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center space-x-20 px-16 mr-12">
              {navigationItems.map((item, index) =>
                item.name === "RESOURCES" ? (
                  <div key={index} className="relative flex items-center gap-1">
                    <Link
                      href="/resource"
                      className="text-white font-bold text-sm tracking-wider hover:text-[#FFB900] transition-colors duration-200 whitespace-nowrap"
                    >
                      RESOURCES
                    </Link>
                    <button
                      ref={resourceButtonRef}
                      onClick={() =>
                        setIsResourceDropdownOpen(!isResourceDropdownOpen)
                      }
                      className="text-white font-bold text-sm hover:text-[#FFB900]"
                    >
                      ▾
                    </button>
                  </div>
                ) : item.name === "MEDIA" ? (
                  <div key={index} className="relative flex items-center gap-1">
                    <Link
                      href="/testimonial"
                      className="text-white font-bold text-sm tracking-wider hover:text-[#FFB900] transition-colors duration-200 whitespace-nowrap"
                    >
                      MEDIA
                    </Link>
                    <button
                      ref={mediaButtonRef}
                      onClick={() =>
                        setIsMediaDropdownOpen(!isMediaDropdownOpen)
                      }
                      className="text-white font-bold text-sm hover:text-[#FFB900]"
                    >
                      ▾
                    </button>
                  </div>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    className={`text-white font-bold text-sm tracking-wider hover:text-[#FFB900] transition-colors duration-200 whitespace-nowrap ${
                      pathname === item.href ? "text-[#FFB900]" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                )
              )}
            </nav>
          </div>
        </div>

        {/* Media Dropdown - Desktop */}
        {isMediaDropdownOpen && (
          <div
            ref={dropdownRef}
            className="fixed bg-white shadow-lg rounded-lg w-48 z-[60]"
            style={{
              top: "80px",
              left: mediaButtonRef.current
                ? `${mediaButtonRef.current.getBoundingClientRect().left}px`
                : "auto",
            }}
          >
            <button
              onClick={() => handleSectionScroll("testimonials", "/testimonial")}
              className="w-full text-left block px-4 py-3 text-[#284578] hover:bg-[#284578] hover:text-white rounded-t-lg"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleSectionScroll("awareness", "/testimonial")}
              className="w-full text-left block px-4 py-3 text-[#284578] hover:bg-[#284578] hover:text-white"
            >
              Awareness
            </button>
            <button
              onClick={() => handleSectionScroll("social-media", "/testimonial")}
              className="w-full text-left block px-4 py-3 text-[#284578] hover:bg-[#284578] hover:text-white rounded-b-lg"
            >
              Social Media
            </button>
          </div>
        )}

        {/* Resource Dropdown - Desktop */}
        {isResourceDropdownOpen && (
          <div
            ref={resourceDropdownRef}
            className="fixed bg-white shadow-lg rounded-lg w-56 z-[60]"
            style={{
              top: "80px",
              left: resourceButtonRef.current
                ? `${resourceButtonRef.current.getBoundingClientRect().left}px`
                : "auto",
            }}
          >
            <button
              onClick={() => handleSectionScroll("blogs", "/resource")}
              className="w-full text-left block px-4 py-3 text-[#284578] hover:bg-[#284578] hover:text-white rounded-t-lg"
            >
              Resource
            </button>
            <button
              onClick={() => handleSectionScroll("social-work", "/resource")}
              className="w-full text-left block px-4 py-3 text-[#284578] hover:bg-[#284578] hover:text-white"
            >
              Social Work
            </button>
            <button
              onClick={() => handleSectionScroll("awards", "/resource")}
              className="w-full text-left block px-4 py-3 text-[#284578] hover:bg-[#284578] hover:text-white rounded-b-lg"
            >
              Awards & Recognitions
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden fixed top-4 right-4 sm:right-6 text-white bg-[#284578] hover:bg-[#284578] focus:outline-none p-2 rounded-md shadow-lg z-50 transition-all duration-200"
          style={{ top: "12px" }}
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
          className={`lg:hidden fixed left-0 right-0 bg-white text-black transition-all duration-300 ease-in-out z-40 shadow-xl overflow-y-auto ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          style={{
            top: "80px",
            maxHeight: isMobileMenuOpen ? "500px" : "0",
          }}
        >
          <nav className="px-4 py-4 space-y-2">
            {navigationItems.map((item, index) =>
              item.name === "RESOURCES" ? (
                <div key={index}>
                  <button
                    onClick={() => setResourceOpen(!resourceOpen)}
                    className="w-full flex justify-between items-center text-black font-bold text-sm tracking-wider hover:text-[#FFB900] px-4 py-3 rounded-lg bg-gray-100"
                  >
                    RESOURCES
                    <span>{resourceOpen ? "▴" : "▾"}</span>
                  </button>

                  {resourceOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <button
                        onClick={() => handleSectionScroll("resource", "/resource")}
                        className="w-full text-left block text-black bg-gray-50 px-4 py-2 rounded hover:bg-[#284578] hover:text-white"
                      >
                        Resource
                      </button>
                      <button
                        onClick={() => handleSectionScroll("social-work", "/resource")}
                        className="w-full text-left block text-black bg-gray-50 px-4 py-2 rounded hover:bg-[#284578] hover:text-white"
                      >
                        Social Work
                      </button>
                      <button
                        onClick={() => handleSectionScroll("awards", "/resource")}
                        className="w-full text-left block text-black bg-gray-50 px-4 py-2 rounded hover:bg-[#284578] hover:text-white"
                      >
                        Awards & Recognitions
                      </button>
                    </div>
                  )}
                </div>
              ) : item.name === "MEDIA" ? (
                <div key={index}>
                  <button
                    onClick={() => setMediaOpen(!mediaOpen)}
                    className="w-full flex justify-between items-center text-black font-bold text-sm tracking-wider hover:text-[#FFB900] px-4 py-3 rounded-lg bg-gray-100"
                  >
                    MEDIA
                    <span>{mediaOpen ? "▴" : "▾"}</span>
                  </button>

                  {mediaOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      <button
                        onClick={() => handleSectionScroll("testimonials", "/testimonial")}
                        className="w-full text-left block text-black bg-gray-50 px-4 py-2 rounded hover:bg-[#284578] hover:text-white"
                      >
                        Testimonials
                      </button>
                      <button
                        onClick={() => handleSectionScroll("awareness", "/testimonial")}
                        className="w-full text-left block text-black bg-gray-50 px-4 py-2 rounded hover:bg-[#284578] hover:text-white"
                      >
                        Awareness
                      </button>
                      <button
                        onClick={() => handleSectionScroll("social-media", "/testimonial")}
                        className="w-full text-left block text-black bg-gray-50 px-4 py-2 rounded hover:bg-[#284578] hover:text-white"
                      >
                        Social Media
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className={`block text-black font-bold text-sm tracking-wider hover:text-[#FFB900] hover:bg-blue-600 px-4 py-3 rounded-lg transition-all duration-200 ${
                    pathname === item.href ? "text-white bg-[#284578]" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
          </nav>
        </div>

        {/* Overlay for mobile */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 z-30"
            style={{ top: "80px" }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;