"Use client";
export const metadata = {
  title: "Patient Testimonials | Dr. Shazia Waghoo",
  description:
    "Read genuine patient testimonials and success stories about Dr. Shazia Waghoo’s expert surgical care in Santacruz, Mumbai.",
  openGraph: {
    url: "https://drshaziawaghoo.com/testimonial",
    title: "Patient Testimonials | Dr. Shazia Waghoo",
    description:
      "Discover patient experiences and feedback on surgeries performed by Dr. Shazia Waghoo in Mumbai.",
    siteName: "Dr. Shazia Waghoo",
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
import Awareness1 from '@/components/Resource/Awareness1';
import MobileAwareness1 from '@/components/Resource/MobileAwareness1';
import Awareness3 from '@/components/Resource/Awareness3';
import MobileAwareness3 from '@/components/Resource/MobileAwareness3';
import BookAppointment from '@/components/Aboutus/bookapoinment';




const page = () => {
  return (
   <>
   <div className='hidden md:block'>
   <WhatsAppButton/>
   <div id="testimonials">
   <Testimonial/>
   </div>
   <div id="awareness">
   <Awareness1/>
    <Awareness3/>
    </div>
    <div id="social-media">
    <WatchVedio/>
    </div>
    <BookAppointment/>
   <Contact/>
   </div>

   
   <div className='bolck md:hidden'>
    <WhatsAppButton/>
    <div id="testimonials">
    <MobileTestimonial/>
    </div>
    <div id="awareness">
    <MobileAwareness1/>
    <MobileAwareness3/>
    </div>
    <div id="social-media">
    <MobileWatchVideo/>
    </div>
    <ContactMobile/>
    <BookAppointmentMobile/>

   </div>
   </>
  )
}

export default page