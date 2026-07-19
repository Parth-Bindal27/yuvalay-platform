import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./ProgramsHero.css";

export default function ProgramsHero() {
  return (
    <section className="programs-hero">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="programs-container">
        <motion.p
          className="hero-tag"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          viewport={{ once: true }}
        >
          ✨ Learn • Build • Innovate
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          Programs That Turn
          <span> Ideas Into Impact.</span>
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >
          Explore hands-on innovation programs designed to inspire creativity,
          technology, entrepreneurship, sustainability, and real-world problem
          solving.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .9 }}
          viewport={{ once: true }}
        >
          <button className="primary-btn">
            Explore Programs
            <FaArrowRight />
          </button>

          <button className="secondary-btn">
            Register Now
          </button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
        >
          <div>
            <h2>5000+</h2>
            <span>Learners</span>
          </div>

          <div>
            <h2>120+</h2>
            <span>Workshops</span>
          </div>

          <div>
            <h2>50+</h2>
            <span>Schools</span>
          </div>

          <div>
            <h2>100+</h2>
            <span>Projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}