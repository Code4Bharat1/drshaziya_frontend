"use client";
import React from "react";
import { useRouter } from "next/navigation";

const DemystifyingMobile = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start bg-gray-50 px-6  md:hidden ">
      {/* Heading */}
      <h2 className="text-[29px] text-center  font-bold text-[#004979] mb-2  font-inter mt-4">
        Demystifying the Surgery experience
      </h2>

      {/* Description */}
      <p className="text-gray-900 text-[19px] font-semibold leading-relaxed mb-6 text-center font-inter">
        Surgery may be complex, but getting the right diagnosis and treatment
        doesn’t have to be a complex process. Our aim is to deliver a Seamless
        Surgical Experience to patients and to help them heal faster. Consult{" "}
        with our expert surgeon, Dr. Shazia Waghoo for more than 30+ diseases.
      </p>
      {/* Button */}
    <div className=" mb-10 flex justify-center items-center w-full">
  <button
    className="font-semibold text-sm bg-[#0085DC] hover:bg-blue-600 text-white px-5 py-3 rounded-md transition duration-200"
    onClick={() => router.push("/contactus")}
  >
    BOOK AN APPOINTMENT
  </button>
</div>


      {/* Images Section */}
      {/* Single Combined Image */}
      <div className="w-full flex justify-center mb-10 ">
         <div className="w-50 h-50 ">
        <img
          src="/squarecircle.png" // 🔁 replace this with your actual image file name
          alt="Dr. Shazia Waghoo"
          className="w-full h-full object-cover "
        />
        </div>
      </div>
</div>
  );
};

export default DemystifyingMobile;
