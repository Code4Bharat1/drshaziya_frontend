
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#0288D1] text-white rounded-xl border-2 border-yellow-400 p-8 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mt-10 shadow-lg">
      
      {/* Left Side */}
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-6">
        <h2 className="text-3xl font-bold mb-4">Book a Consultation</h2>
        <p className="text-base mb-6 leading-relaxed">
          Dr. Shazia utilizes cutting-edge technologies for precision and effectiveness of her specialty surgeries,
          ensuring optimal patient outcomes and facilitating faster healing for those undergoing treatment.
        </p>

        {/* Shifted down */}
        <div className="mt-6">
          <p className="font-semibold mb-1">Need an Appointment?</p>
          <p className="text-sm">Call us Or Whatsapp on these numbers-</p>
          <p className="text-lg font-bold mt-1">
            9833584847 | 9892933421
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="bg-white p-10 rounded-xl w-full md:w-[60%] shadow-md">
        <form className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="shadow-[0_3px_2px_rgba(0,0,0,0.3)] shadow-gray-200 p-3 border border-gray-300 border-1 rounded-xl  focus:outline-none focus:ring-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-xl shadow-[0_3px_2px_rgba(0,0,0,0.3)] shadow-gray-200 focus:outline-none focus:ring-2 "
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="p-3 border border-gray-300 rounded-xl shadow-[0_3px_2px_rgba(0,0,0,0.3)] shadow-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Left-aligned small button */}
          <div className="mt-2">
            <button
              type="submit"
              className="bg-[#0288D1] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
            >
              SEND REQUEST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
