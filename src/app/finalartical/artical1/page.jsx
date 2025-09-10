export const metadata = {
  title: "Final Article | Dr. Shaziya Waghoo",
  description:
    "Read the final article by Dr. Shaziya Waghoo – expert insights on advanced surgical treatments, healthcare tips, and patient awareness.",
  openGraph: {
    url: "https://drshaziyawaghoo.com/finalartical",
    title: "Final Article | Dr. Shaziya Waghoo",
    description:
      "Explore Dr. Shaziya Waghoo’s final article covering surgical expertise, healthcare updates, and patient-focused insights.",
    siteName: "Dr. Shaziya Waghoo",
  },
};


import Artical1 from "@/components/AllArtical/Artical1";
import Artical from "@/components/Homepage/Artcal";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <Artical1 />
        <Artical />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <Artical1 />
        <Artical />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
