import "./highlights.css";
import {
  FiUsers,
  FiTrendingUp,
  FiCompass,
  FiBriefcase,
} from "react-icons/fi";

const highlights = [
  {
    icon: <FiUsers />,
    title: "Mentorship",
    description:
      "Learn directly from experienced mentors and industry experts.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Incubation",
    description:
      "Support to validate ideas and build sustainable startups.",
  },
  {
    icon: <FiCompass />,
    title: "Innovation",
    description:
      "Transform creative ideas into practical business solutions.",
  },
  {
    icon: <FiBriefcase />,
    title: "Networking",
    description:
      "Connect with entrepreneurs, investors and ecosystem partners.",
  },
];

export default function Highlights() {
  return (
    <section className="startupHighlights">

      <div className="startupHighlightsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Program Highlights
          </span>

          <h2>Everything You Need to Grow</h2>

        </div>

        <div className="highlightGrid">

          {highlights.map((item, index) => (

            <div className="highlightCard" key={index}>

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