import React from 'react';
import Image from 'next/image';

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
    <div className="mt-24 bg-white">
      <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">
       
        <div className="relative rounded-lg overflow-hidden shadow-md h-60">
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
  );
};

export default Lepocrasy;
