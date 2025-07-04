import React from 'react';
import Image from 'next/image';
import Head from "next/head";

const content = [
  {
    title: "What is Laparoscopy?",
    text: [
      `Laparoscopic surgery, also known as keyhole surgery, is a minimally invasive surgical technique used
       to examine the organs inside the abdomen. It involves making small incisions through which a
       laparoscope, a long, thin tube with a high-intensity light and a high-resolution camera at the front, is
       inserted. The camera sends images to a video monitor, allowing the surgeon to see inside the body
       in real time without making large incisions. The surgeon can also obtain biopsy samples and perform
       surgery during this procedure.`,
    ],
  },
  {
    title: "When do Doctors Advise Laparoscopy?",
    text: [
      `A laparoscopy is often used to identify and diagnose the source of pelvic or abdominal pain. It’s
       usually performed when noninvasive methods, such as ultrasound, CT scan, or MRI scan, are unable
       to help with diagnosis. The procedure may also be used to take a biopsy, or sample of tissue, from a
       particular organ in the abdomen. A laparoscopic surgeon is a specialist who performs minimally
       invasive surgeries using a laparoscope, a long, thin tube with a high-intensity light and a high-
       resolution camera at the front. The surgeon makes small incisions to insert the laparoscope and
       specialized tools, allowing for less pain, faster recovery, and reduced risk of infection compared to
       traditional open surgery.`,
    ],
  },
  {
    title: "What are some Conditions Treated with Laparoscopy?",
    text: [
      `Many common conditions can be treated with laparoscopic surgery. These include gallbladder
       disease (such as gallstones), appendicitis, gastrointestinal conditions (e.g. acid reflux, ulcerative
       colitis), obesity (bariatric surgery), female reproductive conditions (e.g. ovarian cysts, endometriosis),
       prostate conditions (e.g. prostate enlargement), and some types of cancer (e.g. colon, ovarian,
       pancreatic).`,
    ],
    list: [
      { bold: "Gallstones:", description: "If gallstones block the bile ducts, laparoscopic surgery may be used to remove the gallbladder." },
      { bold: "Appendicitis:", description: "Inflamed or infected appendix often requires laparoscopic appendectomy." },
      { bold: "Weight Loss Surgery:", description: "Procedures like gastric bypass can be performed laparoscopically." },
      { bold: "Gynecological Issues:", description: "Conditions like endometriosis, fibroids, and ectopic pregnancy often require laparoscopic surgery." },
      { bold: "Gastrointestinal Disorders:", description: "Conditions like Crohn’s disease, colorectal cancer, diverticulitis, and ulcerative colitis can be treated with laparoscopic surgery." },
    ],
    extraText: `Laparoscopic surgery is required when traditional open surgery is not the best option for the
     patient. In many cases, laparoscopic surgery and treatment are preferred over traditional surgery.
     Laparoscopy surgery offers a range of benefits: it is less invasive, which means there is less pain,
     and less time spent in the hospital. It also results in a shorter hospital stay, a faster recovery
     period, and a lower risk of complications.`,
  },
];

const Lepocrasy = () => {
  return (
    <>
               <Head>
  {/* ✅ Meta Title & Description */}
  <title>Breast Cancer Awareness Drives – Dr. Shazia Waghoo</title>
  <meta
    name="description"
    content="Breast cancer awareness events by Dr. Shazia Waghoo at Kokan Cooperative Bank and Asian Paints Pvt Ltd, Mumbai. Promoting early detection and women's health."
  />
  <meta
    name="keywords"
    content=" General Surgeon in Khar Laparoscopic Surgery in Khar Mumbai Best Female Surgeon in Khar Piles and Fissure Doctor Khar Fistula Treatment Khar Gallbladder Surgery Doctor Khar Hernia Specialist in Khar Mumbai Surgeon near Khar West General Surgeon in Khar Laparoscopic Surgery in Khar Mumbai Best Female Surgeon in Khar Piles and Fissure Doctor Khar Fistula Treatment Khar Gallbladder Surgery Doctor Khar Hernia Specialist in Khar Mumbai Surgeon near Khar West  Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz ,Best surgeon in Santacruz, Lady surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, General surgeon Santacruz West, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Hernia specialist in Santacruz, Fissure doctor Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Breast lump surgery in Santacruz, Appendix surgery in Mumbai, Female surgeon for daycare surgery Santacruz, Dr Shazia Waghoo surgeon Mumbai, Expert laparoscopic surgeon Santacruz, Proctologist near Santacruz"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph Tags */}
  <meta property="og:title" content="Breast Cancer Awareness Drives – Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="See highlights of breast cancer awareness programs conducted by Dr. Shazia Waghoo at corporate and community levels across Mumbai."
  />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/aware1.png" />

  {/* ✅ Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Breast Cancer Awareness Drives – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Educational and impactful breast cancer awareness drives led by Dr. Shazia Waghoo at Kokan Bank and Asian Paints."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/aware1.png" />

  {/* ✅ JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Dr. Shazia Waghoo | Surgical Clinic",
      "url": "https://drshaziawaghoo.com/",
      "image": "https://drshaziawaghoosurgery.com/aware1.png",
      "description": "Dr. Shazia Waghoo's breast cancer awareness drives focus on educating women about early detection and cancer prevention.",
      "location": {
        "@type": "Place",
        "name": "Mumbai, India"
      },
      "event": [
        {
          "@type": "EducationalEvent",
          "name": "Breast Cancer Awareness Lecture at Kokan Cooperative Bank",
          "location": "Mumbai, India"
        },
        {
          "@type": "EducationalEvent",
          "name": "Breast Cancer Awareness Drive at Asian Paints Pvt Ltd",
          "location": "Andheri | Santacruz"
        }
      ]
    }
    `}
  </script>
</Head>


    <div className="md:mt-14 mt-24 bg-white">
      <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">
       
        <div className="relative  overflow-hidden shadow-md h-60">
               <Image
                 src="/lapocrasy.jpg" 
                 alt="lopocrasy"
                 layout="fill"
                 objectFit="cover"
                 priority
               />
               <div className="absolute top-7 left-4 text-white text-4xl font-semibold bg-opacity-50 px-4 py-2 rounded">
                 Laparoscopy
               </div>
             </div>


        
        {content.map(({ title, text, list, extraText }, idx) => (
          <div className="mt-6" key={idx}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h2>

            
            {text.map((para, i) => (
              <p key={i} className="text-xl md:text-base leading-relaxed mb-2">
                {para}
              </p>
            ))}

           
            {list && (
              <ul className="list-disc list-inside text-xl md:text-base leading-relaxed space-y-1">
                {list.map(({ bold, description }, i) => (
                  <li key={i}>
                    <strong>{bold}</strong> {description}
                  </li>
                ))}
              </ul>
            )}

            
            {extraText && (
              <p className="mt-4 text-xl  md:text-base leading-relaxed">{extraText}</p>
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Lepocrasy;
