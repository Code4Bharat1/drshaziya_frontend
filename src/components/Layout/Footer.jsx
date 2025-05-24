"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0085DC] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 mb-6 ">
          {/* Logo */}
          <div>
            <img
              src="/footer-logo.png"
              alt="Clinic Logo"
              className="w-72 h-44 object-contain ml-20 absolute top-32 "
            />
          </div>

          <div className="inner-footer-wrapper ">
            {/* Clinic Info */}
          <div className="inner-footer-wrapper w-[1000px] flex justify-around h-full">
  {/* Clinic Info */}
  <div>
    <h3 className="font-bold text-xl mb-3 uppercase tracking-wide text-white">Clinic Info</h3>
    <ul className="space-y-2 text-sm text-white/100">
      <li>
        <a href="#about" className="hover:text-yellow-300 transition-colors">• About Us</a>
      </li>
      <li>
        <a href="#specialities" className="hover:text-yellow-300 transition-colors">• Specialities</a>
      </li>
      <li>
        <a href="#testimonials" className="hover:text-yellow-300 transition-colors">• Patient Testimonials</a>
      </li>
    </ul>
  </div>

  {/* Quick Links */}
  <div>
    <h3 className="font-bold text-xl mb-3 uppercase tracking-wide text-white">Quick Links</h3>
    <ul className="space-y-2 text-sm text-white/90">
      <li>
        <a href="#appointment" className="hover:text-yellow-300 transition-colors">• Book Appointment</a>
      </li>
      <li>
        <a href="#articles" className="hover:text-yellow-300 transition-colors">• Article by Dr. Shazia</a>
      </li>
    </ul>
  </div>

  {/* Contact Us */}
  <div>
    <h3 className="font-bold text-xl mb-3 uppercase tracking-wide text-white">Contact Us</h3>
    <div className="flex space-x-4 items-center mb-2">
      <div className="bg-white rounded-full p-2 shadow">
        <a href="#" target="_blank">
          <img src="/icons-youtube.png" alt="YouTube" className="w-8 h-8" />
        </a>
      </div>
      <div className="bg-white rounded-full p-2 shadow">
        <a href="https://www.instagram.com/drshazia_waghoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
          <img src="/icon-insta.png" alt="Instagram" className="w-8 h-8" />
        </a>
      </div>
      <div className="bg-white rounded-full p-2 shadow">
        <a href="https://drshaziawaghoo.com/" target="_blank">
          <img src="/icon-google.png" alt="Google" className="w-8 h-8" />
        </a>
      </div>
      <div className="bg-white rounded-full p-2 shadow">
        <a href="#" target="_blank">
          <img src="/icon-facebook.webp" alt="Facebook" className="w-8 h-8" />
        </a>
      </div>
     <div className="bg-white rounded-full p-2 shadow">
  <a
    href="https://wa.me/919833584847"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/icons-whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
  </a>
</div>

    </div>
    <p className="text-white text-md">
      9833584847 <span className="mx-2">|</span> 9892933421
    </p>
  </div>
</div>
</div>
</div>
        {/* Footer Bottom */}
        <div className="mt-11">
  {/* Top border line */}
  <div className="border-t-2 border-white/100 w-[1300px] ml-20 "></div>

  {/* Copyright text */}
  <div className="mt-6"></div>
  <div className="pt-7 text-center text-bold text-white/200">
  Copyright © {new Date().getFullYear()} drshaziawaghoosurgery.com | Designed by MarketiqJunction
</div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
