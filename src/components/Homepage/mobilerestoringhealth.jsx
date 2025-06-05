import React from "react";

const RestoringhealthMobile = () => {
  return (
    <section className="px-4  bg-white block md:hidden">
      <div className="flex flex-col items-center text-left">
        {/* Image First in Mobile */}

        {/* Text Content */}
        <h2 className="text-[28px] font-bold text-[#004979] mb-4 leading-tight">
          <span>Restoring Health and Hope,</span>
          <br />
          <span>One Surgery At A Time</span>
        </h2>
        <p className="text-black text-normal text-lg px-2 leading-relaxed mb-4 font-jaldi">
          Dr. Shazia Waghoo’s brand offers expert, technology-driven surgical
          care with a focus on faster recovery and minimal hospital stay. With
          over 10 years of experience, her team is committed to making quality
          surgeries accessible to all.
        </p>
        <ul className="text-[#004979] text-xl mb-6 list-disc pl-5 text-left space-y-3 font-semibold">
          <li>Deep Expertise in Laparoscopic Surgeries</li>
          <li>Affiliated to Major Hospitals in Mumbai</li>
        </ul>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-[300px] h-[300px] flex items-center justify-center rounded-full overflow-hidden mb-6">
          <img
            src="restoringfinal.png"
            alt="Dr. Shazia Waghoo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default RestoringhealthMobile;
