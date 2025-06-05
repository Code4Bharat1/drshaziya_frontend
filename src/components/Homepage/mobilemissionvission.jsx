// components/MissionVissionMobile.jsx
import React from "react";

const MobileMissionVission = () => {
  return (
    <div className="bg-[#F8F9FE] w-full text-center px-4 font-sans mb-4">
      <div className="max-w-xl mx-8 flex flex-col gap-10">
        {/* Vision */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center mt-4 text-black">Our Vision</h2>
          <p className="text-gray-800 text-[16px] leading-relaxed font-alata font-bold">
            Our vision is to deliver superior surgical outcomes and positively
            impact millions of lives. Led by Dr. Shazia Waghoo, our expanding
            team specializes in advanced surgical procedures using the latest
            technologies. We are committed to making high-quality, affordable
            healthcare accessible to all.
          </p>
        </div>

        {/* Mission */}
         <div className="-mt-2 mb-4"> {/* slight upward adjustment */}
          <h2 className="text-3xl font-bold mb-4 text-center text-black">Our Mission</h2>
          <p className="text-gray-800 text-[17px] leading-relaxed font-alata font-bold">
            Our healthcare brand is dedicated to providing high-quality,
            affordable care in a patient-focused setting. Through innovation and
            advanced research, we aim for medical excellence while also engaging
            in community outreach and education. We’re committed to empowering
            individuals to lead healthier lives, treating every patient with
            dignity and respect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileMissionVission;
