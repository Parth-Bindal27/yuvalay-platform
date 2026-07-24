import "./benefits.css";
import {
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiCheckCircle,
  FiTarget,
  FiBriefcase,
} from "react-icons/fi";

const benefits = [
  {
    icon: <FiTarget />,
    title: "Business Strategy",
  },
  {
    icon: <FiBriefcase />,
    title: "Startup Guidance",
  },
  {
    icon: <FiUsers />,
    title: "Expert Mentors",
  },
  {
    icon: <FiTrendingUp />,
    title: "Growth Support",
  },
  {
    icon: <FiAward />,
    title: "Innovation Culture",
  },
  {
    icon: <FiCheckCircle />,
    title: "Networking",
  },
];

export default function Benefits() {
  return (
    <section className="startupBenefits">

      <div className="startupBenefitsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Benefits
          </span>

          <h2>Why Join Our Startup Program?</h2>

        </div>

        <div className="benefitsGrid">

          {benefits.map((item, index) => (

            <div className="benefitItem" key={index}>

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