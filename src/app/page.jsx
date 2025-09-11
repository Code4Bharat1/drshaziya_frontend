// export const metadata = {
//   title: "Dr. Shaziya Waghoo | Best Doctor in Kurla & Mumbai", 
//   description:
//     "Consult Dr. Shaziya Waghoo in Kurla, Mumbai – Experienced and trusted doctor offering personalized care, treatment, and medical consultation for all ages."
//   ,

//     keywords: [
//     "Dr Shaziya Waghoo",
//     "Hernia",
//     "Breast Surgeon ladies",
//     "ladies doctor for haernia",
//     "Laparoscopic Surgeon in Kurla",
//     "Laparoscopic Surgeon in Mumbai",
//     "Hernia Surgeon in Kurla",
//     "Hernia Surgeon in Mumbai",
//     "Breast Surgeon in Kurla",
//     "Breast Surgeon in Mumbai",
//     "Best Laparoscopic Surgeon in Mumbai",
//     "Best Hernia Surgeon in Mumbai",
//     "Best Breast Surgeon in Mumbai",
//     "ladies doctor for breast surgery",
//     "ladies doctor for laparoscopic surgery",
//     "doctor for laparoscopic surgery in mumbai",
//     "doctor for hernia surgery in mumbai",
//     "doctor for breast surgery in mumbai",
//     "dr shaziya waghoo reviews",
//     "dr shaziya waghoo",
//     "dr shaziya waghoo contact",
//     "dr shaziya waghoo appointment",
//     "dr shaziya waghoo address",
//     "dr shaziya waghoo phone number",
//     "dr shaziya waghoo email",
//     "dr shaziya waghoo website",
//     "dr shaziya waghoo fees",
//     "dr shaziya waghoo consultation",
//     "dr shaziya waghoo clinic"
//   ],


//   openGraph: {
//     title: "Dr. Shaziya Waghoo | Trusted Doctor in Mumbai",
//     description:
//       "Book an appointment with Dr. Shaziya Waghoo – Experienced doctor in Kurla & Mumbai providing compassionate care and medical treatment for families."
//     ,
//     url: "https://drshaziawaghoo.com/", // <- yaha doctor ka real domain daalna
//     siteName: "Dr. Shaziya Waghoo",
//     images: [
//       {
//         url: "/img/homeBanner.jpg", // doctor banner / profile image
//         width: 1200,
//         height: 630,
//         alt: "Dr. Shaziya Waghoo - Best Doctor in Kurla Mumbai",
//       },
//     ],
//     locale: "en_IN",
//     type: "website",
//   },
// };

export const metadata = {
  title: "Dr. Shaziya Waghoo | Best Doctor in Kurla & Mumbai",
  description:
    "Consult Dr. Shaziya Waghoo in Kurla, Mumbai – Experienced doctor providing trusted care and advanced treatments.",
  keywords: [
    "Dr Shaziya Waghoo",
    "Hernia",
    "Breast Surgeon ladies",
    "ladies doctor for haernia",
    "Laparoscopic Surgeon in Kurla",
    "Laparoscopic Surgeon in Mumbai",
    "Hernia Surgeon in Kurla",
    "Hernia Surgeon in Mumbai",
    "Breast Surgeon in Kurla",
    "Breast Surgeon in Mumbai",
    "Best Laparoscopic Surgeon in Mumbai",
    "Best Hernia Surgeon in Mumbai",
    "Best Breast Surgeon in Mumbai",
    "ladies doctor for breast surgery",
    "ladies doctor for laparoscopic surgery",
    "doctor for laparoscopic surgery in mumbai",
    "doctor for hernia surgery in mumbai",
    "doctor for breast surgery in mumbai",
    "dr shaziya waghoo reviews",
    "dr shaziya waghoo",
    "dr shaziya waghoo contact",
    "dr shaziya waghoo appointment",
    "dr shaziya waghoo address",
    "dr shaziya waghoo phone number",
    "dr shaziya waghoo email",
    "dr shaziya waghoo website",
    "dr shaziya waghoo fees",
    "dr shaziya waghoo consultation",
    "dr shaziya waghoo clinic"
  ],

  openGraph: {
    title: "Dr. Shaziya Waghoo | Trusted Doctor in Mumbai",
    description:
      "Book an appointment with Dr. Shaziya Waghoo – Trusted surgeon in Kurla & Mumbai offering compassionate care.",
    url: "https://drshaziawaghoosurgery.com/", // updated domain
    siteName: "Dr. Shaziya Waghoo",
    images: [
      {
        url: "/img/homeBanner.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Shaziya Waghoo - Best Doctor in Kurla Mumbai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};



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
        {/* <Artical /> */}
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
        {/* <MobileArtical/> */}
        <MobileWatchVideo />
      </div>
    </>
  );
}
