import "./AboutHero.css";
import { motion } from "framer-motion";
import Counter from "./Counter";

import {
  FaArrowRight,
  FaPlay,
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaMicrochip,
  FaChevronDown,
} from "react-icons/fa";

const stats = [
  {
    number: 10000,
    suffix: "+",
    title: "Young Minds Empowered",
  },
  {
    number: 500,
    suffix: "+",
    title: "Innovation Projects",
  },
  {
    number: 250,
    suffix: "+",
    title: "Hands-on Workshops",
  },
  {
    number: 35,
    suffix: "+",
    title: "Industry Partners",
  },
];

export default function AboutHero() {
  return (
    <section className="aboutHero">

      <div className="heroBlur blur1"></div>
      <div className="heroBlur blur2"></div>

      <div className="aboutContainer">

        {/* LEFT */}

        <motion.div
          className="heroContent"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="heroBadge">
            ABOUT YUVALAY MAKERSPACE
          </div>

          <h1>
            Building
            <span> Future Innovators </span>
            Through Hands-On Learning
          </h1>

          <p>
            Yuvalay Makerspace is an innovation driven community where
            students, educators, startups and creators collaborate to build,
            experiment and transform ideas into impactful real-world
            solutions using modern technology.
          </p>

          <div className="heroButtons">

            <a href="#story" className="primaryHeroBtn">
              Explore Our Journey
              <FaArrowRight />
            </a>

            <button className="secondaryHeroBtn">
              <FaPlay />
              Watch Story
            </button>

          </div>

          <div className="trusted">

            <p>Trusted & Supported By</p>

            <div className="trustedLogos">

              <span>Schools</span>
              <span>Industries</span>
              <span>Colleges</span>
              <span>Communities</span>

            </div>

          </div>

          <div className="statsRow">

            {stats.map((item) => (

              <motion.div
                key={item.title}
                className="statCard"
                whileHover={{ y: -8 }}
              >

                <h2>

                  <Counter
                    end={item.number}
                    suffix={item.suffix}
                  />

                </h2>

                <span>{item.title}</span>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="heroVisual"
          initial={{ opacity:0, x:60 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:.9 }}
        >

          <div className="imageCard">

            {/* Replace with image */}

            <img
              src="/images/about/about-hero.jpg"
              alt="Yuvalay Makerspace"
            />

            <div className="imageOverlay">

              <div className="overlayBadge">

                <FaRocket />

                Innovation Starts Here

              </div>

              <h3>
                Create.
                Learn.
                Build.
                Inspire.
              </h3>

              <p>

                Empowering students through Robotics,
                AI, IoT, Electronics, Design Thinking,
                Entrepreneurship and Innovation.

              </p>

              <div className="heroTags">

                <span>AI</span>
                <span>IoT</span>
                <span>Robotics</span>
                <span>3D Printing</span>

              </div>

            </div>

          </div>

          {/* Floating Cards */}

          <motion.div
            className="floating robotics"
            animate={{ y:[0,-12,0] }}
            transition={{
              repeat:Infinity,
              duration:4
            }}
          >

            <FaMicrochip />

            <div>

              <strong>Robotics</strong>

              <small>Innovation Lab</small>

            </div>

          </motion.div>

          <motion.div
            className="floating printing"
            animate={{ y:[0,-14,0] }}
            transition={{
              repeat:Infinity,
              duration:5
            }}
          >

            <FaLightbulb />

            <div>

              <strong>3D Printing</strong>

              <small>Rapid Prototyping</small>

            </div>

          </motion.div>

          <motion.div
            className="floating innovation"
            animate={{ y:[0,-10,0] }}
            transition={{
              repeat:Infinity,
              duration:5.5
            }}
          >

            <FaRocket />

            <div>

              <strong>Innovation</strong>

              <small>Idea to Product</small>

            </div>

          </motion.div>

          <motion.div
            className="floating students"
            animate={{ y:[0,-12,0] }}
            transition={{
              repeat:Infinity,
              duration:6
            }}
          >

            <FaUsers />

            <div>

              <strong>10,000+</strong>

              <small>Future Innovators</small>

            </div>

          </motion.div>

        </motion.div>

      </div>

      <div className="scrollIndicator">

        <span>Scroll</span>

        <div className="scrollMouse"></div>

        <FaChevronDown />

      </div>

    </section>
  );
}