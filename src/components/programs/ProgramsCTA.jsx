import { motion } from "framer-motion";
import { FaArrowRight, FaRocket } from "react-icons/fa";

import "./ProgramsCTA.css";

export default function ProgramsCTA() {
  return (
    <section className="programs-cta">

      <div className="cta-glow glow1"></div>
      <div className="cta-glow glow2"></div>

      <motion.div
        className="cta-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>START YOUR JOURNEY</span>

        <h2>
          Ready to Build
          <br />
          Something Extraordinary?
        </h2>

        <p>
          Join Yuvalay's community of innovators, creators and future
          leaders. Learn by building, collaborate with experts and turn
          your ideas into real impact.
        </p>

        <div className="cta-buttons">

          <button className="primary-btn">
            Join Programs
            <FaArrowRight />
          </button>

          <button className="secondary-btn">
            Explore Innovation Labs
            <FaRocket />
          </button>

        </div>

      </motion.div>

    </section>
  );
}