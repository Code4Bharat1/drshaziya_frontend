import React from "react";

const Hernia = () => {
  return (
    <div className="bg-[#F9F8FE] py-8 sm:py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-8 lg:gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start order-1 lg:order-1">
            <div className="w-60 h-60 sm:w-80 sm:h-80 lg:w-[33rem] lg:h-[33rem] overflow-hidden shadow-sm">
              <img
                src="/circle1.png"
                alt="Dr. Shazia Waghoo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full flex items-center justify-center flex-col mt-5 ">
              <h2 className="text-4xl sm:text-3xl lg:text-3xl font-bold text-gray-800">
                Dr. Shazia Waghoo
              </h2>
              <p className="text-2xl text-gray-600 font-medium">
                MBBS, DNB General Surgery
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2 mb-11">
           
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#004979] leading-tight text-left">
              A Seasoned Laparoscopic, Hernia, and Breast Surgeon
            </h1>

            
            <div className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed space-y-3 sm:space-y-4 text-left">
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

              <p>
                <span className="font-bold">
                  She specializes in laparoscopic, hernia, breast, and GI
                  surgeries and actively promotes women's health awareness.
                </span>{" "}
                Dr. Waghoo conducts screening camps and lectures on early breast
                cancer detection and hernia care, combining surgical expertise
                with compassionate, patient-focused care.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 mt-1 sm:mt-0">
                  <img
                    src="/dnf.png"
                    alt="DNB General Surgery"
                    className="w-10 h-10 object-cover "
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800">
                    DNB General Surgery
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Saifee Hospital, Mumbai
                  </p>
                </div>
              </div>

              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4 justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 mt-1 sm:mt-0">
                  <img
                    src="/mbbs.png"
                    alt="M.B.B.S Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
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
        </div>
      </div>
     
    </div>
  );
};

export default Hernia;
