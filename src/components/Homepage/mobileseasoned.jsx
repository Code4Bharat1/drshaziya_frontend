"use client";
import React from "react";
import { useRouter } from "next/navigation";

const MobileSeasoned = () => {
  const router = useRouter();
  return (
    <div className="bg-[#F8F9FE] text-[#000] px-4 py-10 ">
      <div className="flex flex-col items-center gap-8">
        <img
          src="/surgicalexellencedr.png"
          alt="Dr. Shazia Waghoo"
          className="rounded-xl w-full max-w-xs object-cover"
        />

        <div className="text-center">
          <h2 className="text-2xl font-bold">Dr. Shazia Waghoo</h2>
          <p className="text-base text-[#000000]">MBBS, DNB General Surgery</p>
        </div>

        <div className="text-left mx-4">
          <h2 className="text-[20px] text-center font-serif text-[#004979] mb-3">
            A seasoned Laparoscopic, Hernia, and Breast Surgeon
          </h2>
          <h3 className="text-[20px] text-center text-[#004979] font-serif mb-3">
            Creating Impact across Millions of Lives
          </h3>
          <p className="text-gray-800 text-[18px] font-jaldi leading-relaxed text-center">
            Dr. Shazia Waghoo is a skilled Laparoscopic, Hernia, and Breast
            Surgeon based in Mumbai. With <strong>10+ years</strong> of
            experience, she is known for minimally invasive techniques and a
            patient-first approach. She{" "}
            <strong>promotes health awareness</strong> via camps and education
            sessions, and is highly recommended.
          </p>
          <div className="flex justify-center">
  <button
    className="font-semibold text-sm bg-[#0085DC] hover:bg-blue-600 text-white px-5 py-3 rounded-md transition duration-200 mt-6"
    onClick={() => router.push("/contactus")}
  >
    BOOK AN APPOINTMENT
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default MobileSeasoned;
