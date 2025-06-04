"use client";
import React from "react";
import Image from "next/image";

const SurgicalExcellence = () => {
  return (
    <section className=" relative w-full max-w-screen overflow-hidden pt-24 md:pt-28">
      {/* Image Container */}
      <div className="relative w-full h-[90vh] md:h-[83vh]">
        <Image
          src="/hero1.png" // Place this image in public/
          alt="Surgical Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-10 z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
       <h1 className="text-white text-[53px] font-semibold leading-snug text-center font-inter">
  <span className="block">Immersive Surgical Care</span>
  <span className="block mt-1">Using Advanced Surgery</span>
  <span className="block mt-1">Modalities.</span>
</h1>


          <button className="mt-14 bg-[#0085DC] hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-md transition duration-300">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default SurgicalExcellence;
