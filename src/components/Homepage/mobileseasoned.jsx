"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
const MobileSeasoned = () => {
  const router = useRouter();
  return (
    <>
    {/* SEO Start from here */}
     <Head>
        {/* ✅ Page Title and Description */}
        <title>Dr. Shazia Waghoo Laparoscopic Surgeon in Andheri and Santacruz</title>
        <meta
          name="description"
          content="Meet Dr. Shazia Waghoo, a seasoned Laparoscopic, Hernia, and Breast Surgeon based in Mumbai with 10+ years of expertise in minimally invasive techniques and patient-focused care."
        />
        <meta
          name="keywords"
          content="Laparoscopic Surgeon in Vashi Piles Doctor in Vashi Fissure Treatment in Vashi Fistula Specialist in Vashi Female Surgeon in Vashi Best General Surgeon in Vashi Hernia Surgery in Vashi Gallbladder Surgeon Vashi Proctologist in Vashi Women Surgeon near Vashi Navi Mumbai
 Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo,Dr Shazia Waghoo Santacruz,Dr Shazia Waghoo Andheri,Top hernia specialist Santacruz,Hernia surgery doctor in Andher Laparoscopic Surgeon Mumbai, Hernia Specialist, Breast Surgeon, Women Surgeon Mumbai, Minimally Invasive Surgery, Female Surgeon ,Book appointment Dr Shazia Waghoo, Best surgeon in Santacruz, Lady surgeon Mumbai, Mobile consultation form, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Laparoscopic surgeon Santacruz, Hernia treatment, Fistula fissure doctor, Breast lump surgeon Santacruz"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoo.com/mobile-seasoned" />

        {/* ✅ Open Graph for Social Sharing */}
        <meta property="og:title" content="Dr. Shazia Waghoo - Trusted Surgical Expertise in Mumbai" />
        <meta
          property="og:description"
          content="10+ years of experience in Laparoscopic, Hernia, and Breast Surgeries. Book your consultation with Dr. Shazia Waghoo today."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://drshaziawaghoo.com/" />
        <meta property="og:image" content="https://drshaziawaghoo.com/surgicalexellencedr.png" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Shazia Waghoo - Expert Surgeon in Mumbai" />
        <meta
          name="twitter:description"
          content="Dr. Shazia Waghoo is a trusted name in Laparoscopic, Hernia, and Breast Surgery. Learn more about her patient-first care approach."
        />
        <meta name="twitter:image" content="https://drshaziawaghoo.com/surgicalexellencedr.png" />

        {/* ✅ Structured Data (JSON-LD Schema) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dr. Shazia Waghoo",
            "url": "https://drshaziawaghoo.com/",
            "image": "https://drshaziawaghoo.com/surgicalexellencedr.png",
            "jobTitle": "Laparoscopic, Hernia & Breast Surgeon",
            "worksFor": {
              "@type": "MedicalOrganization",
              "name": "Dr. Shazia Waghoo Surgery Clinic"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressCountry": "IN"
            },
            "description": "Dr. Shazia Waghoo is a highly experienced surgeon with a decade of expertise in advanced minimally invasive procedures and compassionate care.",
            "sameAs": [
              "https://www.linkedin.com/in/drshaziawaghoo",
              "https://www.youtube.com/@DrShaziaWaghoo"
            ]
          }
          `}
        </script>
      </Head>


    {/* main cod estart from here */}
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
          <p
  className="text-blue-500 font-semibold text-sm sm:text-base lg:text-lg tracking-wide text-center mb-4"
>
  DIPLOMA in HERNIA SURGERY  <br />
  (By Asia Pacific Hernia Society & The Royal College of Surgeons of Edinburgh)
</p>
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
    </>
  );
};

export default MobileSeasoned;
