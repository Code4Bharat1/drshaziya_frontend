

"use client";
import React, { useState } from "react";
import Head from "next/head";
import { ToastContainer,toast } from 'react-toastify';


const ContactMobile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", mobile: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nameRegex = /^[A-Za-z ]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    let hasError = false;
    const newErrors = { name: "", email: "", mobile: "" };

    if (!name) {
      newErrors.name = "Name is required";
      hasError = true;
    } else if (!nameRegex.test(name)) {
      newErrors.name = "Valid name required";
      hasError = true;
    }

    if (!email) {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email";
      hasError = true;
    }

    if (!mobile) {
      newErrors.mobile = "Mobile is required";
      hasError = true;
    } else if (!mobileRegex.test(mobile)) {
      newErrors.mobile = "Invalid mobile number";
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
        toast.success("Consultation request sent!");
        setName("");
        setEmail("");
        setMobile("");
      } else {
        console.error('Form submission failed:', result);
        toast.error("Failed to send. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send. Please try again.");
    }
  };

  return (
    <>
    <Head>
  <title>Book Consultation – Dr. Shazia Waghoo | Lady Surgeon in Santacruz Mumbai</title>
  <meta
    name="description"
    content="Book a consultation with Dr. Shazia Waghoo – a trusted lady surgeon in Santacruz Mumbai. Mobile-friendly appointment form. Expert in laparoscopic, laser, and daycare surgeries."
  />
  <meta
    name="keywords"
    content="Book appointment Dr Shazia Waghoo, Best surgeon in Santacruz, Lady surgeon Mumbai, Mobile consultation form, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Laparoscopic surgeon Santacruz, Hernia treatment, Fistula fissure doctor, Breast lump surgeon Santacruz"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* Open Graph */}
  <meta property="og:title" content="Book Consultation with Dr. Shazia Waghoo – Santacruz, Mumbai" />
  <meta
    property="og:description"
    content="Secure your consultation with Dr. Shazia Waghoo – Expert female surgeon in Santacruz. Laparoscopic and daycare procedures available. Mobile-friendly form."
  />
  <meta property="og:image" content="https://drshaziawaghoo.com/images/drshazia-cover.jpg" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Book Your Consultation – Dr. Shazia Waghoo" />
  <meta name="twitter:description" content="Mobile-friendly appointment form with Dr. Shazia Waghoo in Santacruz. Book now!" />
  <meta name="twitter:image" content="https://drshaziawaghoo.com/images/drshazia-cover.jpg" />

  {/* Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Shazia Waghoo",
        "description": "Trusted lady surgeon in Santacruz offering laparoscopic, breast, hernia, piles, and daycare surgeries.",
        "medicalSpecialty": "General Surgery",
        "url": "https://drshaziawaghoo.com/",
        "image": "https://drshaziawaghoo.com/images/drshazia-cover.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Santacruz",
          "addressRegion": "Mumbai",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9833584847",
          "contactType": "Customer Support"
        }
      }
    `}
  </script>
</Head>

 
 <ToastContainer />
{/* main code start from here */}
    <div className="bg-[#0085DC] py-8 px-4 ">
      <div className=" text-white text-center mx-4">
        <h2 className="text-[28px] font-bold mb-3  ">
          Book a Consultation
        </h2>
        <p className="text-xl text-normal mb-4 font-inter">
          Dr. Shazia utilizes cutting-edge technologies for precision and
          effectiveness of her specialty surgeries, ensuring optimal patient
          outcomes and facilitating faster healing for those undergoing
          treatment.
        </p>
        <p className=" text-xl font-medium  mb-4">Need an Appointment?</p>
        <p
          className="
          font-medium text-xl
          mb-4"
        >
          Call us Or Whatsapp on these numbers-
        </p>
        <p className="text-md text-xl font-medium  mb-4">
          {" "}
          9833584847 | 9892933421
        </p>

        <div className="bg-white p-6 rounded-xl text-black">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-300 text-sm shadow-[0_3px_4px_-1px_rgba(0,0,0,0.3)]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-300 text-sm shadow-[0_3px_4px_-1px_rgba(0,0,0,0.3)]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-3 rounded-md border border-gray-300 text-sm shadow-[0_3px_4px_-1px_rgba(0,0,0,0.3)]"
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className=" w-50 px-4 bg-[#0288D1] text-white text-xs font-semibold py-2 rounded-md shadow hover:bg-blue-700 "
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

export default ContactMobile;