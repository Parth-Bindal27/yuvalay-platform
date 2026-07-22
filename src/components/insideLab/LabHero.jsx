import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiPlay,
  FiCpu,
  FiBox,
  FiTool,
  FiZap,
} from "react-icons/fi";

export default function LabHero() {
  return (
    <section className="labHero">

      <div className="labBlur blurOne"></div>
      <div className="labBlur blurTwo"></div>

      <div className="labHeroContainer">

        {/* LEFT */}

        <motion.div
          className="labHeroContent"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="labBadge">
            EXPLORE THE MAKERSPACE
          </span>

          <h1>

            Where
            <span> Ideas </span>

            Become Reality.

          </h1>

          <p>

            Step inside Yuvalay Makerspace and discover an
            innovation ecosystem equipped with advanced
            fabrication tools, robotics, electronics,
            AI workstations and collaborative spaces that
            transform imagination into impactful solutions.

          </p>

          <div className="labButtons">

            <a
              href="#zones"
              className="primaryLabBtn"
            >
              Explore Lab

              <FiArrowRight />

            </a>

            <button className="secondaryLabBtn">

              <FiPlay />

              Watch Tour

            </button>

          </div>

          <div className="labHighlights">

            <div className="highlightCard">

              <h2>500+</h2>

              <span>Innovators</span>

            </div>

            <div className="highlightCard">

              <h2>150+</h2>

              <span>Projects Built</span>

            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="labHeroVisual"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <div className="heroImageCard">

            <img
              src="/insideLab/hero.jpg"
              alt="Yuvalay Makerspace"
            />

            <div className="heroOverlay">

              <span className="heroLabel">

                Innovation Starts Here

              </span>

              <h3>

                Yuvalay Makerspace

              </h3>

              <p>

                Design • Build • Prototype • Innovate

              </p>

            </div>

            {/* Feature Bar */}

            <div className="heroFeatureBar">

              <div className="featureItem">

                <FiCpu />

                <span>AI Lab</span>

              </div>

              <div className="featureItem">

                <FiBox />

                <span>3D Printing</span>

              </div>

              <div className="featureItem">

                <FiTool />

                <span>Workshop</span>

              </div>

              <div className="featureItem">

                <FiZap />

                <span>Electronics</span>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      <div className="scrollExplore">

        <span>Scroll</span>

        <div className="mouseScroll"></div>

      </div>

    </section>
  );
}