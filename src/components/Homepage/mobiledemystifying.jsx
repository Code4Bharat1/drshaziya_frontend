"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DemystifyingMobile = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start bg-gray-50 px-6  md:hidden ">
      {/* Heading */}
      <h2 className="text-2xl text-center sm:text-3xl font-bold text-[#004979] mb-2  font-inter mt-4">
        Demystifying the Surgery experience
      </h2>

      {/* Description */}
      <p className="text-gray-900 text-[22px] font-semibold leading-relaxed mb-6 text-center font-inter">
        Surgery may be complex, but getting the right diagnosis and treatment
        doesn’t have to be a complex process. Our aim is to deliver a Seamless
        Surgical Experience to patients and to help them heal faster. Consult{" "}
        with our expert surgeon, Dr. Shazia Waghoo for more than 30+ diseases.
      </p>
      {/* Button */}
    <div className="mt-6 mb-10 flex justify-center items-center w-full">
  <button
    className="font-semibold text-sm bg-[#0085DC] hover:bg-blue-600 text-white px-5 py-3 rounded-md transition duration-200"
    onClick={() => router.push("/contactus")}
  >
    BOOK AN APPOINTMENT
  </button>
</div>


      {/* Images Section */}
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
              src="/circle2.png"
              alt="Dr. Shazia Waghoo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
</div>
  );
};

export default DemystifyingMobile;
