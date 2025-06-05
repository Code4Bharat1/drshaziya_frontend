'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
const Demystifying = () => {
       const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-6 py-12 md:px-16 gap-6">
      
      {/* Left Side */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Square image */}
     {/* Square image with white overlay */}
<div className="relative">
  <img
    src="/square1.png"
    alt="Square Background"
    className="w-72 h-72 sm:w-80 sm:h-80 md:w-[390px] md:h-[400px] object-cover "
  />
  {/* White overlay */}
  <div className="absolute inset-0 bg-white opacity-20 rounded-lg"></div>
</div>

        {/* Circle image centered */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden">
            <img
              src="/circle3.png"
              alt="Dr. Shazia Waghoo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004979] mb-4 font-inter">
          Demystifying the Surgery experience
        </h2>
        <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed font-inter">
          Surgery may be complex, but getting the right<br />diagnosis and treatment doesn’t have to be a complex process.
          Our aim is to deliver a Seamless<br />Surgical Experience to patients and to help them heal faster.
          Consult <br />with our expert surgeon, Dr. Shazia Waghoo for more than 30+ diseases.
        </p>
        <button className="bg-[#0085DC] text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-500  "   onClick={() => router.push('/contactus')}>
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default Demystifying;
