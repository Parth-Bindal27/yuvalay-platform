// src/components/home/Testimonials.jsx

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiDoubleQuotesL,
  RiStarFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import "../../styles/home/testimonials.css";

const testimonials = [
  {
    name: "Aarav Patel",
    role: "Student Innovator",
    image: "/images/testimonials/student1.jpg",
    review:
      "Yuvalay completely changed the way I learn. Instead of just theory, I built real projects, participated in hackathons and gained confidence to pursue my own startup.",
  },
  {
    name: "Priya Shah",
    role: "Startup Founder",
    image: "/images/testimonials/student2.jpg",
    review:
      "The mentors, makerspace and community helped me transform my idea into a working prototype. It was an incredible learning experience.",
  },
  {
    name: "Rahul Mehta",
    role: "Engineering Student",
    image: "/images/testimonials/student3.jpg",
    review:
      "Every workshop felt practical and engaging. The environment motivates you to innovate, collaborate and keep learning every single day.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const next = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <section className="testimonials">

      <motion.div
        className="testimonial-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span className="section-tag">
          Testimonials
        </span>

        <h2>
          Stories From
          <br />
          Our Community
        </h2>

        <p>
          Hear what students, innovators and entrepreneurs say
          about their journey at Yuvalay.
        </p>

      </motion.div>

      <div className="testimonial-wrapper">

        <button
          className="nav-btn"
          onClick={prev}
        >
          <RiArrowLeftSLine />
        </button>

        <AnimatePresence mode="wait">

          <motion.div
            key={current}
            className="testimonial-card"
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: .95 }}
            transition={{ duration: .45 }}
          >

            <RiDoubleQuotesL className="quote-icon" />

            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="testimonial-avatar"
            />

            <div className="stars">

              {[...Array(5)].map((_, index) => (

                <RiStarFill key={index} />

              ))}

            </div>

            <p className="review">

              {testimonials[current].review}

            </p>

            <h3>

              {testimonials[current].name}

            </h3>

            <span>

              {testimonials[current].role}

            </span>

          </motion.div>

        </AnimatePresence>

        <button
          className="nav-btn"
          onClick={next}
        >
          <RiArrowRightSLine />
        </button>

      </div>

      <div className="testimonial-dots">

        {testimonials.map((_, index) => (

          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={
              current === index ? "active" : ""
            }
          />

        ))}

      </div>

    </section>
  );
}