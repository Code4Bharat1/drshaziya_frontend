import React from 'react';

const Demystifying = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 bg-[#f9fbfd]">
      
      {/* Left Side: Two normal images */}
      <div className="flex flex-col gap-4 md:w-1/2 w-full items-center">
        <img
          src="/images/image1.png"
          alt="Surgery Visual"
          className="w-64 h-auto rounded"
        />
        <img
          src="/images/image2.png"
          alt="Doctor Shazia"
          className="w-64 h-auto rounded"
        />
      </div>

      {/* Right Side: Text */}
      <div className="md:w-1/2 w-full text-center md:text-left mt-6 md:mt-0 md:pl-10">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Demystifying the Surgery experience
        </h2>
        <p className="text-gray-700 mb-4">
          Surgery may be complex, but getting the right diagnosis and treatment doesn’t have to be a complex process.
          Our aim is to deliver a Seamless Surgical Experience to patients and to help them heal faster.
          Consult with our expert surgeon, Dr. Shazia Waghoo for more than 30+ diseases.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default Demystifying;
