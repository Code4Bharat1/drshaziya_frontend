import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonial = () => {
  return (
    <div className="bg-gray-50 px-4 pt-6 sm:pt-8  "> 
     {/* min-h-screen */}

      {/* Heading near top (like under navbar) */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center mt-16">
        Testimonial
      </h2>

      {/* Card section */}
      <div className="flex justify-center items-start mt-11">
        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl">
          {/* Yellow rotated background card */}
          <div className="absolute inset-0 top-4 bg-[#FFD54F] rounded-3xl transform rotate-[-12deg] -translate-x-6 z-0 shadow-[0_3px_2px_rgba(0,0,0,0.2)]"></div>

          {/* White main card */}
          <div className="relative z-10 bg-white rounded-3xl  p-6 sm:p-8 text-gray-800">
            {/* Top-left quote icon */}
            <div className="absolute -top-5 left-6 sm:left-9 bg-[#0085DC] p-3 sm:p-4 rounded-full shadow-md">
              <FaQuoteLeft className="text-white text-lg sm:text-xl" />
            </div>

            <p className="text-base sm:text-lg leading-relaxed">
              “I cannot express enough gratitude for the exceptional care my mother received from Dr. Shazia Waghoo.
              From the very first consultation to the successful operation, Dr. Shazia demonstrated unparalleled
              professionalism and genuine compassion. Her expertise and attention to detail put me at ease, and the
              operation was a resounding success. We felt well-informed and supported throughout the entire process.
              Even the post op procedures were smooth as ever. I highly recommend Dr. Shazia for anyone seeking a skilled,
              caring and a dedicated surgeon. Thank you for everything you’ve done for us!”
            </p>

            {/* Bottom-right quote icon */}
            <div className="absolute -bottom-5 right-6 sm:right-9 bg-[#0085DC] p-3 sm:p-4 rounded-full shadow-md">
              <FaQuoteRight className="text-white text-lg sm:text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Button below the card */}
      <div className="flex justify-center mt-16 mb-0">
      
  <a
    href="https://www.google.com/maps/place/Dr+Shazia+Waghoo+%7C+Hernia,+Breast+and+Laparoscopic+Surgeon/@19.0809349,72.8522963,3328m/data=!3m1!1e3!4m8!3m7!1s0x3be7c91cb4d42d09:0x995febb2a757d44!8m2!3d19.0809349!4d72.8522963!9m1!1b1!16s%2Fg%2F11qh1gn93v?hl=en-IN&entry=ttu"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#0085DC] hover:bg-[#006fb6] text-white font-medium px-9 py-3 rounded-2xl shadow-md transition duration-300 mb-4"
  >
    VIEW GOOGLE REVIEW
  </a>

      </div>
    </div>
  );
};

export default Testimonial;

