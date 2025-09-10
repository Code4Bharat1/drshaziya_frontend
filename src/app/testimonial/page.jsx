export const metadata = {
  title: "Patient Testimonials | Dr. Shaziya Waghoo",
  description:
    "Read genuine patient testimonials and success stories about Dr. Shaziya Waghoo’s expert surgical care in Kurla, Mumbai.",
  openGraph: {
    url: "https://drshaziawaghoo.com/testimonial",
    title: "Patient Testimonials | Dr. Shaziya Waghoo",
    description:
      "Discover patient experiences and feedback on surgeries performed by Dr. Shaziya Waghoo in Mumbai.",
    siteName: "Dr. Shaziya Waghoo",
  },
};

import BookAppointmentMobile from '@/components/Aboutus/MobileBookapoinment'
import Contact from '@/components/Homepage/Contact'
import ContactMobile from '@/components/Homepage/mobilecontact'
import MobileWatchVideo from '@/components/Homepage/mobilewatchvideo'
import WatchVedio from '@/components/Homepage/WatchVedio'
import WhatsAppButton from '@/components/Layout/whatsappbutton'
import MobileTestimonial from '@/components/Testimonial/MobileTestimonial'
import Testimonial from '@/components/Testimonial/Testimonial'
import React from 'react'

const page = () => {
  return (
   <>
   <div className='hidden md:block'>
   <WhatsAppButton/>
   <Testimonial/>
   <WatchVedio/>
   <Contact/>
   </div>
   <div className='bolck md:hidden'>
    <WhatsAppButton/>
    <MobileTestimonial/>
    <MobileWatchVideo/>
    <ContactMobile/>
    <BookAppointmentMobile/>

   </div>
   </>
  )
}

export default page