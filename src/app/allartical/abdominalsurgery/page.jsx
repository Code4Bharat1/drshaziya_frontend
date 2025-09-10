export const metadata = {
  title: "Abdominal Surgery | Dr. Shaziya Waghoo",
  description: "Comprehensive abdominal surgery treatments by Dr. Shaziya Waghoo in Kurla, Mumbai with expert care and modern techniques.",
  openGraph: {
    url: "https://drshaziawaghoo.com/allartical/abdominalsurgery",
    title: "Abdominal Surgery | Dr. Shaziya Waghoo",
    description: "Comprehensive abdominal surgery treatments by Dr. Shaziya Waghoo in Kurla, Mumbai with expert care and modern techniques.",
    siteName: "Dr. Shaziya Waghoo",
  },
};




import AbdominalWall from "@/components/AllSurgery/AbdominalWall";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <AbdominalWall />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />
        <AbdominalWall />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
