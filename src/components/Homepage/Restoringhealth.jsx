import React from 'react';

const Restoringhealth = () => {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-10 bg-[#F8F9FE]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* Left Side - Text */}
        <div className="flex-1 w-full">
          <h2 className="text-[41px]  font-bold text-[#003366] mb-6 leading-tight">
          <span className='block '>  Restoring Health and Hope,</span>
           <span className='block mt-1'> One Surgery At A Time</span>
          </h2>
          <p className="text-black text-xl leading-relaxed mb-6 font-jaldi">
           <span className='block mt-3 font-jaldi'> Dr. Shazia Waghoo’s brand offers expert, technology-driven</span> <span className='block mt-2'>surgical care with a focus on faster recovery and minimal</span><span className='block mt-2'> hospital stay. With over 10 years of experience, her team is </span> <span  className='block mt-2'>committed to making quality surgeries accessible to all.</span> 
          </p>
          <ul className="text-[#004979] text-2xl list-disc pl-6 space-y-4 font-semibold">
            <li>Deep Expertise in Laparoscopic Surgeries</li>
            <li>Affiliated to Major Hospitals in Mumbai</li>
          </ul>
        </div>

        {/* Right Side - Circular Image */}
        <div className="flex-1 w-full flex justify-center">
          <div className="w-[465px] h-[465px]  rounded-full overflow-hidden ">
            <img
              src="restoringfinal.png"
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
