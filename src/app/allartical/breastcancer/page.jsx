
import BreastCancer from "@/components/AllSurgery/BreastCancer";
import Contact from "@/components/Homepage/Contact";
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
        <Contact />
      </div>
    </>
  );
};

export default page;
