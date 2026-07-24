import "./highlights.css";
import {
  FiCpu,
  FiCode,
  FiBox,
  FiZap,
} from "react-icons/fi";

const highlights = [
  {
    icon: <FiCpu />,
    title: "Robotics",
    description:
      "Learn robotics through practical building and programming activities.",
  },
  {
    icon: <FiCode />,
    title: "Coding & AI",
    description:
      "Explore programming fundamentals and introductory Artificial Intelligence.",
  },
  {
    icon: <FiBox />,
    title: "STEM Learning",
    description:
      "Interactive science, technology, engineering and mathematics experiences.",
  },
  {
    icon: <FiZap />,
    title: "Innovation",
    description:
      "Encourage creativity, teamwork and problem-solving through real projects.",
  },
];

export default function Highlights() {
  return (
    <section className="schoolHighlights">

      <div className="schoolHighlightsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Program Highlights
          </span>

          <h2>
            What Students Explore
          </h2>

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