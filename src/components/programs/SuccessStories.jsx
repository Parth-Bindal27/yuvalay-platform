import { motion } from "framer-motion";
import {
  FaAward,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

import "./SuccessStories.css";

const stories = [
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43?w=900&q=80",
    name: "Aarav Sharma",
    role: "Student Innovator",
    achievement: "National Innovation Challenge Winner",
    quote:
      "Yuvalay transformed my curiosity into confidence. The mentorship and hands-on experience helped me build solutions that created real impact.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=80",
    name: "Priya Patel",
    role: "Young Entrepreneur",
    achievement: "Startup Incubation Program",
    quote:
      "From idea validation to pitching investors, Yuvalay supported every step of my entrepreneurial journey.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80",
    name: "Rohan Mehta",
    role: "Community Leader",
    achievement: "Youth Leadership Fellow",
    quote:
      "The projects I built at Yuvalay directly impacted my community and gave me the confidence to lead change.",
  },
];

export default function SuccessStories() {
  return (
    <section className="success-stories">

      <motion.div
        className="stories-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>SUCCESS STORIES</span>

        <h2>
          Real People.
          <br />
          Real Impact.
        </h2>

        <p>
          Every learner carries a unique story of innovation,
          growth and transformation.
        </p>

      </motion.div>

      <div className="stories-container">

        {stories.map((story, index) => (

          <motion.div
            key={index}
            className="story-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .6,
              delay: index * .12,
            }}
            viewport={{ once: true }}
          >

            <div className="story-image">

              <img
                src={story.image}
                alt={story.name}
              />

            </div>

            <div className="story-content">

              <FaQuoteLeft className="quote-icon" />

              <p className="story-quote">
                {story.quote}
              </p>

              <h3>{story.name}</h3>

              <h4>{story.role}</h4>

              <div className="achievement">

                <FaAward />

                <span>{story.achievement}</span>

              </div>

              <button>

                Read Story

                <FaArrowRight />

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}