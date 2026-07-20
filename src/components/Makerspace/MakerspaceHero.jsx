import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaMicrochip,
  FaCube,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

import "./MakerspaceHero.css";

export default function MakerspaceHero() {
  return (
    <section className="makerspaceHero">

      <div className="heroBlur blur1"></div>
      <div className="heroBlur blur2"></div>

      <div className="makerspaceContainer">

        {/* LEFT */}

        <motion.div
          className="heroContent"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="heroBadge">
            🚀 Future Starts Here
          </span>

          <h1>
            Build.
            <br />

            Create.
            <br />

            <span>Innovate.</span>
          </h1>

          <p>
            Discover a collaborative makerspace where creativity meets
            technology. Build robots, prototype ideas, explore AI,
            electronics, IoT, 3D printing and turn imagination into
            real-world innovation.
          </p>

          <div className="heroButtons">

            <Link
              to="/events"
              className="primaryHeroBtn"
            >
              Explore Labs
              <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="secondaryHeroBtn"
            >
              Book A Visit
            </Link>

          </div>

          <div className="statsRow">

            <div className="statCard">
              <h2>500+</h2>
              <span>Students Trained</span>
            </div>

            <div className="statCard">
              <h2>60+</h2>
              <span>Projects Built</span>
            </div>

            <div className="statCard">
              <h2>15+</h2>
              <span>Advanced Machines</span>
            </div>

            <div className="statCard">
              <h2>100%</h2>
              <span>Hands-on Learning</span>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="heroVisual"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="imageCard">

            <img
              src="https://images.unsplash.com/photo-1581092921461-eab10380be6d?w=1200"
              alt="Yuvalay Makerspace"
            />

          </div>

          <div className="floating robotics">
            <FaRobot />
            <div>
              <strong>Robotics</strong>
              <small>Build Intelligent Machines</small>
            </div>
          </div>

          <div className="floating electronics">
            <FaMicrochip />
            <div>
              <strong>Electronics</strong>
              <small>Arduino • ESP32 • IoT</small>
            </div>
          </div>

          <div className="floating printing">
            <FaCube />
            <div>
              <strong>3D Printing</strong>
              <small>Rapid Prototyping</small>
            </div>
          </div>

          <div className="floating innovation">
            <FaBolt />
            <div>
              <strong>Innovation</strong>
              <small>Create Future Solutions</small>
            </div>
          </div>

        </motion.div>

      </div>

      <div className="scrollIndicator">

        <span>Scroll</span>

        <div className="scrollMouse"></div>

      </div>

    </section>
  );
}