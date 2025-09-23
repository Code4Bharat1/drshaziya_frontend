'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import toast, { Toaster } from 'react-hot-toast';

const Mobilemaincontatcus = () => {
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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

    setIsSubmitting(true);

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
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Submission failed:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Book Appointment at VLSR – The Clinic</title>
        <meta
          name="description"
          content="Book an appointment with VLSR – The Clinic in Santacruz, Mumbai. Fill the form to connect with our specialists for laparoscopic, piles, gallbladder, appendix surgeries and more."
        />
        <meta
          name="keywords"
          content="Book appointment VLSR Clinic, Contact lady surgeon Santacruz, Gallbladder surgery Mumbai, Laparoscopic surgery Santacruz, Hernia specialist Mumbai, Fissure treatment Santacruz, Laser piles treatment"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VLSR - The Clinic" />
        <meta property="og:title" content="Book Appointment | VLSR - The Clinic" />
        <meta
          property="og:description"
          content="Fill out our contact form to schedule your consultation at VLSR – The Clinic, Santacruz. Quick and easy online appointment booking."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drshaziawaghoo.com/contact" />
        <meta property="og:image" content="/og-image-vlsr-contact.jpg" />
        <link rel="canonical" href="https://drshaziawaghoo.com/contact" />
      </Head>

      <Toaster position="top-center" reverseOrder={false} />
      <section className="w-full px-4 py-10 bg-white flex justify-center items-center mt-16">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">

          {/* Left: Contact Form */}
          <div className="flex-1 px-4 md:px-0">
            <h2 className="text-xl font-semibold text-center text-[#0085DC] mb-4 md:hidden">
              Book Your Appointment
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
                Thank you! Your request has been submitted successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
                There was an error submitting your request. Please try again.
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-black placeholder:text-[#4D4040] placeholder:text-[13px] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-[#4D4040] placeholder:text-[13px] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-[#4D4040] placeholder:text-[13px] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="text-black w-full px-4 py-2 border border-gray-300 rounded-md placeholder:text-[#4D4040] placeholder:text-[13px] shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)] focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="w-full flex md:justify-start justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#0085DC] hover:bg-blue-500 text-white px-6 py-2 rounded-md shadow-md transition duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND REQUEST'}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Google Map */}
          <div className="flex-1 px-4 md:px-0 border border-black">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1128079301635!2d72.83125667519897!3d19.07099305297588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c904b608afbb%3A0x5aea1d449dd7592b!2sVLSR%20-%20The%20Clinic!5e0!3m2!1sen!2sin!4v1718952936574!5m2!1sen!2sin"
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
    </>
  );
};

export default Mobilemaincontatcus;
