import "./recognition.css";
import {
  FiAward,
  FiCode,
  FiUsers,
  FiBookOpen,
  FiGlobe,
} from "react-icons/fi";

const recognition = [
  {
    icon: <FiAward />,
    title: "Hackathons",
    desc: "Innovative ideas presented at national and local competitions.",
  },
  {
    icon: <FiCode />,
    title: "Projects",
    desc: "Student-built solutions addressing real-world challenges.",
  },
  {
    icon: <FiBookOpen />,
    title: "Workshops",
    desc: "Hands-on learning experiences conducted throughout the year.",
  },
  {
    icon: <FiUsers />,
    title: "Community",
    desc: "Collaborations with schools, colleges and organizations.",
  },
  {
    icon: <FiGlobe />,
    title: "Innovation",
    desc: "Encouraging technology-driven thinking for future changemakers.",
  },
];

export default function Recognition() {
  return (
    <section className="recognition">

      <div className="recognition-container">

        <span className="section-label">
          Recognition
        </span>

        <h2>
          Celebrating Every Achievement
        </h2>

        <p className="recognition-subtitle">
          Every milestone reflects the creativity, collaboration and dedication
          of our growing maker community.
        </p>

        <div className="recognition-grid">

          {recognition.map((item, index) => (

            <div className="recognition-card" key={index}>

              <div className="recognition-icon">
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