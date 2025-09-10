export const metadata = {
  title: "Colorectal Treatments | Dr. Shaziya Waghoo",
  description: "Expert colorectal treatments and surgeries by Dr. Shaziya Waghoo in Kurla, Mumbai, ensuring advanced and safe care.",
  openGraph: {
    url: "https://drshaziawaghoo.com/allartical/colorectalsurgery",
    title: "Colorectal Treatments | Dr. Shaziya Waghoo",
    description: "Expert colorectal treatments and surgeries by Dr. Shaziya Waghoo in Kurla, Mumbai, ensuring advanced and safe care.",
    siteName: "Dr. Shaziya Waghoo",
  },
};


import ColorectalSurgery from '@/components/AllSurgery/Colorectalsurgery'
import Contact from '@/components/Homepage/Contact'
import React from 'react'

const page = () => {
  return (
   <>
<ColorectalSurgery/>
   <Contact/>
   </>
  )
}

export default page
