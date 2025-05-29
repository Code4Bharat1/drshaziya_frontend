import Contact from '@/components/Homepage/Contact'
import WatchVedio from '@/components/Homepage/WatchVedio'
import WhatsAppButton from '@/components/Layout/whatsappbutton'
import Testimonial from '@/components/Testimonial/Testimonial'
import React from 'react'

const page = () => {
  return (
   <>
   <WhatsAppButton/>
   <Testimonial/>
   <WatchVedio/>
   <Contact/>
   </>
  )
}

export default page