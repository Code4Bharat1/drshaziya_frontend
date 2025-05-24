"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0085DC] text-white py-8 lg:py-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-[200px] lg:max-w-[240px]">
              <img
                src="/footer-logo.png"
                alt="Dr. Shazia Waghoo Clinic Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Clinic Info Section */}
          <div className="text-center lg:text-left">
            <h3 className="font-bold text-base lg:text-lg mb-3 lg:mb-4 uppercase tracking-wide text-white">
              Clinic Info
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-white">
              <li>
                <a 
                  href="#about" 
                  className="hover:text-yellow-300 transition-colors duration-200 inline-flex items-center"
                >
                  <span className="mr-2">•</span> 
                  <span className="break-words">About Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="#specialities" 
                  className="hover:text-yellow-300 transition-colors duration-200 inline-flex items-center"
                >
                  <span className="mr-2">•</span> 
                  <span className="break-words">Specialities</span>
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="hover:text-yellow-300 transition-colors duration-200 inline-flex items-center"
                >
                  <span className="mr-2">•</span> 
                  <span className="break-words">Patient Testimonials</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="text-center lg:text-left">
            <h3 className="font-bold text-base lg:text-lg mb-3 lg:mb-4 uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-white">
              <li>
                <a 
                  href="#appointment" 
                  className="hover:text-yellow-300 transition-colors duration-200 inline-flex items-center"
                >
                  <span className="mr-2">•</span> 
                  <span className="break-words">Book Appointment</span>
                </a>
              </li>
              <li>
                <a 
                  href="#articles" 
                  className="hover:text-yellow-300 transition-colors duration-200 inline-flex items-center"
                >
                  <span className="mr-2">•</span> 
                  <span className="break-words">Article by Dr. Shazia</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="text-center lg:text-left">
            <h3 className="font-bold text-base lg:text-lg mb-3 lg:mb-4 uppercase tracking-wide text-white">
              Contact Us
            </h3>
            
            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start flex-wrap gap-2 lg:gap-3 mb-4">
              <div className="bg-white rounded-full p-1.5 lg:p-2 shadow-lg hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/icons-youtube.png" 
                    alt="YouTube" 
                    className="w-5 h-5 lg:w-6 lg:h-6" 
                  />
                </a>
              </div>
              
              <div className="bg-white rounded-full p-1.5 lg:p-2 shadow-lg hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <a 
                  href="https://www.instagram.com/drshazia_waghoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src="/icon-insta.png" 
                    alt="Instagram" 
                    className="w-5 h-5 lg:w-6 lg:h-6" 
                  />
                </a>
              </div>
              
              <div className="bg-white rounded-full p-1.5 lg:p-2 shadow-lg hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <a 
                  href="https://drshaziawaghoo.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src="/icon-google.png" 
                    alt="Google" 
                    className="w-5 h-5 lg:w-6 lg:h-6" 
                  />
                </a>
              </div>
              
              <div className="bg-white rounded-full p-1.5 lg:p-2 shadow-lg hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/icon-facebook.webp" 
                    alt="Facebook" 
                    className="w-5 h-5 lg:w-6 lg:h-6" 
                  />
                </a>
              </div>
              
              <div className="bg-white rounded-full p-1.5 lg:p-2 shadow-lg hover:scale-110 transition-transform duration-200 flex-shrink-0">
                <a
                  href="https://wa.me/919833584847"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img 
                    src="/icons-whatsapp.png" 
                    alt="WhatsApp" 
                    className="w-5 h-5 lg:w-6 lg:h-6" 
                  />
                </a>
              </div>
            </div>
            
            {/* Phone Numbers */}
            <div className="text-white text-sm lg:text-base font-medium break-all">
              <span className="whitespace-nowrap">9833584847</span>
              <span className="mx-2 text-yellow-300">|</span>
              <span className="whitespace-nowrap">9892933421</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Copyright */}
        <div className="mt-6 lg:mt-8">
          {/* Separator Line */}
          <div className="border-t border-white/30 w-full mb-4 lg:mb-6"></div>
          
          {/* Copyright Text */}
          <div className="text-center text-xs sm:text-bold lg:text-base text-white/200 font-medium px-2">
           
              Copyright © {new Date().getFullYear()} drshaziawaghoosurgery.com
            
            <div className="mt-1 lg:mt-0 lg:inline">
              <span className="hidden lg:inline mx-1">|</span>
              <span>Designed by MarketiqJunction</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;