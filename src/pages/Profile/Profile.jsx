import ProfileHero from "../../components/profile/ProfileHero/ProfileHero";
import QuickOverview from "../../components/profile/QuickOverview/QuickOverview";
import PersonalInfo from "../../components/profile/PersonalInfo/PersonalInfo";
import AcademicInfo from "../../components/profile/AcademicInfo/AcademicInfo";
import AboutSection from "../../components/profile/AboutSection/AboutSection";
import SkillsSection from "../../components/profile/SkillsSection/SkillsSection";
import SocialLinks from "../../components/profile/SocialLinks/SocialLinks";

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