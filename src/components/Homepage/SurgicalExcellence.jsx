
import React from 'react';

const SurgicalExcellence = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Text */}
        <div className="text-center md:text-left ml-6">
          <p className="text-[#004979] font-bold mb-9 text-2xl ">
            "Redefining Surgical Excellence."
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4C4949] leading-snug mb-6">
            Immersive Surgical Care Using <br className="hidden sm:block" /> Advanced Surgery Modalities.
          </h1>
          <button className="bg-[#0085DC] hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition duration-300 mt-8">
            BOOK AN APPOINTMENT
          </button>
        </div>

        {/* Right Side - Image with Icons */}
        <div className="relative w-full max-w-md mx-auto md:max-w-full">
          <img
            src="/surgicalexellencedr.png"
            alt="Doctor"
            className="rounded-lg shadow-lg w-[450px] h-auto object-cover"
          />

          {/* WhatsApp & Phone Icons */}
      
      {/* WhatsApp & Phone Icons - Fixed to bottom-right */}
      <div className="fixed bottom-5 right-14 flex flex-col-reverse gap-4 z-50">
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="w-12 h-12 sm:w-14 sm:h-14"
          />
        </a>
        <a href="tel:9876543210">
          <img
            src="/phone.png"
            alt="Phone"
            className="w-12 h-12 sm:w-14 sm:h-14"
          />
        </a>
      </div>
        </div>
      </div>
    </div>
  );
};

export default SurgicalExcellence;

