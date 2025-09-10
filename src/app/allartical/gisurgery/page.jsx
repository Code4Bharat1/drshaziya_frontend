export const metadata = {
  title: "Gastrointestinal Surgery | Dr. Shaziya Waghoo",
  description: "Professional gastrointestinal surgery by Dr. Shaziya Waghoo in Kurla, Mumbai. Personalized care for digestive health.",
  openGraph: {
    url: "https://drshaziawaghoo.com/allartical/gisurgery",
    title: "Gastrointestinal Surgery | Dr. Shaziya Waghoo",
    description: "Professional gastrointestinal surgery by Dr. Shaziya Waghoo in Kurla, Mumbai. Personalized care for digestive health.",
    siteName: "Dr. Shaziya Waghoo",
  },
};



import GIsurgery from "@/components/AllSurgery/GIsurgery";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <GIsurgery />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <GIsurgery />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
