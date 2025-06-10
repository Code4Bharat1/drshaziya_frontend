import React from "react";

const MobileHernia = () => {
  return (
    <div className="bg-[#F9F8FE] py-6 sm:py-10 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-center">
          {/* Content section - First on mobile, second on desktop */}
          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
         <h1 className=" text-center text-[18px] mt-20 sm:text-2xl lg:text-4xl font-bold text-[#004979] leading-snug sm:leading-tight">
  <span className="block pl-4 sm:pl-6 lg:pl-8">A Seasoned Laparoscopic, Hernia,</span>
  <span className="block ">and Breast Surgeon</span>
</h1>
           <div className="text-gray-700 mx-4 text-base sm:text-lg lg:text-xl leading-relaxed text-left">
  <p>
    Dr. Shazia Waghoo is a Laparoscopic, Hernia, and Breast Surgeon
    in Mumbai with{" "}
    <span className="font-bold">over 10 years of experience</span>.
    She trained at Government Medical College, Kolhapur, and Saifee
    Hospital, and later served as Consultant Surgeon at HBT Medical
    College and R.N. Cooper Hospital. She is currently associated
    with Criticare Asia, Surya, RG Stone, Apollo Spectra, Sushrut,
    and SRV Hospitals.
  </p>
  <p className="mt-0">
    <span className="font-bold">
      She specializes in laparoscopic, hernia, breast, and GI
      surgeries and actively promotes women's health awareness.
    </span>{" "}
    Dr. Waghoo conducts screening camps and lectures on early breast
    cancer detection and hernia care, combining surgical expertise
    with compassionate, patient-focused care.
  </p>
</div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                  <img
                    src="/dnf.png"
                    alt="DNB General Surgery"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-800">
                    DNB General Surgery
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Saifee Hospital, Mumbai
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                  <img
                    src="/mbbs.png"
                    alt="M.B.B.S Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-800">
                    M.B.B.S
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    RCSM Government Medical College, Kolhapur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image section - Second on mobile, first on desktop */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
  <div className="w-68 h-48 sm:w-72 sm:h-72 lg:w-[33rem] lg:h-[33rem] overflow-hidden shadow-md">
    <img
      src="/circle1.png"
      alt="Dr. Shazia Waghoo"
      className="w-full h-full object-cover"
    />
  </div>


            <div className="w-full text-center lg:text-left mt-4 sm:mt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Dr. Shazia Waghoo
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 font-medium">
                MBBS, DNB General Surgery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHernia;