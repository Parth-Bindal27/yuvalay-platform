import MakerspaceHero from "../../components/Makerspace/MakerspaceHero";
import ExploreLabs from "../../components/Makerspace/ExploreLabs";
import EquipmentShowcase from "../../components/Makerspace/EquipmentShowcase";
import ProjectShowcase from "../../components/Makerspace/ProjectShowcase";
import InnovationJourney from "../../components/Makerspace/InnovationJourney";
import MembershipPlans from "../../components/Makerspace/MembershipPlans";
import SafetyGuidelines from "../../components/Makerspace/SafetyGuidelines";
import MakerspaceFAQ from "../../components/Makerspace/MakerspaceFAQ";
import MakerspaceCTA from "../../components/Makerspace/MakerspaceCTA";

export default function Makerspace() {
  return (
    <>
      <MakerspaceHero />

      <ExploreLabs />

      <EquipmentShowcase />

      <ProjectShowcase />

      <InnovationJourney />

      <MembershipPlans />

      <SafetyGuidelines />

      <MakerspaceFAQ />

      <MakerspaceCTA />

    </>
  );
}