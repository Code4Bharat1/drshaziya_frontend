import Contact from '@/components/Homepage/Contact'
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
    <MobileTestimonial/>

   </div>
   </>
  )
}

export default page