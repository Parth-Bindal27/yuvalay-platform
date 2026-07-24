import Hero from "../../components/makerJourney/Hero";
import JourneyTimeline from "../../components/makerJourney/JourneyTimeline";
import LearningExperience from "../../components/makerJourney/LearningExperience";
import Technologies from "../../components/makerJourney/Technologies";
import CTA from "../../components/makerJourney/CTA";

export default function MakerJourney() {
    return (
        <>
            <Hero />
            <JourneyTimeline />
            <LearningExperience />
            <Technologies />
            <CTA />
        </>
    );
}