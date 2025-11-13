export const metadata = {
  title: "Thyroid Surgery | Dr. Shazia Waghoo",
  description: "Expert thyroid surgery by Dr. Shazia Waghoo in Santacruz, Mumbai. Safe and advanced treatment for thyroid conditions.",
  openGraph: {
    url: "https://drshaziawaghoo.com/allartical/thyroidsurgery",
    title: "Thyroid Surgery | Dr. Shazia Waghoo",
    description: "Expert thyroid surgery by Dr. Shazia Waghoo in Santacruz, Mumbai. Safe and advanced treatment for thyroid conditions.",
    siteName: "Dr. Shazia Waghoo",
  },
};

import Thyroid from "@/components/AllSurgery/Thyroid";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <Thyroid />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <Thyroid />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
