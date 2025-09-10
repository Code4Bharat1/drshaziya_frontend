export const metadata = {
  title: "General Surgery | Dr. Shaziya Waghoo",
  description: "Comprehensive surgical care by Dr. Shaziya Waghoo in Kurla, Mumbai. Expert surgical treatments for all patients.",
  openGraph: {
    url: "https://drshaziawaghoo.com/allartical/surgery",
    title: "General Surgery | Dr. Shaziya Waghoo",
    description: "Comprehensive surgical care by Dr. Shaziya Waghoo in Kurla, Mumbai. Expert surgical treatments for all patients.",
    siteName: "Dr. Shaziya Waghoo",
  },
};

import BreastCancer from "@/components/AllSurgery/BreastCancer";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <BreastCancer />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <BreastCancer />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
