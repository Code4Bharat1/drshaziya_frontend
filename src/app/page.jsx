
import BookAppointment from "@/components/About us/bookapoinment";
import Artical from "@/components/Homepage/Artcal";
import Consult from "@/components/Homepage/Consult";
import Contact from "@/components/Homepage/Contact";
import Demystifying from "@/components/Homepage/Demystifying";
import MissionVission from "@/components/Homepage/MissionVission";
import OfferExpertise from "@/components/Homepage/OfferExpertise";
import OurImpact from "@/components/Homepage/OurImpact";
import Restoringhealth from "@/components/Homepage/Restoringhealth";
import Review from "@/components/Homepage/Review";

import Seasoned from "@/components/Homepage/Seasoned";
import SurgicalExcellence from "@/components/Homepage/SurgicalExcellence";
import WatchVedio from "@/components/Homepage/WatchVedio";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import Image from "next/image";

export default function Home() {
  return (
<>
<WhatsAppButton/>
<SurgicalExcellence/>
<Seasoned/>
<OurImpact/>
<OfferExpertise/>
<Restoringhealth/>
<MissionVission/>
<Review/>
<Contact/>
<Demystifying/>
<Consult/>
<WatchVedio/>
<Artical/>
<BookAppointment/>
</>
  );
}
