import React from 'react';

const Lepocrasy = () => {
  return (
    <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">
      {/* Header Image */}
      <div className="relative rounded-lg overflow-hidden shadow-md">
        <img src="/laparoscopy.jpg" alt="Laparoscopy" className="w-full h-60 object-cover" />
        <div className="absolute top-3 left-4 text-black text-2xl font-semibold bg-opacity-50 px-4 py-2 rounded">
          Laparoscopy
        </div>
      </div>

      {/* What is Laparoscopy */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">What is Laparoscopy?</h2>
        <p className="text-sm md:text-base leading-relaxed">
          Laparoscopic surgery, also known as keyhole surgery, is a minimally invasive surgical technique used
          to examine the organs inside the abdomen. It involves making small incisions through which a
          laparoscope, a long, thin tube with a high-intensity light and a high-resolution camera at the front, is
          inserted. The camera sends images to a video monitor, allowing the surgeon to see inside the body
          in real time without making large incisions. The surgeon can also obtain biopsy samples and perform
          surgery during this procedure.
        </p>
      </div>

      {/* When do Doctors Advise Laparoscopy */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">When do Doctors Advise Laparoscopy?</h2>
        <p className="text-sm md:text-base leading-relaxed">
          A laparoscopy is often used to identify and diagnose the source of pelvic or abdominal pain. It’s
          usually performed when noninvasive methods, such as ultrasound, CT scan, or MRI scan, are unable
          to help with diagnosis. The procedure may also be used to take a biopsy, or sample of tissue, from a
          particular organ in the abdomen. A laparoscopic surgeon is a specialist who performs minimally
          invasive surgeries using a laparoscope, a long, thin tube with a high-intensity light and a high-
          resolution camera at the front. The surgeon makes small incisions to insert the laparoscope and
          specialized tools, allowing for less pain, faster recovery, and reduced risk of infection compared to
          traditional open surgery.
        </p>
      </div>

      {/* What are some Conditions Treated */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          What are some Conditions Treated with Laparoscopy?
        </h2>
        <p className="text-sm md:text-base leading-relaxed mb-2">
          Many common conditions can be treated with laparoscopic surgery. These include gallbladder
          disease (such as gallstones), appendicitis, gastrointestinal conditions (e.g. acid reflux, ulcerative
          colitis), obesity (bariatric surgery), female reproductive conditions (e.g. ovarian cysts, endometriosis),
          prostate conditions (e.g. prostate enlargement), and some types of cancer (e.g. colon, ovarian,
          pancreatic).
        </p>

        <ul className="list-disc list-inside text-sm md:text-base leading-relaxed space-y-1">
          <li><strong>Gallstones:</strong> If gallstones block the bile ducts, laparoscopic surgery may be used to remove the gallbladder.</li>
          <li><strong>Appendicitis:</strong> Inflamed or infected appendix often requires laparoscopic appendectomy.</li>
          <li><strong>Weight Loss Surgery:</strong> Procedures like gastric bypass can be performed laparoscopically.</li>
          <li><strong>Gynecological Issues:</strong> Conditions like endometriosis, fibroids, and ectopic pregnancy often require laparoscopic surgery.</li>
          <li><strong>Gastrointestinal Disorders:</strong> Conditions like Crohn’s disease, colorectal cancer, diverticulitis, and ulcerative colitis can be treated with laparoscopic surgery.</li>
        </ul>

        <p className="mt-4 text-sm md:text-base leading-relaxed">
          Laparoscopic surgery is required when traditional open surgery is not the best option for the
          patient. In many cases, laparoscopic surgery and treatment are preferred over traditional surgery.
          Laparoscopy surgery offers a range of benefits: it is less invasive, which means there is less pain,
          and less time spent in the hospital. It also results in a shorter hospital stay, a faster recovery
          period, and a lower risk of complications.
        </p>
      </div>
    </div>
  );
};

export default Lepocrasy;
