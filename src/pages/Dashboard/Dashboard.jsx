import "./Dashboard.css";

import { useAuth } from "../../context/AuthContext";

import DashboardHero from "../../components/dashboard/DashboardHero/DashboardHero";
import OverviewStats from "../../components/dashboard/OverviewStats/OverviewStats";
import QuickActions from "../../components/dashboard/QuickActions/QuickActions";
import MyEvents from "../../components/dashboard/MyEvents/MyEvents";
import VolunteerHistory from "../../components/dashboard/VolunteerHistory/VolunteerHistory";
import Projects from "../../components/dashboard/Projects/Projects";
import Certificates from "../../components/dashboard/Certificates/Certificates";
import Workshops from "../../components/dashboard/Workshops/Workshops";
import Badges from "../../components/dashboard/Badges/Badges";
import RecentActivity from "../../components/dashboard/RecentActivity/RecentActivity";
import InternshipHistory from "../../components/dashboard/InternshipHistory/Internship";
import Research from "../../components/dashboard/Research/Research";
import Achievements from "../../components/dashboard/Achievements/Achievements";




export default function Dashboard() {

  const { currentUser } = useAuth();

  return (

    <main className="dashboard">

      <DashboardHero
        currentUser={currentUser}
      />

      <OverviewStats />

      <QuickActions />

      <MyEvents />

      <VolunteerHistory />

      <Achievements />

      <Workshops />

      <Projects />

      <Research />

      <InternshipHistory />

      <Certificates />

      <Badges />

      <RecentActivity />

    </main>

  );

}