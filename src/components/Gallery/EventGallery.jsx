import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./EventGallery.css";

const events = [
  {
    title: "Innovation Challenge 2026",
    date: "July 25, 2026",
    participants: "250+ Students",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&auto=format&fit=crop",
  },
  {
    title: "Robotics Bootcamp",
    date: "June 12, 2026",
    participants: "180+ Students",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&auto=format&fit=crop",
  },
  {
    title: "Paryavaran Mela",
    date: "May 03, 2026",
    participants: "500+ Visitors",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55?w=1600&auto=format&fit=crop",
  },
];

export default function EventGallery() {
  return (
    <section className="event-gallery">

      <div className="event-heading">

        <span className="section-tag">
          Featured Memories
        </span>

        <h2>
          Moments That
          Defined Yuvalay
        </h2>

        <p>
          Every workshop, challenge and community
          initiative leaves behind memories that
          inspire future innovators.
        </p>

      </div>

      <div className="event-grid">

        {events.map((event, index) => (

          <motion.div
            className="event-card"
            key={index}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            transition={{
              duration: .35,
            }}
          >

            <img
              src={event.image}
              alt={event.title}
            />

            <div className="event-overlay">

              <span>{event.date}</span>

              <h3>{event.title}</h3>

              <p>{event.participants}</p>

              <button>

                View Album

                <FaArrowRight />

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}