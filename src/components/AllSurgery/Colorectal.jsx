import React from 'react';

const Colorectal = () => {
  return (
    <div className="bg-white p-6 md:p-10 max-w-5xl mx-auto font-sans text-gray-800">
      {/* Header Image with Title */}
      <div className="relative rounded-lg overflow-hidden shadow-md">
        <img
          src="/colorectal-surgery.jpg"
          alt="Colorectal Surgery"
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-7 left-4 text-white text-2xl font-bold bg-black/50 px-4 py-2 rounded">
          Colorectal Surgery
        </div>
      </div>

      {/* Section: What is Colorectal Surgery */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Colorectal Surgery</h2>
        <p className="text-sm md:text-base leading-relaxed">
          Colorectal surgery focuses on treating conditions of the colon, rectum, and anus, such as cancer,
          inflammatory bowel disease, and diverticulitis. It may involve removing diseased sections and
          reconnecting healthy parts. Minimally invasive techniques like laparoscopy and robotic surgery offer
          better visualization in these narrow areas. Endoscopy is also used for diagnosis and treatment.
          These advanced methods help improve recovery and reduce complications.
        </p>
      </div>

      {/* Section: When Do Doctors Advise */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          When do Doctors Advise Colorectal surgery?
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          Doctors advise surgery when non-surgical treatments fail to alleviate symptoms of colorectal
          problems like blood in stool, mucus in stool, cramping pain on left side of abdomen, absolute
          constipation, rectal pain, anal pain, anal fistula and haemorrhoids. The decision is based on a
          thorough evaluation of the patient’s medical history, symptoms, and diagnostic test results.
        </p>
      </div>

      {/* Section: Conditions Treated */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          What are some Conditions Treated with Colorectal surgery?
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          Doctors typically advise surgery when patients experience significant disorders affecting the
          colon, rectum, or anus. Common indications include Diverticulitis, colorectal cancer, severe
          inflammatory bowel diseases (like Crohn’s disease and ulcerative colitis), colovesical or vaginal
          fistulae, conditions such as rectal bleeding, rectal prolapse, hemorrhoids, anal fistula and anal
          fissures.
        </p>
      </div>
    </div>
  );
};

export default Colorectal;
