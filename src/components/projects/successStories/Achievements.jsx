import "./achievements.css";
import {
  FiAward,
  FiUsers,
  FiBriefcase,
  FiTrendingUp
} from "react-icons/fi";

const achievements = [
  {
    icon: <FiAward />,
    value: "120+",
    label: "Awards Won"
  },
  {
    icon: <FiUsers />,
    value: "500+",
    label: "Students Trained"
  },
  {
    icon: <FiBriefcase />,
    value: "30+",
    label: "Startups Supported"
  },
  {
    icon: <FiTrendingUp />,
    value: "1000+",
    label: "Projects Completed"
  }
];

export default function Achievements() {
  return (
    <section className="achievements">

      <div className="achievementsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Our Impact
          </span>

          <h2>Achievements at a Glance</h2>

        </div>

        <div className="achievementGrid">

          {achievements.map((item, index) => (

            <div className="achievementCard" key={index}>

              <div className="achievementIcon">
                {item.icon}
              </div>

              <h3>{item.value}</h3>

              <p>{item.label}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}