import React from "react";
import Head from "next/head";

const Hernia = () => {
  return (
    <>
      {/* SEo from here */}
      <Head>
        {/* ✅ Basic SEO */}
        <title>
          Dr.Shazia Waghoo – Expert Laparoscopic, Hernia & Breast Surgeon in
          Mumbai
        </title>
        <meta
          name="description"
          content="Meet Dr. Shazia Waghoo, a highly skilled surgeon specializing in laparoscopic, hernia, and breast surgeries in Mumbai. Over 11+ years of experience with patient-focused care."
        />
        <meta
          name="keywords"
          content="General Surgeon in Khar, Laparoscopic Surgery in Khar Mumbai, Best Female Surgeon in Khar, Piles and Fissure Doctor Khar, Fistula Treatment Khar, Gallbladder Surgery Doctor Khar, Hernia Specialist in Khar Mumbai, Surgeon near Khar West, Hernia specialist in Andheri, Laparoscopic surgeon in Santacruz, Breast surgery doctor in Andheri, Dr Shazia Waghoo surgeon, Dr Shazia Waghoo Santacruz, Dr Shazia Waghoo Andheri, Dr Shazia laparoscopic surgeon, Best laparoscopic surgeon in Santacruz"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoo.com/" />

        {/* ✅ Open Graph for Social Media Sharing */}
        <meta
          property="og:title"
          content="Dr. Shazia Waghoo – Laparoscopic & Hernia Surgeon in Mumbai"
        />
        <meta
          property="og:description"
          content="Learn about Dr. Shazia Waghoo’s experience and her commitment to laparoscopic, hernia, and breast surgeries. Book a consultation today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drshaziawaghoo.com/" />
        <meta
          property="og:image"
          content="https://drshaziawaghoo.com/images/drshazia-cover.jpg"
        />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dr. Shazia Waghoo – Hernia & Breast Surgeon in Mumbai"
        />
        <meta
          name="twitter:description"
          content="Specialist in laparoscopic, hernia, and breast surgeries. 11+ years of experience, patient-first approach, and multi-hospital affiliation."
        />
        <meta
          name="twitter:image"
          content="https://drshaziawaghoo.com/images/drshazia-cover.jpg"
        />

        {/* ✅ Structured Data */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Shazia Waghoo",
        "image": "https://drshaziawaghoo.com/images/drshazia-cover.jpg",
        "description": "Experienced Laparoscopic, Hernia & Breast Surgeon in Mumbai with over 11+ years of surgical excellence.",
        "medicalSpecialty": ["Laparoscopic Surgery", "Hernia Surgery", "Breast Surgery"],
        "url": "https://drshaziawaghoo.com/",
        "alumniOf": [
          { "@type": "EducationalOrganization", "name": "RCSM Government Medical College, Kolhapur" },
          { "@type": "EducationalOrganization", "name": "Saifee Hospital, Mumbai" }
        ],
        "memberOf": {
          "@type": "MedicalOrganization",
          "name": "Criticare Asia, Surya, RG Stone, Apollo Spectra, Sushrut & SRV Hospitals"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressCountry": "India"
        },
        "telephone": "+91-9833584847"
      }
    `}
        </script>
      </Head>

      {/* main code start here */}
      <div className="bg-[#F9F8FE] py-8 sm:py-12 lg:py-16 relative mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 sm:gap-8 lg:gap-12 items-center">
            {/* LEFT COLUMN */}
            <div className="flex flex-col items-center lg:items-start order-1 lg:order-1">
              <div className="flex flex-col items-center text-center">
                {/* Image */}
                <div className="w-60 h-60 md:w-52 md:h-52 lg:w-[33rem] lg:h-[30rem] overflow-hidden shadow-sm mt-0 ">
                  <img
                    src="/circle1.png"
                    alt="Dr. Shazia Waghoo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name */}
                <div className="mt-5">
                  <h2 className="text-3xl sm:text-3xl lg:text-3xl font-bold text-[#284578]">
                    Dr. Shazia Waghoo
                  </h2>
                </div>

                {/* ⭐ MOVED EDUCATION BELOW NAME ⭐ */}
                <div className="space-y-6 mt-8 w-full">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#004979]">
                    Educational Qualification
                  </h2>

                  <div className="space-y-5">
                    {/* DNB */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                      <div className="text-left">
                        <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#004979]">
                          DNB General Surgery
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-[#004979] opacity-80">
                          Saifee Hospital, Mumbai
                        </p>
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 mt-2 md:mt-0">
                        <img
                          src="/mbbs.png"
                          alt="DNB General Surgery"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* MBBS */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                      <div className="text-left">
                        <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#004979]">
                          M.B.B.S
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-[#004979] opacity-80">
                          RCSM Government Medical College, Kolhapur
                        </p>
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 mt-2 md:mt-0">
                        <img
                          src="/mbbs.png"
                          alt="M.B.B.S Icon"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Diploma */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                      <div className="text-left">
                        <h3 className="font-bold text-base sm:text-lg md:text-xl text-[#004979]">
                          Diploma in Hernia Surgery
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-[#004979] opacity-80 leading-snug">
                          By Asia Pacific Hernia Society & The Royal College of
                          Surgeons of Edinburgh
                        </p>
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 mt-2 md:mt-0">
                        <img
                          src="/mbbs.png"
                          alt="Diploma in Hernia Surgery"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* ⭐ END MOVED SECTION ⭐ */}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-2 mb-11 lg:-mt-12">

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#284578] leading-tight text-left">
                Minimally invasive in Laparoscopic, Hernia, and Breast Surgeon
              </h1>

              <div className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed space-y-3 sm:space-y-4 text-left">
                <p>
                  Dr. Shazia Waghoo is a Laparoscopic, Hernia, and Breast
                  Surgeon in Mumbai with{" "}
                  <span className="font-bold">over 11+ years of experience</span>.
                  She is trained at Government Medical College, Kolhapur, and
                  Saifee Hospital, and later served as Consultant Surgeon at HBT
                  Medical College and R.N. Cooper Hospital. She is currently
                  associated with Criticare Asia, Surya, RG Stone, Apollo
                  Spectra, Sushrut, and SRV Hospitals.
                </p>

                <p>
                  <p>
                    She has performed 1500+ surgeries and is an advocate for
                    comprehensive and specialised patient care.
                  </p>
                  <span className="font-bold">
                    Dr Waghoo provides world class surgical care to her patients
                    while keeping herself updated on all the latest treatment
                    protocols and techniques in laparoscopy, hernia, breast
                    surgery and general surgery.
                  </span>{" "}
                  She is very well trained to handle both simple and complex
                  cases with precision and patient centric approach. She is an
                  advocate for patient health and focuses on surgical problems
                  in both men and women, making it easier for women to get
                  examined without any reservations. Dr Waghoo is a passionate
                  laparoscopic surgeon and want to provide the best surgical
                  outcomes focussing on overall healing and health upgrade. Dr.
                  Waghoo conducts screening camps and lectures on early breast
                  cancer detection and hernia care, combining surgical expertise
                  with compassionate, patient-focused care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hernia;
