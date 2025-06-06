import React from 'react';
import Image from 'next/image';

const content = [
  {
    title: "Thyroid Surgery",
    text: [
      `Thyroid surgery, or thyroidectomy, involves removing all or part of the thyroid gland to treat conditions like nodules, goitre, hyperthyroidism, or thyroid cancer. Depending on the condition, either a total or partial thyroidectomy is performed. The surgery can be done through a traditional large incision or using minimally invasive and laser techniques. These advanced methods help ensure precision and quicker recovery.`,
    ],
  },
  {
    title: "When do Doctors Advise Thyroid surgery?",
    text: [
      `Doctors recommend thyroid surgery for various reasons, with suspicious nodules being a common indication due to potential cancer risk. It is also performed to treat confirmed thyroid cancer and prevent its spread. Large goiters causing breathing or swallowing issues may need removal. Surgery is considered for hyperthyroidism when medications fail or aren’t suitable. The decision depends on individual patient needs and medical evaluation.`,
    ],
  },
  {
    title: "What are some Conditions Treated with Thyroid surgery?",
    text: [
      `Thyroid nodules that are suspicious for cancer or causing discomfort may also necessitate surgery.`,
      `Large goiters obstructing breathing or swallowing, requiring surgical intervention.`,
      `In cases of hyperthyroidism, particularly when medications are ineffective or undesired, surgery may be recommended to reduce hormone production.`,
      `Special cases like thyroglossal cyst also require surgery.`,
    ],
  },
];

const Thyroid = () => {
  return (
     <div className="mt-14 bg-white">
    <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">
      
     <div className="relative  overflow-hidden shadow-md h-60">
                    <Image
                      src="/thyroidsurgary.jpg" 
                      alt=" Thyroid Surgery"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                    <div className="absolute top-7 left-4 text-white text-4xl font-semibold bg-opacity-50 px-4 py-2 rounded">
                     Thyroid Surgery
                    </div>
                  </div>
     
      {content.map(({ title, text }, idx) => (
        <div className="mt-6" key={idx}>
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          {text.map((para, i) => (
            <p className="text-xl md:text-base leading-relaxed mb-2" key={i}>
              {para}
            </p>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Thyroid;
