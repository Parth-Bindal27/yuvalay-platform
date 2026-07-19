import { motion } from "framer-motion";
import "./ThankYouBanner.css";

export default function ThankYouBanner() {
  return (
    <section className="thank-you">

      <motion.div
        className="thank-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <span className="section-tag">
          Thank You
        </span>

        <h2>
          Together We Can Build
          A Better Future
        </h2>

        <p>
          Every contribution, whether big or small,
          helps students discover, innovate and create
          solutions that positively impact society.
        </p>

        <div className="thank-stats">

          <div>
            <h3>25K+</h3>
            <span>Students Impacted</span>
          </div>

          <div>
            <h3>100+</h3>
            <span>Innovation Programs</span>
          </div>

          <div>
            <h3>500+</h3>
            <span>Projects Built</span>
          </div>

        </div>

        <div className="thank-buttons">

          <a href="#donate-form" className="primary-btn">
            Donate Today
          </a>

          <a href="/contact" className="secondary-btn">
            Become a Partner
          </a>

        </div>

      </motion.div>

    </section>
  );
}