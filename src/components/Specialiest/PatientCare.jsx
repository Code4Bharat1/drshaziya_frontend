import React from 'react';

const careItems = [
  {
    text: 'Pre-operative assessment covers patient complaints, physical examination, counseling on illness and treatment, and addressing patient or family concerns.',
  },
  {
    text: 'Physiotherapy, including limb and chest exercises, is vital for preoperative optimization, improving surgical outcomes and accelerating postoperative recovery.',
  },
  {
    text: 'Post-operative care involves immediate hospital care after surgery, provided by a dedicated team of doctors and nurses. It includes pain management, wound care, and dietary support following the surgeon’s instructions.',
  },
  {
    text: 'Follow-up care, tailored to the surgery and patient’s needs, is done regularly from discharge until full recovery and is crucial to surgical success, just like pre-op and post-op care.',
  },
  {
    text: 'Diet and lifestyle consultations are essential across clinical, pre-operative, and post-operative care, with tailored advice and follow-up to ensure effective treatment and patient well-being.',
  },
  {
    text: 'One of the stellar patient reviews we have received on Google',
  },
];

const PatientCare = () => {
  return (
    <div className="py-12 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Patient Care</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {careItems.map((item, index) => (
          <div key={index} className="relative w-[320px] h-[180px] mx-auto">
            {/* Blue background card - slightly bigger */}
            <div className="absolute top-0 left-0 w-full h-[168px] bg-[#0085DC] rounded-3xl transform -translate-x-6 -translate-y-3"></div>

            {/* White card - smaller and centered inside blue */}
            <div className="absolute -top-1 left-4 w-[300px] h-[160px] bg-white rounded-3xl shadow-[0_3px_2px_rgba(0,0,0,0.4)]  p-4 flex items-center z-10 border  border-1 border-[#C3C3C3]">
              <p className="text-sm text-[#000000] leading-snug">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientCare;


