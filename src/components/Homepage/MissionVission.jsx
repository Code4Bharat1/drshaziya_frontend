import React from 'react';

const MissionVission = () => {
  return (
    <div className="bg-[#F8F9FE] w-full px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start py-10 gap-10 md:gap-0">
        
        {/* Vision */}
        <div className="md:w-1/2 md:pr-8 border-r md:border-r-[#000000] md:h-[350px] md:ml-[-8px]">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-center">Our Vision</h2>
          <p className="text-gray-800 text-[18px] leading-relaxed text-center font-alata font-bold">
            Our vision is to deliver superior surgical outcomes and positively impact millions of lives.
            Led by Dr. Shazia Waghoo, our expanding team specializes in advanced surgical procedures using
            the latest technologies. We are committed to making high-quality, affordable healthcare accessible to all.
          </p>
        </div>

        {/* Mission */}
        <div className="md:w-1/2 md:pl-24 md:ml-9">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-center">Our Mission</h2>
          <p className="text-gray-800 text-[18px] leading-relaxed font-alata font-bold text-center">
            Our healthcare brand is dedicated to providing high-quality, affordable care in a patient-focused setting.
            Through innovation and advanced research, we aim for medical excellence while also engaging in community
            outreach and education. We’re committed to empowering individuals to lead healthier lives, treating every
            patient with dignity and respect.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default MissionVission;
