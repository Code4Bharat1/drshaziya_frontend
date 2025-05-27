import React from 'react';

const MissionVission = () => {
  return (
    <div className="bg-[#f8f8fc] w-full px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start  py-10 gap-10 md:gap-0">
        
        {/* Vision */}
        <div className="md:w-1/2 md:pr-8 border-r md:border-r-[#000000] md:h-[370px]">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left">Our Vision</h2>
          <p className="text-[#000000] text-[20px] leading-relaxed">
            Our vision is to deliver superior surgical outcomes and positively impact millions of lives.
            Led by Dr. Shazia Waghoo, our expanding team specializes in advanced surgical procedures using
            the latest technologies. We are committed to making high-quality, affordable healthcare accessible to all.
          </p>
        </div>

        {/* Mission */}
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left">Our Mission</h2>
          <p className="text-[#000000] text-[20px] leading-relaxed">
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


