'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function BookAppointment() {
    const router = useRouter();

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Image
        src="/book-apoinment.jpg"
        width={1920}
        height={1300}
        alt="Modern hospital background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0085dc70)]"></div>

      <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 text-left">
        <div className="max-w-4xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight">
            Dr. Shazia Waghoo's Surgery Clinic
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white font-semibold mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl leading-relaxed">
            "Your trusted partner in advanced laparoscopic surgery."
          </p>
          <button className="bg-[#0085DC] text-white font-bold py-2 sm:py-3 md:py-3 lg:py-4 px-4 sm:px-5 md:px-6 lg:px-8 rounded text-xs sm:text-sm md:text-base lg:text-lg hover:bg-[#006bb3] transition duration-300 shadow-lg mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]" onClick={() => router.push('/contactus')}>
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
}