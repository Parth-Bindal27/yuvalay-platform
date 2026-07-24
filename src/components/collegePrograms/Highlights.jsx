import "./highlights.css";
import {
  FiCpu,
  FiCode,
  FiBriefcase,
  FiAward,
} from "react-icons/fi";

const highlights = [
  {
    icon: <FiCpu />,
    title: "AI & Robotics",
    description:
      "Practical learning through emerging technologies.",
  },
  {
    icon: <FiCode />,
    title: "Project Development",
    description:
      "Build real-world projects with expert guidance.",
  },
  {
    icon: <FiBriefcase />,
    title: "Industry Exposure",
    description:
      "Learn from professionals and innovation leaders.",
  },
  {
    icon: <FiAward />,
    title: "Hackathons",
    description:
      "Participate in competitions and innovation challenges.",
  },
];

export default function Highlights() {
  return (
    <section className="collegeHighlights">

      <div className="schoolHighlightsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Program Highlights
          </span>

          <h2>Opportunities for Every Student</h2>

        </div>

        <div className="highlightGrid">

          {highlights.map((item, index) => (
            <div
              className="highlightCard"
              key={index}
            >
              <div className="highlightIcon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}