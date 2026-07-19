import LiveUpdatesBar from "../../components/home/LiveUpdatesBar";
import Hero from "../../components/home/Hero/Hero.jsx";
import FeaturedEvents from "../../components/home/FeaturedEvents";
import TrustedBy from "../../components/home/TrustedBy";
import AboutPreview from "../../components/home/AboutPreview";
import FeaturedPrograms from "../../components/home/FeaturedPrograms";
import InnovationLabs from "../../components/home/InnovationLabs";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import ImpactSection from "../../components/home/ImpactSection";
import GalleryPreview from "../../components/home/GalleryPreview";
import Testimonials from "../../components/home/Testimonials";
import Partners from "../../components/home/Partners";
import FinalCTA from "../../components/home/FinalCTA.jsx";

export default function Home() {
  return (
    <>
      <LiveUpdatesBar />
      <Hero />
      <FeaturedEvents />
      <TrustedBy />
      <AboutPreview />
      <FeaturedPrograms />
      <InnovationLabs />
      <WhyChooseUs />
      <ImpactSection />
      <GalleryPreview />
      <Testimonials />
      <Partners />
      <FinalCTA />
    </>
  );
}