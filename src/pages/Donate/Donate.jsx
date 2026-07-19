import Navbar from "../../components/Navbar/Navbar";
import DonateHero from "../../components/Donate/DonateHero";
import DonationImpact from "../../components/Donate/DonationImpact";
import DonationForm from "../../components/Donate/DonationForm";
import DonationMethods from "../../components/Donate/DonationMethods";
import Transparency from "../../components/Donate/Transparency";
import ThankYouBanner from "../../components/Donate/ThankYouBanner";
import Footer from "../../components/Footer/Footer";

export default function Donate() {
  return (
    <>
      <Navbar />

      <DonateHero />

      <DonationImpact />

      <DonationForm />

      <DonationMethods />

      <Transparency />

      <ThankYouBanner />

      <Footer />
    </>
  );
}