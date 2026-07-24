import "./benefits.css";
import {
  FiAward,
  FiUsers,
  FiZap,
  FiCheckCircle,
  FiTarget,
  FiBookOpen,
} from "react-icons/fi";

const benefits = [
  {
    icon: <FiBookOpen />,
    title: "Practical Learning",
  },
  {
    icon: <FiZap />,
    title: "Hands-on Experience",
  },
  {
    icon: <FiUsers />,
    title: "Expert Mentors",
  },
  {
    icon: <FiTarget />,
    title: "Industry Skills",
  },
  {
    icon: <FiAward />,
    title: "Certificates",
  },
  {
    icon: <FiCheckCircle />,
    title: "Career Growth",
  },
];

export default function Benefits() {
  return (
    <section className="workshopBenefits">

      <div className="workshopBenefitsContainer">

        <div className="sectionHeading">

          <span className="section-label">
            Benefits
          </span>

          <h2>Why Attend Our Workshops?</h2>

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