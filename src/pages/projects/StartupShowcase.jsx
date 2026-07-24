import Intro from "../../components/projects/startupShowcase/Intro";
import StartupGrid from "../../components/projects/startupShowcase/StartupGrid";
import FounderStories from "../../components/projects/startupShowcase/FounderStories";
import Milestones from "../../components/projects/startupShowcase/Milestones";
import CTA from "../../components/projects/startupShowcase/CTA";

export default function StartupShowcase() {
  return (
    <>
      <Intro />
      <StartupGrid />
      <FounderStories />
      <Milestones />
      <CTA />
    </>
  );
}