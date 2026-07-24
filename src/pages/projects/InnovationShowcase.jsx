import Intro from "../../components/projects/innovationShowcase/Intro";
import FeaturedInnovations from "../../components/projects/innovationShowcase/FeaturedInnovations";
import InnovationGallery from "../../components/projects/innovationShowcase/InnovationGallery";
import InnovationProcess from "../../components/projects/innovationShowcase/InnovationProcess";
import CTA from "../../components/projects/innovationShowcase/CTA";

export default function InnovationShowcase() {
  return (
    <>
      <Intro />
      <FeaturedInnovations />
      <InnovationGallery />
      <InnovationProcess />
      <CTA />
    </>
  );
}