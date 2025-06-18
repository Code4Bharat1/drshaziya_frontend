import React from 'react';
import Head from 'next/head';
const Restoringhealth = () => {
  return (
    <>
     <Head>
        {/* ✅ Meta Title and Description */}
        <title>Restoring Health and Hope | Dr. Shazia Waghoo – Laparoscopic Surgeon in Mumbai</title>
        <meta
          name="description"
          content="Experience expert, technology-driven surgical care with Dr. Shazia Waghoo. Specializing in minimally invasive surgeries that reduce recovery time and hospital stay."
        />
        <meta
          name="keywords"
          content="Dr. Shazia Waghoo, laparoscopic surgeon Mumbai, expert surgery, minimally invasive surgery, faster recovery, Mumbai hospitals, advanced surgical care, restoring health and hope, hernia surgery, breast surgery, general surgeon"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoosurgery.com/restoring-health" />

        {/* ✅ Open Graph Tags */}
        <meta property="og:title" content="Restoring Health and Hope | One Surgery at a Time" />
        <meta
          property="og:description"
          content="Dr. Shazia Waghoo delivers advanced surgical care focused on fast recovery and minimal hospital stay. Trusted by patients across Mumbai."
        />
        <meta property="og:image" content="https://drshaziawaghoosurgery.com/restoringfinal.png" />
        <meta property="og:url" content="https://drshaziawaghoosurgery.com/restoring-health" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Restoring Health and Hope – Dr. Shazia Waghoo" />
        <meta
          name="twitter:description"
          content="Learn how Dr. Shazia Waghoo combines surgical excellence with patient care. Specialized in laparoscopic procedures in Mumbai."
        />
        <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/restoringfinal.png" />

        {/* ✅ Structured Data (Schema.org - MedicalOrganization) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Dr. Shazia Waghoo",
              "image": "https://drshaziawaghoosurgery.com/restoringfinal.png",
              "url": "https://drshaziawaghoosurgery.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Yogiraj Apartment, Shop No. 4, Kisan Nagar 3, Wagle Estate",
                "addressLocality": "Thane West",
                "addressRegion": "MH",
                "postalCode": "400604",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 7208131213",
                "contactType": "Appointment Booking",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "medicalSpecialty": [
                "Surgery",
                "Laparoscopic Surgery",
                "Breast Surgery",
                "Hernia Repair"
              ]
            }
          `}
        </script>
      </Head>


    {/* code start from here */}
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
    </>
  );
};

export default Restoringhealth;
