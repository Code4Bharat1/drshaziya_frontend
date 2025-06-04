"use client";

import Image from "next/image";
import React from "react";

const breastContent = [
  {
    heading: "What is Breast Surgery?",
    text: `Breast surgery includes procedures for both benign conditions like lumps, nipple discharge, and gynecomastia, and malignant conditions like carcinoma or sarcoma. Benign cases may require removal of the lump, ducts, or a breast quadrant, while cancer treatment involves lumpectomy or mastectomy. Cosmetic surgeries include breast augmentation, reduction, or reconstruction post-mastectomy. Some surgeries are done to reduce cancer risk or as reconstruction. Lymph node removal is also performed to check cancer spread. Surgery is usually combined with radiation or chemotherapy for complete treatment.`,
  },
  {
    heading: "What is the role of a Breast Surgeon?",
    text: `To evaluate patients with breast complaints using clinical, radiological and pathological methods to diagnose the condition appropriately and based on that advise the appropriate course of treatment.\n\nBreast reconstruction may be advised after some breast surgeries to restore breast shape and symmetry. Women with excessively large breasts are evaluated and advised for breast reduction to relieve physical pain and improve self-esteem. Patients experiencing changes in breast appearance after pregnancy or aging can be advised to consider breast lifts or augmentation.`,
  },
];

const commonProblems = [
  {
    title: "Breast Cancer:",
    desc: "Surgery is often necessary to remove cancerous tumors and axillary lymph nodes, which may involve procedures like lumpectomy or mastectomy.",
  },
  {
    title: "Benign Tumors:",
    desc: "Noncancerous tumors, such as fibroadenomas or papillomas, require removal if they increase in size, have discomfort or concern for physical appearance.",
  },
  {
    title: "Breast Reconstruction:",
    desc: "Following a mastectomy, many women opt for reconstruction to restore breast shape and symmetry using implants or body tissue.",
  },
  {
    title: "Cosmetic Enhancement:",
    desc: "Procedures like breast augmentation and lifts are cosmetic interventions performed to enhance appearance or restore volume lost due to aging or pregnancy.",
  },
  {
    title: "Genetically at Risk for Cancer:",
    desc: "If you have a family history of breast cancer or certain risk factors, regular checkups and consultation with a breast surgeon are advised.",
  },
];

const BreastCancer = () => {
  return (
    <div className="mt-24">
    <div className="bg-white p-6 md:p-10 max-w-5xl mx-auto font-sans text-gray-800">
     
      <div className="relative rounded-lg overflow-hidden shadow-md h-60">
        <Image
          src="/lasersurgary.jpg" 
          alt="Breast Surgery"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute top-7 left-4 text-white text-4xl font-semibold bg-opacity-50 px-4 py-2 rounded">
          Breast Surgery
        </div>
      </div>

      
      <div className="mt-6 space-y-10">
        {breastContent.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              {section.heading}
            </h2>
            <p className="text-xl md:text-base leading-relaxed whitespace-pre-line">
              {section.text}
            </p>
          </div>
        ))}

       
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            What are some common problems that may require seeking a Breast Surgeon?
          </h2>
          <ul className="list-disc list-inside text-xl md:text-base leading-relaxed space-y-1">
            {commonProblems.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BreastCancer;
