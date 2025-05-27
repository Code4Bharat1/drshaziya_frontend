import React from 'react';

const BreastCancer = () => {
  return (
    <div className="bg-white p-6 md:p-10 max-w-5xl mx-auto font-sans text-gray-800">
      {/* Header Image */}
      <div className="relative rounded-lg overflow-hidden shadow-md">
        <img src="/breast-surgery.jpg" alt="Breast Surgery" className="w-full h-60 object-cover" />
        <div className="absolute top-7 left-4 text-black text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded">
          Breast Surgery
        </div>
      </div>

      {/* What is Breast Surgery */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">What is Breast Surgery?</h2>
        <p className="text-sm md:text-base leading-relaxed">
          Breast surgery includes procedures for both benign conditions like lumps, nipple discharge, and
          gynecomastia, and malignant conditions like carcinoma or sarcoma. Benign cases may require removal of
          the lump, ducts, or a breast quadrant, while cancer treatment involves lumpectomy or mastectomy.
          Cosmetic surgeries include breast augmentation, reduction, or reconstruction post-mastectomy.
          Some surgeries are done to reduce cancer risk or as reconstruction. Lymph node removal is also
          performed to check cancer spread. Surgery is usually combined with radiation or chemotherapy for complete treatment.
        </p>
      </div>

      {/* Role of a Breast Surgeon */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">What is the role of a Breast Surgeon?</h2>
        <p className="text-sm md:text-base leading-relaxed">
          To evaluate patients with breast complaints using clinical, radiological and pathological methods
          to diagnose the condition appropriately and based on that advise the appropriate course of treatment.
        </p>
        <p className="text-sm md:text-base leading-relaxed mt-2">
          Breast reconstruction may be advised after some breast surgeries to restore breast shape and symmetry.
          Women with excessively large breasts are evaluated and advised for breast reduction to relieve physical
          pain and improve self-esteem. Patients experiencing changes in breast appearance after pregnancy or aging
          can be advised to consider breast lifts or augmentation.
        </p>
      </div>

      {/* Common Problems Requiring a Breast Surgeon */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          What are some common problems that may require seeking a Breast Surgeon?
        </h2>
        <ul className="list-disc list-inside text-sm md:text-base leading-relaxed space-y-1">
          <li><strong>Breast Cancer:</strong> Surgery is often necessary to remove cancerous tumors and axillary lymph nodes, which may involve procedures like lumpectomy or mastectomy.</li>
          <li><strong>Benign Tumors:</strong> Noncancerous tumors, such as fibroadenomas or papillomas, require removal if they increase in size, have discomfort or concern for physical appearance.</li>
          <li><strong>Breast Reconstruction:</strong> Following a mastectomy, many women opt for reconstruction to restore breast shape and symmetry using implants or body tissue.</li>
          <li><strong>Cosmetic Enhancement:</strong> Procedures like breast augmentation and lifts are cosmetic interventions performed to enhance appearance or restore volume lost due to aging or pregnancy.</li>
          <li><strong>Genetically at Risk for Cancer:</strong> If you have a family history of breast cancer or certain risk factors, regular checkups and consultation with a breast surgeon are advised.</li>
        </ul>
      </div>
    </div>
  );
};

export default BreastCancer;
