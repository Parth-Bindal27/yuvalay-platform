import { motion } from "framer-motion";
import {
  FaHardHat,
  FaFireExtinguisher,
  FaUserShield,
  FaTools,
  FaHandsWash,
  FaFirstAid,
} from "react-icons/fa";

import "./SafetyGuidelines.css";

const safety = [
  {
    icon: <FaHardHat />,
    title: "Safety Equipment",
    description:
      "Protective goggles, gloves and safety gear are provided whenever required.",
  },
  {
    icon: <FaFireExtinguisher />,
    title: "Emergency Ready",
    description:
      "Fire safety systems and emergency procedures are always in place.",
  },
  {
    icon: <FaUserShield />,
    title: "Expert Supervision",
    description:
      "Experienced mentors supervise every workshop and lab session.",
  },
  {
    icon: <FaTools />,
    title: "Tool Training",
    description:
      "Members receive proper equipment training before using advanced machines.",
  },
  {
    icon: <FaHandsWash />,
    title: "Clean Workspace",
    description:
      "Maintain an organized and clean environment for safe collaboration.",
  },
  {
    icon: <FaFirstAid />,
    title: "First Aid Support",
    description:
      "Basic first-aid facilities are readily available inside the makerspace.",
  },
];

export default function SafetyGuidelines() {
  return (
    <section className="safetySection">

      <div className="safetyHeading">

        <span className="section-tag">
          Safety First
        </span>

        <h2>
          Learn, Build & Innovate Safely
        </h2>

        <p>
          Innovation flourishes in an environment where safety,
          responsibility and collaboration are equally valued.
        </p>

      </div>

      <div className="safetyGrid">

        {safety.map((item, index) => (

          <motion.div
            key={index}
            className="safetyCard"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: index * .08,
            }}
            viewport={{ once: true }}
          >

            <div className="safetyIcon">
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