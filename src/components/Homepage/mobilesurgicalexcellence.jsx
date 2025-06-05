"use client";
import React from "react";
import Image from "next/image";

const MobileSurgicalExcellence = () => {
  return (
    <section className="relative w-full overflow-hidden pt-8 sm:pt-20 md:hidden">
      {/* Background Image */}
      <div className="relative w-full h-[85vh]">
        <Image
          src="/heropic.png"
          alt="Surgical Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-10 z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white mx-18 md-mx-0  text-4xl sm:text-3xl font-semibold leading-snug font-inter">
            <span className="block">Immersive </span>
            <span className="block mt-1">Surgical Care</span>
            <span className="block mt-1">Using</span>
            <span className="block mt-1"> Advanced </span>
            <span className="block mt-1"> Surgery</span>
            <span className="block mt-1">Modalities.</span>
          </h1>

          <button className="mt-10 bg-[#0085DC] hover:bg-blue-700 text-white font-medium text-sm py-2 px-3 rounded-md transition duration-300">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileSurgicalExcellence;
