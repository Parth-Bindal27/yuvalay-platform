import "./benefits.css";
import {
  FiAward,
  FiUsers,
  FiTarget,
  FiTrendingUp,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";

const benefits = [
  {
    icon: <FiZap />,
    title: "Creative Thinking",
  },
  {
    icon: <FiTarget />,
    title: "Problem Solving",
  },
  {
    icon: <FiUsers />,
    title: "Team Collaboration",
  },
  {
    icon: <FiTrendingUp />,
    title: "Future Skills",
  },
  {
    icon: <FiAward />,
    title: "Hands-on Learning",
  },
  {
    icon: <FiCheckCircle />,
    title: "Confidence Building",
  },
];

export default function Benefits() {
  return (
    <section className="schoolBenefits">

      <div className="schoolBenefitsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Learning Outcomes
          </span>

          <h2>What Students Gain</h2>

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