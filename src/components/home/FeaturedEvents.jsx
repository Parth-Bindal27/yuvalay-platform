import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCalendarLine,
  RiMapPinLine,
} from "react-icons/ri";
import "../../styles/home/featuredEvents.css";

const events = [
  {
    id: 1,
    title: "AI Bootcamp 2026",
    date: "28 July 2026",
    location: "Yuvalay Makerspace",
    status: "Registration Open",
    image: "/images/events/bootcamp.jpg",
  },
  {
    id: 2,
    title: "Innovation Challenge",
    date: "10 August 2026",
    location: "Vadodara",
    status: "Coming Soon",
    image: "/images/events/challenge.jpg",
  },
  {
    id: 3,
    title: "Maker Workshop",
    date: "22 August 2026",
    location: "Innovation Lab",
    status: "Limited Seats",
    image: "/images/events/workshop.jpg",
  },
];

export default function FeaturedEvents() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % events.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setCurrent((prev) => (prev + 1) % events.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? events.length - 1 : prev - 1
    );

  return (
    <section className="featured-events">

      <div className="events-header">

        <div>
          <span className="section-tag">
            Featured Events
          </span>

          <h2>
            Join Our Next Event
          </h2>

          <p>
            Workshops, Hackathons & Innovation Experiences
          </p>
        </div>

        <div className="event-nav">

          <button onClick={prev}>
            <RiArrowLeftSLine />
          </button>

          <button onClick={next}>
            <RiArrowRightSLine />
          </button>

        </div>

      </div>

      <AnimatePresence mode="wait">

        <motion.div
          key={events[current].id}
          className="event-card"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: .45 }}
        >

          <div className="event-image">

            <img
              src={events[current].image}
              alt={events[current].title}
            />

            <span className="status">
              {events[current].status}
            </span>

          </div>

          <div className="event-content">

            <h3>
              {events[current].title}
            </h3>

            <div className="event-info">

              <span>
                <RiCalendarLine />
                {events[current].date}
              </span>

              <span>
                <RiMapPinLine />
                {events[current].location}
              </span>

            </div>

            <p>
              Learn, build, collaborate and innovate with
              mentors, startups and fellow creators.
            </p>

            <div className="event-buttons">

              <button className="register-btn">
                Register
              </button>

              <button className="details-btn">
                Learn More
              </button>

            </div>

          </div>

        </motion.div>

      </AnimatePresence>

      <div className="event-dots">

        {events.map((_, index) => (
          <span
            key={index}
            className={
              current === index ? "active" : ""
            }
            onClick={() => setCurrent(index)}
          />
        ))}

      </div>

    </section>
  );
}