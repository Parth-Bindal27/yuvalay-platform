import { motion } from "framer-motion";
import "./DonateHero.css";

export default function DonateHero() {
  return (
    <section className="donate-hero">

      <div className="donate-bg"></div>

      <motion.div
        className="donate-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >

        <span className="section-tag">
          Support Innovation
        </span>

        <h1>
          Empower the Next
          Generation of
          Innovators
        </h1>

        <p>
          Every contribution helps students, makers,
          educators and innovators access cutting-edge
          technology, mentorship and opportunities to
          build impactful solutions.
        </p>

        <div className="donate-buttons">

          <a href="#donate-form" className="primary-btn">
            Donate Now
          </a>

          <a href="#impact" className="secondary-btn">
            See Your Impact
          </a>

        </div>

      </motion.div>

    </section>
  );
}