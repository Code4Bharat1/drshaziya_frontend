import React from 'react';

const AbdominalWall = () => {
  return (
    <div className="bg-white p-6 md:p-10 max-w-5xl mx-auto font-sans text-gray-800">
      {/* Header Image */}
      <div className="relative rounded-lg overflow-hidden shadow-md">
        <img src="/abdominal-wall.jpg" alt="Abdominal Wall Reconstruction Surgery" className="w-full h-60 object-cover" />
        <div className="absolute top-7 left-4 text-black text-2xl font-semibold  bg-opacity-50 px-4 py-2 rounded">
          Abdominal Wall Reconstruction Surgery
        </div>
      </div>

      {/* Introduction */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Abdominal Wall Reconstruction Surgery</h2>
        <p className="text-sm md:text-base leading-relaxed">
          Abdominal Wall Reconstruction Surgery is a complex procedure aimed at repairing and strengthening the abdominal wall. It involves the use of surgical techniques to reconstruct areas weakened by hernias, infections, or prior surgeries. The surgery helps restore core strength and stability.
          <br />
          By combining hernia surgery with cosmetic techniques, this surgery allows better closure of the abdominal site, reducing tension and improving the patient’s quality of life.
        </p>
      </div>

      {/* When Do Doctors Advise */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          When do Doctors Advise Abdominal Wall Reconstruction Surgery?
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-2">
          Abdominal wall reconstruction is often indicated for several conditions, including:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base leading-relaxed space-y-1">
          <li><strong>Recurrent Hernias:</strong> When hernias reappear after a previous surgery.</li>
          <li><strong>Infected Mesh:</strong> In cases where mesh used in a prior repair gets infected or fails.</li>
          <li><strong>Ventral Incisional Hernias:</strong> Weakness or bulging at the site of a surgical incision.</li>
          <li><strong>Trauma Cases:</strong> Injury to the abdominal wall from accidents or wounds.</li>
          <li><strong>Complex Hernias:</strong> Large, multiple, or complicated hernias that need extensive reconstruction.</li>
        </ul>
      </div>

      {/* Conditions Treated */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          What are some Conditions Treated with Abdominal Wall Reconstruction Surgery?
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          Abdominal wall reconstruction surgery treats conditions like large or recurrent hernias as well as structural defects. It’s also beneficial in cases of:
        </p>
        <ul className="list-disc list-inside text-sm md:text-base leading-relaxed space-y-1 mt-2">
          <li>Hernia mesh complications</li>
          <li>Infection in previous surgical repairs</li>
          <li>Weakened abdominal muscles</li>
          <li>Chronic abdominal wall separation (diastasis recti)</li>
          <li>Trauma from accidents or repeated surgeries</li>
        </ul>
      </div>
    </div>
  );
};

export default AbdominalWall;
