import "./DashboardHero.css";
import {
  FaCalendarAlt,
  FaBell,
  FaArrowRight,
  FaCalendarCheck,
  FaCertificate,
  FaLaptopCode,
  FaHandsHelping,
} from "react-icons/fa";

export default function DashboardHero({ currentUser }) {
  const hour = new Date().getHours();

  let greeting = "Good Evening";
  let emoji = "🌙";

  if (hour < 12) {
    greeting = "Good Morning";
    emoji = "☀️";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
    emoji = "🌤️";
  }

  return (
    <section className="dashboardHero">

      <div className="heroContent">

        <span className="heroTag">
          Dashboard
        </span>

        <h1>
          {greeting}, {currentUser?.displayName || "Innovator"}!
          <span>{emoji}</span>
        </h1>

        <h3>
          Welcome back to Yuvalay Makerspace
        </h3>

        <p>
          Keep learning, keep building and keep inspiring.
          Every activity you complete contributes towards
          your innovation journey.
        </p>

        <div className="heroMeta">

          <div className="metaCard">
            <FaCalendarAlt />
            <span>Member Since July 2026</span>
          </div>

          <div className="metaCard">
            <FaBell />
            <span>2 Upcoming Events</span>
          </div>

        </div>

      </div>

      <div className="heroSnapshot">

        <h3>✨ Journey Snapshot</h3>

        <div className="snapshotGrid">

          <div className="snapshotItem">
            <FaCalendarCheck />
            <div>
              <span>Events</span>
              <h4>18</h4>
            </div>
          </div>

          <div className="snapshotItem">
            <FaCertificate />
            <div>
              <span>Certificates</span>
              <h4>12</h4>
            </div>
          </div>

          <div className="snapshotItem">
            <FaLaptopCode />
            <div>
              <span>Projects</span>
              <h4>7</h4>
            </div>
          </div>

          <div className="snapshotItem">
            <FaHandsHelping />
            <div>
              <span>Volunteer</span>
              <h4>145 hrs</h4>
            </div>
          </div>

        </div>

        <div className="nextEvent">

          <small>Next Event</small>

          <h4>AI Bootcamp</h4>

          <p>24 July 2026 • 10:00 AM</p>

          <button>
            View Event
            <FaArrowRight />
          </button>

        </div>

      </div>

    </section>
  );
}