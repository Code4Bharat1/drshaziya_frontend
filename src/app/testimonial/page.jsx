import BookAppointmentMobile from '@/components/About us/MobileBookapoinment'
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