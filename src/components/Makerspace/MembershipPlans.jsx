import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaSchool,
  FaUniversity,
  FaRocket,
  FaCheck,
} from "react-icons/fa";
import "./MembershipPlans.css";

const plans = [
  {
    icon: <FaUserGraduate />,
    title: "Student Explorer",
    badge: "Most Popular",
    description:
      "Perfect for school and college students beginning their innovation journey.",
    features: [
      "Workshop Access",
      "Basic Lab Usage",
      "Mentor Guidance",
      "Community Events",
    ],
  },
  {
    icon: <FaSchool />,
    title: "School Program",
    badge: "For Schools",
    description:
      "Designed for educational institutions bringing students to the makerspace.",
    features: [
      "Group Workshops",
      "Lab Demonstrations",
      "Teacher Training",
      "Innovation Challenges",
    ],
  },
  {
    icon: <FaUniversity />,
    title: "College Innovator",
    badge: "Advanced",
    description:
      "For college teams building advanced projects, prototypes and research.",
    features: [
      "Advanced Equipment",
      "Project Mentorship",
      "Hackathons",
      "Prototype Support",
    ],
  },
  {
    icon: <FaRocket />,
    title: "Startup Builder",
    badge: "Incubation",
    description:
      "Transform innovative ideas into products with expert guidance.",
    features: [
      "Incubation Support",
      "Industry Mentors",
      "Networking",
      "Pitch Opportunities",
    ],
  },
];

export default function MembershipPlans() {
  return (
    <section className="membershipSection">

      <div className="membershipHeading">

        <span className="section-tag">
          Membership
        </span>

        <h2>
          Choose Your Innovation Journey
        </h2>

        <p>
          Whether you're a curious student, an educational institution,
          or an aspiring entrepreneur, there's a place for you at Yuvalay Makerspace.
        </p>

      </div>

      <div className="membershipGrid">

        {plans.map((plan, index) => (

          <motion.div
            key={index}
            className={`planCard ${index === 0 ? "featured" : ""}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >

            <span className="planBadge">
              {plan.badge}
            </span>

            <div className="planIcon">
              {plan.icon}
            </div>

            <h3>{plan.title}</h3>

            <p>{plan.description}</p>

            <ul>

              {plan.features.map((feature, i) => (

                <li key={i}>
                  <FaCheck />
                  {feature}
                </li>

              ))}

            </ul>

            <button>
              Join Now
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}