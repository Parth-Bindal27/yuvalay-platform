import { motion } from "framer-motion";
import {
  FiShield,
  FiCheckCircle,
  FiAlertTriangle,
  FiUsers,
  FiTool,
  FiBookOpen,
} from "react-icons/fi";

const safetyRules = [
  {
    icon: <FiShield />,
    title: "Wear Safety Gear",
    description:
      "Always wear the required protective equipment while operating machines and tools.",
  },
  {
    icon: <FiTool />,
    title: "Use Equipment Properly",
    description:
      "Operate machines only after receiving proper training from mentors or lab instructors.",
  },
  {
    icon: <FiUsers />,
    title: "Respect Shared Spaces",
    description:
      "Keep workstations clean and organized so everyone can collaborate safely.",
  },
  {
    icon: <FiAlertTriangle />,
    title: "Report Hazards",
    description:
      "Immediately inform staff about damaged equipment, spills, or unsafe conditions.",
  },
  {
    icon: <FiBookOpen />,
    title: "Follow Lab Guidelines",
    description:
      "Read and understand all makerspace rules before starting any project.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Innovation with Responsibility",
    description:
      "Build responsibly while respecting safety, ethics, and the environment.",
  },
];

export default function SafetySection() {
  return (
    <section className="safetySection">

      <div className="sectionHeading">

        <span>LAB SAFETY</span>

        <h2>
          Safety First,
          <span> Innovation Always</span>
        </h2>

        <p>
          A safe makerspace encourages creativity, collaboration,
          and confident experimentation. Please follow these
          essential safety practices during every visit.
        </p>

      </div>

      <div className="safetyGrid">

        {safetyRules.map((rule, index) => (

          <motion.div
            key={rule.title}
            className="safetyCard"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
          >

            <div className="safetyIcon">
              {rule.icon}
            </div>

            <h3>{rule.title}</h3>

            <p>{rule.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}