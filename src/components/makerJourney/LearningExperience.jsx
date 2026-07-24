import "./experience.css";
import {
  FiUsers,
  FiTool,
  FiCpu,
  FiZap,
} from "react-icons/fi";

const learning = [
  {
    icon: <FiUsers />,
    title: "Mentor-Led Learning",
    desc: "Learn directly from experienced mentors through practical guidance."
  },
  {
    icon: <FiTool />,
    title: "Hands-on Building",
    desc: "Prototype, experiment and create instead of only studying theory."
  },
  {
    icon: <FiCpu />,
    title: "Modern Technologies",
    desc: "Explore AI, Robotics, IoT, Electronics and Digital Fabrication."
  },
  {
    icon: <FiZap />,
    title: "Innovation Challenges",
    desc: "Solve real-world problems through teamwork, competitions and hackathons."
  }
];

export default function LearningExperience() {
  return (
    <section className="learning">

      <div className="learning-container">

        <span className="section-label">
          Learning Experience
        </span>

        <h2>
          Learn By Building
        </h2>

        <p className="learning-subtitle">
          Every activity at Yuvalay is designed to encourage creativity,
          collaboration and hands-on innovation.
        </p>

        <div className="learning-grid">

          {learning.map((item, index) => (

            <div className="learning-card" key={index}>

              <div className="learning-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}