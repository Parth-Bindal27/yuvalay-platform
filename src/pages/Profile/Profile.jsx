import ProfileHero from "../../components/Profile/ProfileHero/ProfileHero";
import QuickOverview from "../../components/Profile/QuickOverview/QuickOverview";
import PersonalInfo from "../../components/Profile/PersonalInfo/PersonalInfo";
import AcademicInfo from "../../components/Profile/AcademicInfo/AcademicInfo";
import AboutSection from "../../components/Profile/AboutSection/AboutSection";
import SkillsSection from "../../components/Profile/SkillsSection/SkillsSection";
import SocialLinks from "../../components/Profile/SocialLinks/SocialLinks";

export default function Profile() {
  return (
    <main className="profile-page">
      <ProfileHero />
      <QuickOverview />
      <PersonalInfo />
      <AcademicInfo />
      <AboutSection />
      <SkillsSection />
      <SocialLinks />
    </main>
  );
}