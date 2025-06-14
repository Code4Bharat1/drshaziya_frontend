"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
const Seasoned = () => {
const router = useRouter();
  return (
    <div className="bg-[#F8F9FE] text-[#000] p-6 ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-start gap-9 lg:ml-24 mt-16 ">
        
        {/* Left Section - Image and Name */}
        <div className="flex flex-col items-center w-full lg:w-1/3">
          <img
            src="/surgicalexellencedr.png"
            alt="Dr. Shazia Waghoo"
            className="rounded-xl w-full max-w-[490px] object-cover"
          />
          <div className="text-center mt-7">
            <h2 className="text-[27px] font-bold">Dr. Shazia Waghoo</h2>
            <p className="text-xl text-[#000000]">MBBS, DNB General Surgery</p>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-2/3 ml-16">
          <h2 className="text-4xl font-serif text-[#004979] mb-4">
            A seasoned Laparoscopic, Hernia, <br /> and Breast Surgeon
          </h2>
          <h3 className="text-2xl text-[#004979] font-serif mb-4">
            Creating Impact across Millions of Lives
          </h3>
          <p className="text-gray-800  text-xl mb-3 ">
            Dr. Shazia Waghoo is a skilled Laparoscopic, Hernia, and <br /> Breast Surgeon based in Mumbai with <strong>over 10 years</strong> of <br /> experience. She is known for minimally invasive <br /> techniques and a strong patient-focused approach. . <br /> Dr Waghoo actively <strong>promotes cancer and health awareness <br /> </strong> through camps and educational sessions. Her expertise, <br /> surgical care, and commitment to patient recovery <br /> make her highly recommended.
          </p>
          <button className=" font-semibold text-md bg-[#0085DC] hover:bg-yellow-500 text-white px-6 py-3 rounded-md transition duration-200 mt-7 mb-7"  onClick={() => router.push('/contactus')}>
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seasoned;
