import React from 'react';

const Harnia = () => {
  return (
    <div className="bg-white p-6 md:p-10 max-w-5xl mx-auto font-sans text-gray-800">
      {/* Header Image */}
      <div className="relative rounded-lg overflow-hidden shadow-md">
        <img src="/hernia.jpg" alt="Hernia" className="w-full h-60 object-cover" />
        <div className="absolute top-7 left-4 text-black text-2xl font-semibold  bg-opacity-50 px-4 py-2 rounded">
          Hernia
        </div>
      </div>

      {/* What is Hernia */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">What is Hernia?</h2>
        <p className="text-sm md:text-base leading-relaxed">
          A hernia occurs when an internal part of the body pushes through a weakness in the muscle or
          surrounding tissue wall. It can develop in various parts of the body, most commonly in the abdomen,
          groin, upper thigh, and belly button area. A bulge or lump may be noticeable, especially when
          coughing, bending over, or lifting heavy objects. Hernias can be painful and may require surgical
          treatment to repair the weak spot and prevent complications.
        </p>
      </div>

      {/* When Do Doctors Recommend Hernia Surgery */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          When Do Doctors Recommend Hernia Surgery?
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
          Doctors usually recommend hernia surgery if the hernia is painful, growing, or causing complications.
          Hernia surgery helps prevent the risk of strangulation — a serious condition where the blood supply to
          the trapped tissue is cut off. Surgery is also advised when lifestyle changes or medications cannot
          alleviate the symptoms. Laparoscopic hernia repair is a common minimally invasive method involving
          smaller incisions, less pain, and a quicker recovery compared to open surgery.
        </p>
      </div>

      {/* What are Common Types of Hernias */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">What are Common Types of Hernias?</h2>
        <ul className="list-disc list-inside text-sm md:text-base leading-relaxed space-y-1">
          <li><strong>Inguinal Hernia:</strong> Occurs in the groin area, more common in men.</li>
          <li><strong>Umbilical Hernia:</strong> Occurs around the belly button, often seen in infants and obese adults.</li>
          <li><strong>Hiatal Hernia:</strong> Occurs when part of the stomach pushes up into the chest through the diaphragm.</li>
          <li><strong>Incisional Hernia:</strong> Happens through an incision or scar from a previous abdominal surgery.</li>
          <li><strong>Femoral Hernia:</strong> Appears just below the groin, more common in women.</li>
        </ul>
      </div>

      {/* Benefits of Laparoscopic Hernia Repair */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Benefits of Laparoscopic Hernia Repair</h2>
        <p className="text-sm md:text-base leading-relaxed">
          Laparoscopic hernia surgery is less invasive and usually results in faster recovery, minimal pain,
          smaller scars, and a quicker return to daily activities. It’s especially helpful for patients with recurrent
          hernias or hernias on both sides (bilateral). The procedure is done using a laparoscope — a long thin
          tube with a camera and light — inserted through small incisions.
        </p>
      </div>
    </div>
  );
};

export default Harnia;
