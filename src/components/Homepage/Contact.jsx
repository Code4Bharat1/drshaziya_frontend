
// import React from 'react';

// const Contact = () => {
//   return (
//   <div className="bg-gray-50 py-6 px-4">
//     <div className="bg-[#0085DC] text-white rounded-xl border-4 border-[#FFD54F] p-8 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto mt-2 mb-9 ">
      
//       {/* Left Side */}
//       <div className="md:w-1/2 mb-8 md:mb-0 md:pr-6">
//         <h2 className="text-3xl font-bold mb-4">Book a Consultation</h2>
//         <p className="text-base mb-6 leading-relaxed font-inter">
//           Dr. Shazia utilizes cutting-edge technologies for precision and effectiveness of her specialty surgeries,
//           ensuring optimal patient outcomes and facilitating faster healing for those undergoing treatment.
//         </p>

//         {/* Shifted down */}
//         <div className="mt-6">
//           <p className="font-semibold mb-1">Need an Appointment?</p>
//           <p className="text-sm">Call us Or Whatsapp on these numbers-</p>
//           <p className="text-sm font-bold mt-1">
//             9833584847 | 9892933421
//           </p>
//         </div>
//       </div>

//       {/* Right Side - Form */}
//       <div className="bg-white p-10 rounded-xl w-full md:w-[60%] shadow-md">
//         <form className="flex flex-col space-y-6">
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="shadow-[0_3px_2px_rgba(0,0,0,0.4)] shadow-[#C3C3C3] p-3 border border-gray-300 border-1 rounded-xl  focus:outline-none focus:ring-2"
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             className="p-3 border border-gray-300 rounded-xl  shadow-[0_3px_2px_rgba(0,0,0,0.4)] shadow-[#C3C3C3] focus:outline-none focus:ring-2 "
//           />
//           <input
//             type="text"
//             placeholder="Mobile Number"
//             className="p-3 border border-gray-300 rounded-xl shadow-[0_3px_2px_rgba(0,0,0,0.4)] shadow-[#C3C3C3] focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           {/* Left-aligned small button */}
//           <div className="mt-2">
//             <button
//               type="submit"
//               className="bg-[#0288D1] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
//             >
//               SEND REQUEST
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>

//   );
// };

// export default Contact;





// 'use client'
// import React, { useState } from 'react';

// const Contact = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');

//   const handleSendRequest = (e) => {
//     e.preventDefault();

//     const message = `New Consultation Request:
// Name: ${name}
// Email: ${email}
// Mobile: ${mobile}`;

//     const phoneNumber = '919833584847'; // India country code + number
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//     const newWindow = window.open(whatsappURL, '_blank');

//     if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
//       alert('Please allow popups for this website to send WhatsApp message.');
//     }
//   };

//   return (
//     <div className="bg-gray-50 py-6 px-4">
//       <div className="bg-[#0085DC] text-white rounded-xl border-4 border-[#FFD54F] p-8 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto mt-2 mb-9">
//         <div className="md:w-1/2 mb-8 md:mb-0 md:pr-6">
//           <h2 className="text-3xl font-bold mb-4">Book a Consultation</h2>
//           <p className="text-base mb-6 leading-relaxed font-inter">
//             Dr. Shazia utilizes cutting-edge technologies for precision and effectiveness of her specialty surgeries,
//             ensuring optimal patient outcomes and facilitating faster healing for those undergoing treatment.
//           </p>
//           <div className="mt-6">
//             <p className="font-semibold mb-1">Need an Appointment?</p>
//             <p className="text-sm">Call us Or Whatsapp on these numbers-</p>
//             <p className="text-sm font-bold mt-1">9833584847 | 9892933421</p>
//           </div>
//         </div>

//         {/* Right Side - Form */}
//         <div className="bg-white p-10 rounded-xl w-full md:w-[60%] shadow-md">
//           <form onSubmit={handleSendRequest} className="flex flex-col space-y-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className=" text-black p-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className=" text-black p-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2"
//             />
//             <input
//               type="text"
//               placeholder="Mobile Number"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               required
//               className=" text-black p-3 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2"
//             />

//             <div className="mt-2">
//               <button
//                 type="submit"
//                 className="bg-[#0288D1] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
//               >
//                 SEND REQUEST
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSendRequest = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !email || !mobile) {
      alert('Please fill in all fields');
      return;
    }

    // Construct message for WhatsApp
    const message = `New Consultation Request:\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}`;

    // WhatsApp number in international format (without +)
    const clinicNumber = '919833584847';

    // Format: This method forces WhatsApp to open the chat even if number is not saved
    // Using wa.me with phone parameter - this is the most reliable method
    const whatsappURL = `https://wa.me/+91${clinicNumber.substring(2)}/?text=${encodeURIComponent(message)}`;
    
    // Alternative method - opens WhatsApp Web/App directly to start a new chat
    const createChatURL = `https://web.whatsapp.com/send?phone=${clinicNumber}&text=${encodeURIComponent(message)}`;

    // Try mobile first (wa.me), then web version
    if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Mobile device - use wa.me which works better on mobile
      window.open(whatsappURL, '_blank');
    } else {
      // Desktop - use web.whatsapp.com which works reliably on desktop
      window.open(createChatURL, '_blank');
    }

    // Fallback: If user reports it's not working, show manual instructions
   
  };

  return (
    <div className="bg-gray-50 py-6 px-4  flex items-center justify-center">
      <div className="bg-[#0085DC] text-white rounded-xl border-4 border-[#FFD54F] p-8 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-2 mb-9">
        {/* Left side text */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-6">
          <h2 className="text-3xl font-bold mb-4">Book a Consultation</h2>
          <p className="text-base mb-6 leading-relaxed font-inter">
            Dr. Shazia utilizes cutting-edge technologies for precision and effectiveness of her specialty surgeries,
            ensuring optimal patient outcomes and facilitating faster healing for those undergoing treatment.
          </p>
          <div className="mt-6">
            <p className="font-semibold mb-1">Need an Appointment?</p>
            <p className="text-sm">Call us Or Whatsapp on these numbers-</p>
            <p className="text-sm font-bold mt-1">9833584847 | 9892933421</p>
          </div>
        </div>

        {/* Right side form */}
        <div className="bg-white p-10 rounded-xl w-full md:w-[60%] shadow-md">
          <div className="flex flex-col space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="text-black p-3 border placeholder:text-[#4D4040] placeholder:text-[13px] border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 "
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-black p-3 border placeholder:text-[#4D4040] placeholder:text-[13px] border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="text-black p-3 border placeholder:text-[#4D4040] placeholder:text-[13px] border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2"
            />

            <div className="mt-2 flex gap-3">
              <button
                type="button"
                onClick={handleSendRequest}
                className="bg-[#0288D1] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
              >
                SEND REQUEST
              </button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;







