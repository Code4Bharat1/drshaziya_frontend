export const metadata = {
  title: "Colorectal Treatments | Dr. Shazia Waghoo",
  description: "Expert colorectal treatments and surgeries by Dr. Shazia Waghoo in Santacruz, Mumbai, ensuring advanced and safe care.",
  openGraph: {
    url: "https://drshaziawaghoo.com/allartical/colorectalsurgery",
    title: "Colorectal Treatments | Dr. Shazia Waghoo",
    description: "Expert colorectal treatments and surgeries by Dr. Shazia Waghoo in Santacruz, Mumbai, ensuring advanced and safe care.",
    siteName: "Dr. Shazia Waghoo",
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
