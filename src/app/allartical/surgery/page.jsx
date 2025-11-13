export const metadata = {
  title: "General Surgery | Dr. Shazia Waghoo",
  description: "Comprehensive surgical care by Dr. Shazia Waghoo in Santacruz, Mumbai. Expert surgical treatments for all patients.",
  openGraph: {
    url: "https://drshaziawaghoo.com/allartical/surgery",
    title: "General Surgery | Dr. Shazia Waghoo",
    description: "Comprehensive surgical care by Dr. Shazia Waghoo in Santacruz, Mumbai. Expert surgical treatments for all patients.",
    siteName: "Dr. Shazia Waghoo",
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
