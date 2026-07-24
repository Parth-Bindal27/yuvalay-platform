import "./benefits.css";
import {
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiCheckCircle,
  FiBriefcase,
  FiCode,
} from "react-icons/fi";

const benefits = [
  {
    icon: <FiCode />,
    title: "Technical Skills",
  },
  {
    icon: <FiBriefcase />,
    title: "Industry Readiness",
  },
  {
    icon: <FiUsers />,
    title: "Networking",
  },
  {
    icon: <FiTrendingUp />,
    title: "Career Growth",
  },
  {
    icon: <FiAward />,
    title: "Certifications",
  },
  {
    icon: <FiCheckCircle />,
    title: "Innovation Mindset",
  },
];

export default function Benefits() {
  return (
    <section className="schoolBenefits">

      <div className="schoolBenefitsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Student Benefits
          </span>

          <h2>What You'll Achieve</h2>

        </div>

        <div className="benefitsGrid">

          {benefits.map((item, index) => (
            <div
              className="benefitItem"
              key={index}
            >
              <div className="benefitIcon">
                {item.icon}
              </div>

              <span>{item.title}</span>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}