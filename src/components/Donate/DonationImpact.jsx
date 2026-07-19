import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaLightbulb,
  FaHandsHelping,
} from "react-icons/fa";

import "./DonationImpact.css";

const impacts = [
  {
    icon: <FaUserGraduate />,
    title: "Student Scholarships",
    description:
      "Support deserving students with access to innovation programs and workshops.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Technology & Equipment",
    description:
      "Help provide robotics kits, electronics, 3D printing and maker tools.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovation Programs",
    description:
      "Enable hackathons, design thinking workshops and startup incubation.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Outreach",
    description:
      "Expand STEM education to schools and underserved communities.",
  },
];

export default function DonationImpact() {
  return (
    <section className="donation-impact" id="impact">

      <div className="impact-heading">

        <span className="section-tag">
          Your Impact
        </span>

        <h2>
          Every Contribution Creates
          Real Change
        </h2>

        <p>
          Your generosity directly supports innovation,
          education and opportunities for thousands of
          future changemakers.
        </p>

      </div>

      <div className="impact-cards">

        {impacts.map((item, index) => (

          <motion.div
            key={index}
            className="impact-box"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
          >

            <div className="impact-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}