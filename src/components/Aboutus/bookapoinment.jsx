'use client'
import React from "react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from 'next/navigation';

export default function BookAppointment() {
    const router = useRouter();

  return (
    <>
     <Head>
        <title>Book Appointment | Dr. Shazia Waghoo's Surgery Clinic</title>
        <meta
          name="description"
          content="Book an appointment with Dr. Shazia Waghoo, a leading laparoscopic surgeon in Santacruz and Andheri. Trusted specialist for hernia, gallbladder, breast surgery, and more."
        />
        <meta
          name="keywords"
          content="Laparoscopic Surgeon Santacruz, Hernia Specialist Andheri, Gallbladder Surgery Mumbai, Dr Shazia Waghoo, Book Surgery Appointment, Best Surgeon in Mumbai, Piles Fissure Surgeon, Lady Surgeon Santacruz"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta property="og:title" content="Dr. Shazia Waghoo's Surgery Clinic" />
        <meta property="og:description" content="Expert laparoscopic surgery services by Dr. Shazia Waghoo in Santacruz and Andheri. Book your appointment today!" />
        <meta property="og:image" content="/book-apoinment.jpg" />
        <meta property="og:url" content="https://drshaziawaghoo.com/contactus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Image
        src="/book-apoinment.jpg"
        width={1920}
        height={1300}
        alt="Modern hospital background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#ADD8E6]/40"></div>



      <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-10 text-left">
        <div className="max-w-4xl">
          <h1 className="text-xl m:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  text-[#284578] mb-2 sm:mb-3 md:mb-4 leading-tight">
            Dr. Shazia Waghoo's Surgery Clinic
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[3284578] font-semibold mt-4 sm:mt-6 md:mt-8 lg:mt-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl leading-relaxed">
            "Your trusted partner in advanced laparoscopic surgery."
          </p>
          <button className="bg-[#069bd6] text-white font-bold py-2 sm:py-3 md:py-3 lg:py-4 px-4 sm:px-5 md:px-6 lg:px-8 rounded text-xs sm:text-sm md:text-base lg:text-lg hover:bg-[#006bb3] transition duration-300 shadow-lg mt-4 sm:mt-6 md:mt-8 lg:mt-10 w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[180px] lg:min-w-[200px]" onClick={() => router.push('/contactus')}>
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </div></>
  );
}