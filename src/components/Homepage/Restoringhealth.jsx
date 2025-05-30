import React from 'react';

const Restoringhealth = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 bg-[#F8F9FE]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Side - Text */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6 leading-tight">
            Restoring Health and Hope,<br />
            One Surgery At A Time
          </h2>
          <p className="text-black text-xl leading-relaxed mb-6 font-jaldi">
            Dr. Shazia Waghoo’s brand offers expert, technology-driven surgical care with a focus on faster recovery and minimal hospital stay. With over 10 years of experience, her team is committed to making quality surgeries accessible to all.
          </p>
          <ul className="text-[#004979] text-xl list-disc pl-6 space-y-2 font-semibold">
            <li>Deep Expertise in Laparoscopic Surgeries</li>
            <li>Affiliated to Major Hospitals in Mumbai</li>
          </ul>
        </div>

        {/* Right Side - Circular Image */}
        <div className="flex-1 w-full flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ">
            <img
              src="restoringdr.png"
              alt="Dr. Shazia Waghoo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Restoringhealth;
