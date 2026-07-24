import Intro from "../../components/projects/allProjects/Intro";
import Filters from "../../components/projects/allProjects/Filters";
import ProjectGrid from "../../components/projects/allProjects/ProjectGrid";
import FeaturedProject from "../../components/projects/allProjects/FeaturedProject";
import CTA from "../../components/projects/allProjects/CTA";

export default function AllProjects() {
  return (
    <>
      <Intro />
      <Filters />
      <ProjectGrid />
      <FeaturedProject />
      <CTA />
    </>
  );
}