import { motion } from "framer-motion";
import "./MemoriesTimeline.css";

const timeline = [
  {
    year: "2023",
    title: "The Beginning",
    description:
      "Yuvalay Makerspace started its journey with a vision to inspire innovation among students.",
  },
  {
    year: "2024",
    title: "Growing Community",
    description:
      "Workshops, school outreach programs and STEM initiatives connected hundreds of young innovators.",
  },
  {
    year: "2025",
    title: "Innovation Across Gujarat",
    description:
      "Hackathons, industry visits and environmental awareness programs expanded Yuvalay's impact.",
  },
  {
    year: "2026",
    title: "Innovation Challenge",
    description:
      "Students collaborated to build solutions for real-world challenges through technology and creativity.",
  },
];

export default function MemoriesTimeline() {
  return (
    <section className="timeline-section">

      <div className="timeline-heading">

        <span className="section-tag">
          Our Journey
        </span>

        <h2>
          Memories Through The Years
        </h2>

        <p>
          Every year represents a new milestone,
          bringing together students, innovators
          and communities.
        </p>

      </div>

      <div className="timeline">

        {timeline.map((item, index) => (

          <motion.div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="timeline-card">

              <span className="year">
                {item.year}
              </span>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>
          </motion.div>

        ))}

      </div>

    </section>
  );
}