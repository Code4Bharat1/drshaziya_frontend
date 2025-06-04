// import React from 'react';

// const careItems = [
//   {
//     text: 'Pre-operative assessment covers patient complaints, physical examination, counseling on illness and treatment, and addressing patient or family concerns.',
//   },
//   {
//     text: 'Physiotherapy, including limb and chest exercises, is vital for preoperative optimization, improving surgical outcomes and accelerating postoperative recovery.',
//   },
//   {
//     text: 'Post-operative care involves immediate hospital care after surgery, provided by a dedicated team of doctors and nurses. It includes pain management, wound care, and dietary support following the surgeon’s instructions.',
//   },
//   {
//     text: 'Follow-up care, tailored to the surgery and patient’s needs, is done regularly from discharge until full recovery and is crucial to surgical success, just like pre-op and post-op care.',
//   },
//   {
//     text: 'Diet and lifestyle consultations are essential across clinical, pre-operative, and post-operative care, with tailored advice and follow-up to ensure effective treatment and patient well-being.',
//   },
//   {
//     text: 'One of the stellar patient reviews we have received on Google',
//   },
// ];

// const PatientCare = () => {
//   return (
//     <div className="py-12  px-6 max-w-8xl mx-auto bg-[#F9F8FE]">
//       <h2 className="text-[52px] font-bold text-center mb-12 text-[#004979] ">Patient Care</h2>
//       <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {careItems.map((item, index) => (
//           <div key={index} className="relative w-[336px] h-[182px] mx-auto ">
//             {/* Blue background card - slightly bigger */}
//             <div className="absolute top-0 left-0 w-full h-[195px] bg-[#0085DC] rounded-3xl transform -translate-x-6 -translate-y-3"></div>

//             {/* White card - smaller and centered inside blue */}
//             <div className="absolute -top-1 left-4 w-[349px] h-[187px] bg-white rounded-3xl shadow-[0_3px_2px_rgba(0,0,0,0.4)]  p-4 flex items-center z-10 border  border-1 border-[#C3C3C3]">
//               <p className="text-sm text-[#000000] leading-snug">{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PatientCare;



//main
// import React from 'react';

// const careItems = [
//   {
//     text: 'Pre-operative assessment covers patient complaints, physical examination, counseling on illness and treatment, and addressing patient or family concerns.',
//   },
//   {
//     text: 'Physiotherapy, including limb and chest exercises, is vital for preoperative optimization, improving surgical outcomes and accelerating postoperative recovery.',
//   },
//   {
//     text: 'Post-operative care involves immediate hospital care after surgery, provided by a dedicated team of doctors and nurses. It includes pain management, wound care, and dietary support following the surgeon’s instructions.',
//   },
//   {
//     text: 'Follow-up care, tailored to the surgery and patient’s needs, is done regularly from discharge until full recovery and is crucial to surgical success, just like pre-op and post-op care.',
//   },
//   {
//     text: 'Diet and lifestyle consultations are essential across clinical, pre-operative, and post-operative care, with tailored advice and follow-up to ensure effective treatment and patient well-being.',
//   },
//   {
//     text: 'One of the stellar patient reviews we have received on Google',
//   },
// ];

// const PatientCare = () => {
//   return (
//     <div className="py-12 px-6 max-w-8xl mx-auto bg-[#F9F8FE]">
//       <h2 className="text-[52px] font-bold text-center mb-12 text-[#004979]">Patient Care</h2>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {careItems.map((item, index) => (
//           <div key={index} className="relative w-[336px] h-[205px] mx-auto">
//             {/* Blue background card */}
//             <div className=" shadow-[0_3px_2px_rgba(0,0,0,0.3)] absolute top-0 left-0 w-full h-[199px] bg-[#0085DC] rounded-[38px] transform -translate-x-6 -translate-y-3"></div>

//             {/* White card */}
//             <div className="absolute top-1 left-6 w-[345px] h-[184px] bg-white rounded-[36px] shadow-[0_3px_2px_rgba(0,0,0,0.2)] p-4 pt-1 flex items-start z-10 border border-[#bcbbbb]">
//               <p className="text-md text-[#000000] leading-snug mt-6 ml-4">{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PatientCare;





import React from 'react';

const careItems = [
  {
    title: 'Pre Operative Assessment',
    text: 'Pre-operative assessment covers patient complaints, physical examination, counseling on illness and treatment, and addressing patient or family concerns.',
  },
  {
    title: 'Physiotherapy',
    text: 'Physiotherapy, including limb and chest exercises, is vital for preoperative optimization, improving surgical outcomes and accelerating postoperative recovery.',
  },
  {
    title: 'Post Operative Care',
    text: 'Post-operative care involves immediate hospital care after surgery, provided by a dedicated team of doctors and nurses. It includes pain management, wound care, and dietary support following the surgeon’s instructions.',
  },
  {
    title: 'Follow Up Care',
    text: 'Follow-up care, tailored to the surgery and patient’s needs, is done regularly from discharge until full recovery and is crucial to surgical success, just like pre-op and post-op care.',
  },
  {
    title: 'Diet & Lifestyle',
    text: 'Diet and lifestyle consultations are essential across clinical, pre-operative, and post-operative care, with tailored advice and follow-up to ensure effective treatment and patient well-being.',
  },
  {
    title: 'Patients’ Review',
    text: 'One of the stellar patient reviews we have received on Google',
  },
];

const PatientCare = () => {
  return (
    <div className="py-12 px-6 max-w-8xl mx-auto bg-[#F9F8FE]">
      <h2 className="text-[52px] font-bold text-center mb-12 text-[#004979]">Patient Care</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {careItems.map((item, index) => (
          <div key={index} className="relative w-[336px] h-[205px] mx-auto">
            {/* Blue background card */}
            <div className=" shadow-[0_3px_2px_rgba(0,0,0,0.3)] absolute top-0 left-0 w-full h-[199px] bg-[#0085DC] rounded-[38px] transform -translate-x-6 -translate-y-3"></div>

            {/* White card */}
            <div className="absolute top-1 left-6 w-[345px] h-[184px] bg-white rounded-[36px] shadow-[0_3px_2px_rgba(0,0,0,0.2)] p-4 pt-1 flex flex-col items-start z-10 border border-[#bcbbbb]">
              <h3 className="text-[17px] font-bold text-black ml-4 mt-4">{item.title}</h3>
              <p className="text-sm font-medium text-gray-900 leading-snug mt-2 ml-4">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientCare;