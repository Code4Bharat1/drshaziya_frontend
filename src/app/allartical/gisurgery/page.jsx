export const metadata = {
  title: "Gastrointestinal Surgery | Dr. Shazia Waghoo",
  description: "Professional gastrointestinal surgery by Dr. Shazia Waghoo in Santacruz, Mumbai. Personalized care for digestive health.",
  openGraph: {
    url: "https://drshaziawaghoo.com/allartical/gisurgery",
    title: "Gastrointestinal Surgery | Dr. Shazia Waghoo",
    description: "Professional gastrointestinal surgery by Dr. Shazia Waghoo in Santacruz, Mumbai. Personalized care for digestive health.",
    siteName: "Dr. Shazia Waghoo",
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
