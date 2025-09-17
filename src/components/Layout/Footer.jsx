"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2973a4] text-white py-8 lg:py-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          <div className="flex justify-center mb-3">
            <div className="w-full max-w-[260px]">
              <img
                src="/footerlogo.png"
                alt="Dr. Shazia Mobile Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div className="text-center mb-6">
            <ul className="space-y-3 text-md text-white">
              {[
                { text: "About Us", href: "/aboutus" },
                { text: "Specialties", href: "/specialiest" },
                { text: "Patient Testimonials", href: "/testimonial" },
                { text: "Book Appointment", href: "/contactus " },
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="hover:text-yellow-300 transition-colors duration-200 font-bold text-[16px] block"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex flex-wrap gap-2">
              {[
                { href: "https://www.youtube.com/@Dr.ShaziaWaghoo", src: "/icons-youtube.png", alt: "YouTube" },
                {
                  href: "https://www.instagram.com/drshazia_waghoo",
                  src: "/icon-insta.png",
                  alt: "Instagram",
                },
                {
                  href: "https://share.google/aQWgRKd6PObAH88Fj",
                  src: "/icon-google.png",
                  alt: "Google",
                },
                { href: "https://www.facebook.com/share/19w9fivDdr/", src: "/icon-Facebook.jpg", alt: "Facebook" },
                {
                  href: "https://wa.me/919833584847",
                  src: "/icons-whatsapp.png",
                  alt: "WhatsApp",
                },
              ].map((icon, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-full p-1.5 shadow-lg hover:scale-110 transition-transform duration-200"
                >
                  <a href={icon.href} target="_blank" rel="noopener noreferrer">
                    <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/30 w-full mb-4"></div>

          <div className="text-center text-xs font-medium text-white">
            © {new Date().getFullYear()} drshaziawaghoosurgery.com
            <div className="mt-1">
              <span>Designed by Code4Bharat</span>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="flex justify-center lg:justify-start">
              <div className="w-full max-w-[400px]">
                <Link href={"/"} passHref>
                  <img
                    src="/footer-logo.png"
                    alt="Dr. Shazia Desktop Logo"
                    className="w-full h-auto object-contain"
                  />
                </Link>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-bold text-base lg:text-lg mb-3 lg:mb-4 uppercase tracking-wide text-white">
                Clinic Info
              </h3>
              <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-white">
                {[
                  { text: "About Us", href: "/aboutus" },
                  { text: "Specialities", href: "/specialiest" },
                  { text: "Patient Testimonials", href: "/testimonial" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="hover:text-yellow-300 transition-colors duration-200 inline-flex items-center"
                    >
                      <span className="mr-2">•</span>
                      <span className="font-bold text-[16px]">{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-bold text-base lg:text-lg mb-3 lg:mb-4 uppercase tracking-wide text-white">
                Quick Links
              </h3>
              <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base text-white">
                {[{ text: "Book Appointment", href: "/contactus" }].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="hover:text-yellow-300 transition-colors duration-200 inline-flex items-center"
                    >
                      <span className="mr-2">•</span>
                      <span className="font-bold text-[16px]">{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-bold text-base lg:text-lg mb-3 lg:mb-4 uppercase tracking-wide text-white">
                Contact Us
              </h3>
              <div className="flex justify-center lg:justify-start flex-wrap gap-2 lg:gap-3 mb-4">
                {[
                  { href: "https://www.youtube.com/@Dr.ShaziaWaghoo", src: "/icons-youtube.png", alt: "YouTube" },
                  {
                    href: "https://www.instagram.com/drshazia_waghoo",
                    src: "/icon-insta.png",
                    alt: "Instagram",
                  },
                  {
                    href: "https://share.google/aQWgRKd6PObAH88Fj",
                    src: "/icon-google.png",
                    alt: "Google",
                  },
                  { href: "https://www.facebook.com/share/19w9fivDdr/", src: "/icon-Facebook.jpg", alt: "Facebook" },
                  {
                    href: "https://wa.me/919833584847",
                    src: "/icons-whatsapp.png",
                    alt: "WhatsApp",
                  },
                ].map((icon, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-full p-1.5 lg:p-2 shadow-lg hover:scale-110 transition-transform duration-200"
                  >
                    <a href={icon.href} target="_blank" rel="noopener noreferrer">
                      <img src={icon.src} alt={icon.alt} className="w-5 h-5 lg:w-6 lg:h-6" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="text-white text-sm lg:text-base font-medium break-all">
                <span className="whitespace-nowrap">9833584847</span>
                <span className="mx-2 text-yellow-300">|</span>
                <span className="whitespace-nowrap">9892933421</span>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-8">
            <div className="border-t border-white/30 w-full mb-4 lg:mb-6"></div>
            <div className="text-center text-xs lg:text-base font-medium text-white px-2">
              © {new Date().getFullYear()} drshaziawaghoosurgery.com
              <div className="mt-1 lg:mt-0 lg:inline">
                <span className="hidden lg:inline mx-1">|</span>
                <span>Designed by Code4Bharat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
