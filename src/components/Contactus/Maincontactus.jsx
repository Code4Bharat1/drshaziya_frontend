'use client';
import React from 'react';

const Maincontactus = () => {
  return (
    <section className="w-full px-4 py-10 bg-gray-100 flex justify-center items-center mt-16">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8 max-w-5xl w-full border border-gray-300">
        
        {/* Contact Form */}
        <div className="flex-1">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder:text-[#4D4040] placeholder:text-[13px] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.4)]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className=" placeholder:text-[#4D4040] placeholder:text-[13px] w-full px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400  shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)]"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full placeholder:text-[#4D4040] placeholder:text-[13px] px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400  shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)]"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border placeholder:text-[#4D4040] placeholder:text-[13px] border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-400  shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#0085DC] hover:bg-blue-500 text-white px-6 py-2 rounded-md shadow-md transition duration-200"
            >
              SEND REQUEST
            </button>
          </form>
        </div>

        {/* Google Map Iframe */}
        <div className="flex-1 border border-black">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.942730627135!2d-95.2996938!3d32.3435303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8649cea587c41e71%3A0xc2a12fe1c54eeddc!2s117%20E%20Houston%20St%2C%20Tyler%2C%20TX%2075702%2C%20USA!5e0!3m2!1sen!2sin!4v1717486713784!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full min-h-[300px] border "
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Maincontactus;
