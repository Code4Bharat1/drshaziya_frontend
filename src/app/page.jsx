import BookAppointment from "@/components/Aboutus/bookapoinment";
import Artical from "@/components/Homepage/Artcal";
import Consult from "@/components/Homepage/Consult";
import Contact from "@/components/Homepage/Contact";
import Demystifying from "@/components/Homepage/Demystifying";
import MissionVission from "@/components/Homepage/MissionVission";
import MobileConsult from "@/components/Homepage/MobileConsult";
import ContactMobile from "@/components/Homepage/mobilecontact";
import DemystifyingMobile from "@/components/Homepage/mobiledemystifying";
import MobileMissionVission from "@/components/Homepage/mobilemissionvission";
import MobileOfferExpertise from "@/components/Homepage/mobileofferexpertise";
import MobileOurImpact from "@/components/Homepage/mobileourimpact";
import RestoringhealthMobile from "@/components/Homepage/mobilerestoringhealth";
import MobileReviewsSwiper from "@/components/Homepage/mobilereview";
import MobileSeasoned from "@/components/Homepage/mobileseasoned";
import MobileSurgicalExcellence from "@/components/Homepage/mobilesurgicalexcellence";
import MobileWatchVideo from "@/components/Homepage/mobilewatchvideo";
import OfferExpertise from "@/components/Homepage/OfferExpertise";
import OurImpact from "@/components/Homepage/OurImpact";
import Restoringhealth from "@/components/Homepage/Restoringhealth";
import Review from "@/components/Homepage/Review";
import Seasoned from "@/components/Homepage/Seasoned";
import SurgicalExcellence from "@/components/Homepage/SurgicalExcellence";
import WatchVedio from "@/components/Homepage/WatchVedio";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import MobileArtical from "@/components/Resource/MobileArtical";

export default function Home() {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <SurgicalExcellence />
        <Seasoned />
        <OurImpact />
        <Review />
        <OfferExpertise />
        <Restoringhealth />
        <MissionVission />
        <Contact />
        <Demystifying />
        <Consult />
        
        <WatchVedio />
        <Artical />
        <BookAppointment />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton/>
        <MobileSurgicalExcellence />
        <MobileSeasoned />
        <MobileOurImpact />
        <MobileOfferExpertise />
        <RestoringhealthMobile />
        <MobileMissionVission />
        <ContactMobile />
        <DemystifyingMobile />
       <MobileConsult/>
        <MobileReviewsSwiper />
      <MobileArtical/>
        <MobileWatchVideo />
      </div>
    </>
  );
}
