'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import { ToastContainer, toast } from 'react-toastify';

const Maincontactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nameRegex = /^[A-Za-z ]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    let hasError = false;
    const newErrors = { name: '', email: '', mobile: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      hasError = true;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Enter a valid name';
      hasError = true;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
      hasError = true;
    }

    if (!formData.mobile) {
      newErrors.mobile = 'Mobile is required';
      hasError = true;
    } else if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit number';
      hasError = true;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("mobile", formData.mobile);
    submissionData.append("message", formData.message);
    submissionData.append("access_key", "8ff9217d-bc6d-4349-8af8-85d2368e097b");

    const object = Object.fromEntries(submissionData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      if (result.success) {
        toast.success('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: ''
        });
      } else {
        console.error('Submission failed:', result);
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Book Appointment | VLSR Clinic</title>
        <meta name="description" content="Book your appointment with VLSR - The Clinic through our contact form. Reach us easily with the embedded map and quick response form." />
        <meta name="keywords" content="Contact VLSR Clinic, Book Appointment, Clinic Mumbai, Healthcare, Medical Services, VLSR address, VLSR contact ,Best surgeon in Santacruz, Lady surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, General surgeon Santacruz West, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Hernia specialist in Santacruz, Fissure doctor Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Breast lump surgery in Santacruz, Appendix surgery in Mumbai, Female surgeon for daycare surgery Santacruz, Dr Shazia Waghoo surgeon Mumbai, Expert laparoscopic surgeon Santacruz, Proctologist near Santacruz" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VLSR Clinic" />
        <meta property="og:title" content="Contact Us | VLSR - The Clinic" />
        <meta property="og:description" content="Fill out the form to reach VLSR - The Clinic. Easily locate us on Google Maps." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/contactus-image.jpg" />
        <meta property="og:url" content="https://drshaziawaghoo.com/contact" />
        <link rel="canonical" href="https://drshaziawaghoo.com/contact" />
      </Head>

      <ToastContainer />

      <section className="w-full px-4 py-10 bg-gray-100 flex justify-center items-center mt-16">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8 max-w-5xl w-full border border-gray-300">
          
          {/* Contact Form */}
          <div className="flex-1">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <h2 className="text-xl font-semibold text-center text-[#0085DC] mb-4">
                  Book Your Appointment
                </h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder:text-[#4D4040] placeholder:text-[13px] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.4)]"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="placeholder:text-[#4D4040] placeholder:text-[13px] w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)]"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full placeholder:text-[#4D4040] placeholder:text-[13px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)]"
                />
                {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
              </div>
              <div>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="text-black w-full px-4 py-2 border placeholder:text-[#4D4040] placeholder:text-[13px] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)]"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <div className='flex justify-center'>
                <button
                  type="submit"
                  className="bg-[#0085DC] hover:bg-blue-500 text-white px-6 py-2 rounded-md shadow-md transition duration-200"
                >
                  SEND REQUEST
                </button>
              </div>
            </form>
          </div>

          {/* Google Map Iframe */}
          <div className="flex-1 border border-black">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1128079301635!2d72.83125667519897!3d19.07099305297588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c904b608afbb%3A0x5aea1d449dd7592b!2sVLSR%20-%20The%20Clinic!5e0!3m2!1sen!2sin!4v1718952936574!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full min-h-[300px] border"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Maincontactus;
