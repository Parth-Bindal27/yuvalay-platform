import LabHero from "../../components/insideLab/LabHero";
import InnovationZones from "../../components/insideLab/InnovationZones";
import EquipmentSection from "../../components/insideLab/EquipmentSection";
import JourneySection from "../../components/insideLab/JourneySection";
import GallerySection from "../../components/insideLab/GallerySection";
import SafetySection from "../../components/insideLab/SafetySection";
import VisitCTA from "../../components/insideLab/VisitCTA";
import ProjectsSection from "../../components/insideLab/ProjectsSection";
import "../../styles/insideLab.css";

export default function InsideLab() {
  return (
    <>
      <LabHero />

      <InnovationZones />

      <EquipmentSection />

      <JourneySection />

      <ProjectsSection />

      <GallerySection />

      <SafetySection />

      <VisitCTA />
    </>
  );
}