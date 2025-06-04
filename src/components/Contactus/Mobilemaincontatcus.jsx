'use client';
import React from 'react';

const Mobilemaincontatcus = () => {
  return (
    <section className="w-full px-4 py-10 bg-white flex justify-center items-center mt-16">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">

        {/* Left: Contact Form */}
        <div className="flex-1 px-4 md:px-0">
          {/* Heading for mobile only */}
          <h2 className="text-xl font-semibold text-center text-[#0085DC] mb-4 md:hidden">
            Book Your Appointment
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-black placeholder:text-[#4D4040] placeholder:text-[13px] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-[#4D4040] placeholder:text-[13px] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-[#4D4040] placeholder:text-[13px] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-[#4D4040] placeholder:text-[13px] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <div className="w-full flex md:justify-start justify-center">
              <button
                type="submit"
                className="bg-[#0085DC] hover:bg-blue-500 text-white px-6 py-2 rounded-md shadow-md transition duration-200"
              >
                SEND REQUEST
              </button>
            </div>
          </form>
        </div>

        {/* Right: Google Map */}
        <div className="flex-1 px-4 md:px-0 border border-black">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.942730627135!2d-95.2996938!3d32.3435303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8649cea587c41e71%3A0xc2a12fe1c54eeddc!2s117%20E%20Houston%20St%2C%20Tyler%2C%20TX%2075702%2C%20USA!5e0!3m2!1sen!2sin!4v1717486713784!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full min-h-[300px] rounded"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Mobilemaincontatcus;
