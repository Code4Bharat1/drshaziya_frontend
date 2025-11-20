'use client'
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Head from 'next/head';

const testimonials = [
  {
    text: "I cannot express enough gratitude for the exceptional care my mother received from Dr. Shazia Waghoo. From the very first consultation to the successful operation, Dr. Shazia demonstrated unparalleled professionalism and genuine compassion....",
    name: "KARAN",
    time: "1 WEEK AGO",
    rating: 5,
  },
  {
    text: "Dr. Shazia as the name rightly suggests an extraordinary doctor – a surgeon blessed with magical hands epitome of patience and understanding -totally patient centric thought process – thank you for taking good care of my aunt Sudha – we are extremely grateful.",
    name: "SUDHA'S FAMILY",
    time: "2 WEEKS AGO",
    rating: 5,
  },
  {
    text: "Google has only 5star that's why doctor I gave you that much, but you and your team deserve this whole galaxy. Dr.Shazia gave her whole heart and soul in my Abba's case. She with her confidence and Allah's blessings brought my Abba back....",
    name: "AHMED",
    time: "3 DAYS AGO",
    rating: 5,
  },
  {
    text: "I had an exceptional experience with Dr. Shazia Waghoo during my uncles laparoscopic umbilical hernia surgery. Her expertise, compassion, and attention to detail instilled confidence in me. The procedure went smoothly....",
    name: "RAJESH",
    time: "1 MONTH AGO",
    rating: 5,
  },
  {
    text: "Outstanding experience with Dr. Shazia Waghoo. Her professional approach and caring nature made the entire process smooth and comfortable. Truly grateful for her expertise and dedication to patient care.",
    name: "PRIYA SHARMA",
    time: "5 DAYS AGO",
    rating: 5,
  },
  {
    text: "Dr. Shazia is simply exceptional. Her surgical skills combined with her compassionate bedside manner made all the difference. Highly recommend her to anyone needing surgical care.",
    name: "VIKRAM",
    time: "2 MONTHS AGO",
    rating: 5,
  },
];

const Testimonial = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % Math.max(1, testimonials.length - 2));
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - 3) : prev - 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className="w-4 h-4"
        fill={index < rating ? "#FFD700" : "#E5E7EB"}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.06 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
      </svg>
    ));
  };

  return (
    <>
      <Head>
        {/* ✅ Basic SEO */}
        <title>Patient Testimonials – Dr. Shazia Waghoo</title>
        <meta
          name="description"
          content=" Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Read heartfelt reviews and testimonials from patients who received exceptional care from Dr. Shazia Waghoo, a leading hernia and laparoscopic surgeon."
        />
        <meta
          name="keywords"
          content=" Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo, Dr Shazia Waghoo Santacruz ,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  expert surgeon Mumbai, hope through surgery, quality surgical care"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoo.com/" />

        {/* ✅ Open Graph for Facebook & LinkedIn */}
        <meta property="og:title" content="Patient Testimonials – Dr. Shazia Waghoo" />
        <meta
          property="og:description"
          content="Discover what patients are saying about their experience with Dr. Shazia Waghoo – from successful surgeries to compassionate care."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drshaziawaghoo.com/" />
        <meta property="og:image" content="https://drshaziawaghoo.com/images/testimonials-og.jpg" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Patient Testimonials – Dr. Shazia Waghoo" />
        <meta
          name="twitter:description"
          content="Read reviews from real patients who received expert surgical care from Dr. Shazia Waghoo in Mumbai."
        />
        <meta name="twitter:image" content="https://drshaziawaghoo.com/images/testimonials-og.jpg" />

        {/* ✅ Schema.org Structured Data for Testimonials Page */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Patient Testimonials – Dr. Shazia Waghoo",
        "description": "Patient reviews and feedback on Dr. Shazia Waghoo's surgical expertise and care.",
        "url": "https://drshaziawaghoo.com/",
        "publisher": {
          "@type": "Organization",
          "name": "Dr. Shazia Waghoo Clinic",
          "logo": {
            "@type": "ImageObject",
            "url": "https://drshaziawaghoo.com/logo.png"
          }
        }
      }
    `}
        </script>
      </Head>

      {/* main code start from here */}
      <div className="bg-[#F8F9FE] px-4 pt-10 sm:pt-8">

        {/* Heading */}
        <p className="text-4xl sm:text-5xl font-extrabold text-[#284578] text-center mt-24">
          TESTIMONIAL
        </p>

        <p className="text-[1.4rem] sm:text-[1.7rem] font-semibold text-[#FFB900] text-center mt-2 mb-4 tracking-wide">
          READ REVIEWS
        </p>

        {/* Rating Line */}
        <div className="flex items-center justify-center gap-3 mt-2 mb-10">
          {/* Rating Number */}
          <span className="text-lg sm:text-xl font-semibold text-[#284578]">4.5/5</span>

          {/* Stars */}
          <div className="flex items-center space-x-1">
            {/* Full Star */}
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.06 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>

            {/* Full Star */}
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.06 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>

            {/* Full Star */}
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.06 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>

            {/* Full Star */}
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.06 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>

            {/* Half Star */}
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 20 20">
              <defs>
                <linearGradient id="halfGradient">
                  <stop offset="50%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="#D1D5DB" />
                </linearGradient>
              </defs>
              <path fill="url(#halfGradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.967a1 1 0 00-.364-1.118L2.06 9.394c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          </div>

          {/* Based on Text */}
          <span className="text-sm sm:text-base text-gray-700 font-medium">BASED ON GOOGLE REVIEWS</span>
        </div>

         {/* Carousel Section */}
        <div className="flex items-start gap-8 mb-12">

          {/* Left side - Quote and Title */}
          <div className="flex-shrink-0">

            {/* Quote Icon */}
       <div className="mb-6 flex justify-center">
          <img
            src="/quoteicon.png"   // <-- Add your quote image inside /public folder
            alt="Quote Icon"
            className="w-64 h-80 object-contain"
        />
        </div>


            

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="w-20 h-1 bg-yellow-400"></div>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right side - Testimonial Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(carouselIndex, carouselIndex + 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between min-h-[320px]"
              >
                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {testimonial.text}
                </p>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* User Info */}
                <div className="mt-4">
                  <p className="font-bold text-black text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* Button below the carousel */}
<div className="flex justify-center mt-8 mb-0 pb-12">
  <a
    href="https://www.google.com/maps/place/Dr+Shazia+Waghoo+%7C+Hernia,+Breast+and+Laparoscopic+Surgeon/@19.0809349,72.8522963,3328m/data=!3m1!1e3!4m8!3m7!1s0x3be7c91cb4d42d09:0x995febb2a757d44!8m2!3d19.0809349!4d72.8522963!9m1!1b1!16s%2Fg%2F11qh1gn93v?hl=en-IN&entry=ttu"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#069bd6] hover:bg-[#006fb6] text-white font-medium px-9 py-3 rounded-md transition duration-300 shadow-[0_3px_5px_rgba(0,0,0,0.4)]"
  >
    VIEW GOOGLE REVIEW
  </a>
</div>

      </div>
    </>
  );
};

export default Testimonial;