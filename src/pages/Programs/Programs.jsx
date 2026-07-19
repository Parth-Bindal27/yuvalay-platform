import ProgramsHero from "../../components/programs/ProgramsHero";
import FeaturedPrograms from "../../components/programs/FeaturedPrograms";
import LearningJourney from "../../components/programs/LearningJourney";
import Workshops from "../../components/programs/Workshops";
import InnovationLabs from "../../components/programs/InnovationLabs";
import CommunityPrograms from "../../components/programs/CommunityPrograms";
import ImpactCounter from "../../components/programs/ImpactCounter";
import SuccessStories from "../../components/programs/SuccessStories";
import UpcomingPrograms from "../../components/programs/UpcomingPrograms";
import ProgramsFAQ from "../../components/programs/ProgramsFAQ";
import ProgramsCTA from "../../components/programs/ProgramsCTA";

export default function Programs() {
  return (
    <>
      <ProgramsHero />
      <FeaturedPrograms />
      <LearningJourney />
      <Workshops />
      <InnovationLabs />
      <CommunityPrograms />
      <ImpactCounter />
      <SuccessStories />
      <UpcomingPrograms />
      <ProgramsFAQ />
      <ProgramsCTA />
    </>
  );
}