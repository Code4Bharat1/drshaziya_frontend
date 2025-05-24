
import React from 'react';

const Consult = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#004979] mb-10">
        Why you should Consult Dr. Shazia Waghoo
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Card 1 */}
        <div className="bg-white border rounded-lg shadow p-4 w-[300px] h-[200px]">
          <h3 className="text-sm font-bold text-gray-800 mb-2">
            Experienced Doctor in Minimally-Invasive Surgery
          </h3>
          <p className="text-sm text-gray-600">
            Our brand is well-regarded in the medical community for its accurate diagnosis and precise surgical care, specializing in advanced laser and laparoscopic treatments.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white border rounded-lg shadow p-4 w-[300px] h-[200px]">
          <h3 className="text-sm font-bold text-gray-800 mb-2">
            Approachable & Available to Consult at Multiple Locations
          </h3>
          <p className="text-sm text-gray-600">
            We offer advanced surgical care across multiple locations with follow-up consultations. Our approach ensures optimal treatment plans and full post-op support for a fast recovery.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white border rounded-lg shadow p-4 w-[300px] h-[200px]">
          <h3 className="text-sm font-bold text-gray-800 mb-2">
            Cashless Facilities & Rehabilitation Services Available
          </h3>
          <p className="text-sm text-gray-600">
            We support you through your entire surgical journey—from pre-surgery onboarding and insurance to scheduling and post-op care. Our goal is to ensure a smooth, stress-free experience and full recovery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Consult;
