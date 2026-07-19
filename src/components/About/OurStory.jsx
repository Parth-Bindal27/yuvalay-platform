import "./OurStory.css";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBolt,
  FaBrain,
  FaLightbulb,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

const milestones = [
  {
    year: "The beginning",
    title: "A space for ideas to become real",
    description:
      "Yuvalay began with a simple belief: young people learn best when they can explore, build and experiment.",
    icon: FaLightbulb,
  },
  {
    year: "Hands-on learning",
    title: "Technology became a tool for expression",
    description:
      "Robotics, electronics, design and emerging technology turned curiosity into practical learning experiences.",
    icon: FaBolt,
  },
  {
    year: "Growing together",
    title: "A community of future creators",
    description:
      "Students, educators and mentors now collaborate to solve meaningful problems and share what they learn.",
    icon: FaUsers,
  },
];

export default function OurStory() {
  return (
    <section className="ourStory" id="story">
      <div className="storyGlow storyGlowOne" />
      <div className="storyGlow storyGlowTwo" />

      <div className="storyContainer">
        <motion.div
          className="storyIntro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <span className="storyEyebrow">OUR STORY</span>
          <h2>
            Where <span>curiosity</span> finds the tools to create.
          </h2>
          <p>
            Yuvalay is more than a makerspace. It is a welcoming environment
            where young minds discover confidence through making, learning and
            solving real-world challenges together.
          </p>
        </motion.div>

        <div className="storyLayout">
          <div className="storyTimeline">
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  className="storyMilestone"
                  key={item.title}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                >
                  <div className="milestoneMarker">
                    <Icon />
                  </div>

                  <div className="milestoneContent">
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.aside
            className="storyFeature"
            initial={{ opacity: 0, scale: 0.94, y: 22 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="featureOrbit orbitOne" />
            <div className="featureOrbit orbitTwo" />

            <div className="featureIcon">
              <FaBrain />
            </div>

            <span className="featureLabel">THE YUVALAY WAY</span>
            <h3>Imagine. Make. Improve. Repeat.</h3>
            <p>
              Every project starts with a question and becomes an opportunity
              to think independently, work together and build with purpose.
            </p>

            <div className="featurePillRow">
              <span>Explore</span>
              <span>Prototype</span>
              <span>Impact</span>
            </div>

            <a className="storyLink" href="#contact">
              Discover Yuvalay <FaArrowRight />
            </a>

            <div className="featureMiniCard">
              <FaRocket />
              <div>
                <strong>Built for the future</strong>
                <small>Creative confidence starts here.</small>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
