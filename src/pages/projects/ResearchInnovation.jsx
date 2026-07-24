import Intro from "../../components/projects/researchInnovation/Intro";
import ResearchAreas from "../../components/projects/researchInnovation/ResearchAreas";
import Publications from "../../components/projects/researchInnovation/Publications";
import Patents from "../../components/projects/researchInnovation/Patents";
import CTA from "../../components/projects/researchInnovation/CTA";

export default function ResearchInnovation() {
  return (
    <>
      <Intro />
      <ResearchAreas />
      <Publications />
      <Patents />
      <CTA />
    </>
  );
}