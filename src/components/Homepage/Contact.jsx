'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Head from 'next/head'; // ✅ Added for SEO

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nameRegex = /^[A-Za-z ]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    let hasError = false;
    const newErrors = { name: '', email: '', mobile: '' };

    if (!name) {
      newErrors.name = 'Name is required';
      hasError = true;
    } else if (!nameRegex.test(name)) {
      newErrors.name = 'Enter a valid name (letters only, min 2 chars)';
      hasError = true;
    }

    if (!email) {
      newErrors.email = 'Email is required';
      hasError = true;
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address';
      hasError = true;
    }

    if (!mobile) {
      newErrors.mobile = 'Mobile number is required';
      hasError = true;
    } else if (!mobileRegex.test(mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("access_key", "8ff9217d-bc6d-4349-8af8-85d2368e097b");

    const object = Object.fromEntries(formData);
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
        toast.success('Your consultation request has been sent successfully!');
        setName('');
        setEmail('');
        setMobile('');
      } else {
        console.error('Form submission failed:', result);
        toast.error('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Contact Dr. Shazia Waghoo – Lady Surgeon in Santacruz</title>
        <meta
          name="description"
          content="Book a consultation with Dr. Shazia Waghoo, expert lady surgeon in Santacruz Mumbai. Specializing in laparoscopic, laser, hernia, piles, breast lump and gallbladder surgeries."
        />
        <meta
          name="keywords"
          content="Lady surgeon in Santacruz, Best general surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, Breast lump surgery in Santacruz, Hernia specialist Santacruz, Piles treatment in Santacruz Mumbai, Gallbladder stone surgery Santacruz, Fissure treatment Santacruz, Fistula specialist in Santacruz, Laser piles surgery Santacruz Mumbai, Appendix surgery in Santacruz, Daycare surgery in Santacruz, Female doctor for surgery in Santacruz, Proctologist in Santacruz, Best laparoscopic surgeon near Santacruz"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://drshaziawaghoo.com/contact" />
      </Head>

      <ToastContainer />

      <div className="bg-gray-50 py-6 px-4 flex items-center justify-center">
        <div className="bg-[#0085DC] text-white rounded-xl border-4 border-[#FFD54F] p-8 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-2 mb-9 shadow-[0_4px_2px_rgba(0,0,0,0.2)]">

          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-6">
            <h2 className="text-3xl font-bold mb-4">Book a Consultation</h2>
            <p className="text-base mb-6 leading-relaxed font-inter">
              Dr. Shazia utilizes cutting-edge technologies for precision and effectiveness of her specialty surgeries. Ensuring optimal patient outcomes and facilitating faster healing for those undergoing treatment.
            </p>
            <div className="mt-6">
              <p className="font-semibold mb-1">Need an Appointment?</p>
              <p className="text-md">Call or WhatsApp us:</p>
              <p className="text-md font-bold mt-1">9833584847 | 9892933421</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-xl w-full md:w-[60%] shadow-md">
            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-black p-3 border placeholder:text-[#4D4040] placeholder:text-[13px] border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 w-full"
                />
                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black p-3 border placeholder:text-[#4D4040] placeholder:text-[13px] border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 w-full"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="text-black p-3 border placeholder:text-[#4D4040] placeholder:text-[13px] border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 w-full"
                />
                {errors.mobile && <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>}
              </div>

              <div className="mt-2 flex gap-3 justify-center">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-[#0288D1] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
                >
                  SEND REQUEST
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
