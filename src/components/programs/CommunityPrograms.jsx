import { motion } from "framer-motion";
import {
  FaUsers,
  FaSchool,
  FaTree,
  FaHandsHelping,
  FaGlobeAsia,
  FaHeart,
} from "react-icons/fa";

import "./CommunityPrograms.css";

const programs = [
  {
    icon: <FaSchool />,
    title: "School Innovation Program",
    badge: "Education",
    description:
      "Hands-on STEM workshops, innovation challenges and creativity sessions for school students.",
  },
  {
    icon: <FaTree />,
    title: "Environmental Initiatives",
    badge: "Sustainability",
    description:
      "Tree plantation drives, waste management awareness, eco-projects and green innovation campaigns.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Outreach",
    badge: "Social Impact",
    description:
      "Programs designed to solve local community challenges through technology and collaboration.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Rural Innovation",
    badge: "Development",
    description:
      "Supporting rural communities with affordable technologies, skill development and innovation.",
  },
  {
    icon: <FaUsers />,
    title: "Youth Leadership",
    badge: "Leadership",
    description:
      "Building confident leaders through teamwork, public speaking, volunteering and project execution.",
  },
  {
    icon: <FaHeart />,
    title: "Volunteer Network",
    badge: "Community",
    description:
      "Join passionate volunteers working together to create positive and lasting social impact.",
  },
];

export default function CommunityPrograms() {
  return (
    <section className="community-programs">

      <motion.div
        className="community-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>COMMUNITY PROGRAMS</span>

        <h2>
          Innovation Beyond
          <br />
          The Classroom
        </h2>

        <p>
          Yuvalay empowers communities through education, innovation,
          sustainability and collaborative action.
        </p>

      </motion.div>

      <div className="community-grid">

        {programs.map((item, index) => (

          <motion.div
            key={index}
            className="community-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
          >

            <div className="community-top">

              <div className="community-icon">
                {item.icon}
              </div>

              <span className="community-badge">
                {item.badge}
              </span>

            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button>
              Explore Program →
            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}