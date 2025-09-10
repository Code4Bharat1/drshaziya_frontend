"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";


const DemystifyingMobile = () => {
  const router = useRouter();

  return (
    <>
    {/* SEO start from here */}
    <Head>
  {/* ✅ Basic SEO Tags */}
  <title>Dr. Shazia Waghoo Laparoscopic Surgeon in Andheri and Santacruz</title>
  <meta
    name="description"
    content="Dr. Shazia Waghoo simplifies the surgical experience by offering expert consultation for 30+ diseases. Get seamless care and faster healing today."
  />
  <meta
    name="keywords"
    content=" Laparoscopic Surgeon in Vashi Piles Doctor in Vashi Fissure Treatment in Vashi Fistula Specialist in Vashi Female Surgeon in Vashi Best General Surgeon in Vashi Hernia Surgery in Vashi Gallbladder Surgeon Vashi Proctologist in Vashi Women Surgeon near Vashi Navi Mumbai
 Dr. Shazia Waghoo, Dr Shazia Waghoo Santacruz ,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  expert surgeon Mumbai, hope through surgery, quality surgical care"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com/demystifying-surgery" />

  {/* ✅ Open Graph (OG) for social sharing */}
  <meta property="og:title" content="Demystifying Surgery – Consult Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="Surgery doesn't need to be complicated. Dr. Shazia Waghoo offers seamless diagnosis and treatment. Book your appointment today."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/squarecircle1.png" />
  <meta property="og:locale" content="en_IN" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Demystifying Surgery – Consult Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Book an appointment with Dr. Shazia Waghoo for expert surgical diagnosis and care. Over 30+ conditions treated with compassion."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/squarecircle1.png" />

  {/* ✅ Structured Data for Search Engines */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Dr. Shazia Waghoo Surgery",
      "url": "https://drshaziawaghoo.com/",
      "logo": "https://drshaziawaghoosurgery.com/images/squarecircle1.png",
      "description": "Expert surgical care made simple. Book a consultation with Dr. Shazia Waghoo to understand your diagnosis and treatment options.",
      "founder": {
        "@type": "Person",
        "name": "Dr. Shazia Waghoo"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Andheri | Santacruz",
        "addressCountry": "IN"
      }
    }
    `}
  </script>
</Head>

    {/* code start from here */}
    <div className="flex flex-col items-start bg-gray-50 px-6  md:hidden ">
      {/* Heading */}
      <h2 className="text-[29px] text-center  font-bold text-[#004979] mb-2  font-inter mt-4">
        Demystifying the Surgery experience
      </h2>

      {/* Description */}
      <p className="text-gray-900 text-[19px] font-semibold leading-relaxed mb-6 text-center font-inter">
        Surgery may be complex, but getting the right diagnosis and treatment
        doesn’t have to be a complex process. Our aim is to deliver a seamless
        Surgical Experience to patients and to help them heal faster. Consult{" "}
        with our expert surgeon, Dr. Shazia Waghoo for more than 30+ diseases.
      </p>
      {/* Button */}
    <div className=" mb-10 flex justify-center items-center w-full">
  <button
    className="font-semibold text-sm bg-[#0085DC] hover:bg-blue-600 text-white px-5 py-3 rounded-md transition duration-200"
    onClick={() => router.push("/contactus")}
  >
    BOOK AN APPOINTMENT
  </button>
</div>


      {/* Images Section */}
      {/* Single Combined Image */}
      <div className="w-full flex justify-center mb-10 ">
         <div className="w-50 h-50 ">
        <img
          src="/squarecircle1.png" // 🔁 replace this with your actual image file name
          alt="Dr. Shazia Waghoo"
          className="w-full h-full object-cover "
        />
        </div>
      </div>
</div>
</>
  );
};

export default DemystifyingMobile;
