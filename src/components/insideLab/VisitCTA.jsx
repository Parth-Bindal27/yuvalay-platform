import { motion } from "framer-motion";
import {
  FiCalendar,
  FiPhone,
  FiArrowRight,
} from "react-icons/fi";

export default function VisitCTA() {
  return (
    <section className="visitCTA">

      <div className="ctaGlow ctaGlow1"></div>
      <div className="ctaGlow ctaGlow2"></div>

      <motion.div
        className="ctaContainer"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7 }}
      >

        <span className="ctaBadge">

          VISIT THE MAKERSPACE

        </span>

        <h2>

          Bring Your Ideas to Life.

          <br />

          Start Building Today.

        </h2>

        <p>

          Whether you're a student, educator, innovator, or startup,
          Yuvalay Makerspace provides the tools, mentorship, and
          collaborative environment to transform ideas into reality.

        </p>

        <div className="ctaButtons">

          <button className="primaryCTA">

            <FiCalendar />

            Schedule a Visit

          </button>

          <button className="secondaryCTA">

            <FiPhone />

            Contact Us

          </button>

        </div>

        <div className="ctaFeatures">

          <div>

            ✓ Guided Tour

          </div>

          <div>

            ✓ Expert Mentorship

          </div>

          <div>

            ✓ Hands-on Learning

          </div>

        </div>

      </motion.div>

    </section>
  );
}