import React from 'react'

const Thyroid = () => {
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
          Thyroid Surgery
        </div>
      </div>

      {/* Section: What is Colorectal Surgery */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Colorectal Surgery</h2>
        <p className="text-sm md:text-base leading-relaxed">
         Thyroid surgery, or thyroidectomy, involves removing all or part of the thyroid gland to treat conditions like nodules, goitre, hyperthyroidism, or thyroid cancer. Depending on the condition, either a total or partial thyroidectomy is performed. The surgery can be done through a traditional large incision or using minimally invasive and laser techniques. These advanced methods help ensure precision and quicker recovery.
        </p>
      </div>

      {/* Section: When Do Doctors Advise */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          When do Doctors Advise Thyroid surgery?
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
         Doctors recommend thyroid surgery for various reasons, with suspicious nodules being a common indication due to potential cancer risk. It is also performed to treat confirmed thyroid cancer and prevent its spread. Large goiters causing breathing or swallowing issues may need removal. Surgery is considered for hyperthyroidism when medications fail or aren’t suitable. The decision depends on individual patient needs and medical evaluation.
        </p>
      </div>

      {/* Section: Conditions Treated */}
      <div className="mt-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
        What are some Conditions Treated with Thyroid surgery?
        </h2>
        <p className="text-sm md:text-base leading-relaxed">
        Thyroid nodules that are suspicious for cancer or causing discomfort may also necessitate surgery. Large goiters obstructing breathing or swallowing, requiring surgical intervention. In cases of hyperthyroidism, particularly when medications are ineffective or undesired, surgery may be recommended to reduce hormone production. Special cases like thyroglossal cyst also require surgery.
        </p>
      </div>
    </div>
  );
}

export default Thyroid