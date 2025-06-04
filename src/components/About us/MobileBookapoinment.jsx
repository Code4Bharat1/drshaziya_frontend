'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function BookAppointmentMobile() {
    const router = useRouter();

  return (
    <div className="relative w-full h-[300px] sm:h-[350px] overflow-hidden md:hidden">
      <Image
        src="/book-apoinment.jpg"
        width={1920}
        height={1300}
        alt="Modern hospital background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0085dc70)]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 py-6 text-center">
        <div className="max-w-xs">
          <h1 className="text-xl sm:text-2xl font-bold whitespace-nowrap text-white mb-2 sm:mb-3 leading-tight">
            Dr. Shazia Waghoo's Surgery Clinic
          </h1>
          <p className="text-2xl sm:text-3xl text-white font-semibold mt-4 sm:mt-6 leading-relaxed">
  "Your trusted partner in advanced laparoscopic surgery."
</p>
          <div className="flex justify-center mt-8 sm:mt-6">
            <button 
              className="bg-[#0085DC] text-white font-bold py-2 sm:py-3 px-4 sm:px-5 rounded text-xs sm:text-sm hover:bg-[#006bb3] transition duration-300 shadow-lg min-w-[140px] sm:min-w-[160px]"
              onClick={() => router.push('/contactus')}
            >
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}