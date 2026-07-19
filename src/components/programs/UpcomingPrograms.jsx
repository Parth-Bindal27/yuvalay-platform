import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import "./UpcomingPrograms.css";

const events = [
  {
    month: "AUG",
    day: "18",
    title: "AI & Future Technologies Bootcamp",
    date: "18 August 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Yuvalay Innovation Center",
    status: "Open",
    description:
      "Hands-on workshop covering Generative AI, Prompt Engineering and practical AI applications.",
  },

  {
    month: "SEP",
    day: "05",
    title: "National Innovation Challenge",
    date: "5 September 2026",
    time: "9:30 AM - 5:30 PM",
    location: "Vadodara",
    status: "Registration",
    description:
      "Compete with innovators across the country to solve real-world challenges through technology.",
  },

  {
    month: "OCT",
    day: "12",
    title: "Startup Pitch Day",
    date: "12 October 2026",
    time: "11:00 AM - 3:00 PM",
    location: "Yuvalay Auditorium",
    status: "Limited Seats",
    description:
      "Present your startup idea to mentors, investors and industry experts for valuable feedback.",
  },
];

export default function UpcomingPrograms() {
  return (
    <section className="upcoming-programs">

      <motion.div
        className="upcoming-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>UPCOMING PROGRAMS</span>

        <h2>
          Don't Miss
          <br />
          What's Next
        </h2>

        <p>
          Join our upcoming workshops, competitions and innovation events
          designed to inspire the next generation of creators.
        </p>

      </motion.div>

      <div className="event-list">

        {events.map((event, index) => (

          <motion.div
            key={index}
            className="event-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: .6,
              delay: index * .08,
            }}
            viewport={{ once: true }}
          >

            <div className="event-date">

              <span>{event.month}</span>

              <h3>{event.day}</h3>

            </div>

            <div className="event-content">

              <div className="event-top">

                <h3>{event.title}</h3>

                <span className="status">
                  {event.status}
                </span>

              </div>

              <p>
                {event.description}
              </p>

              <div className="event-meta">

                <span>
                  <FaCalendarAlt />
                  {event.date}
                </span>

                <span>
                  <FaClock />
                  {event.time}
                </span>

                <span>
                  <FaMapMarkerAlt />
                  {event.location}
                </span>

              </div>

            </div>

            <button>

              Register

              <FaArrowRight />

            </button>

          </motion.div>

        ))}

      </div>

    </section>
  );
}