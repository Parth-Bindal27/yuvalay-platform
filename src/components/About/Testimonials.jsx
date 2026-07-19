import "./Testimonials.css";
import { motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Student Innovator",
    image: "/images/testimonials/student1.jpg",
    review:
      "Yuvalay completely changed the way I think. The workshops and projects gave me confidence to build real solutions instead of only learning theory.",
  },

  {
    name: "Amit Patel",
    role: "School Principal",
    image: "/images/testimonials/principal.jpg",
    review:
      "The impact of Yuvalay on our students has been remarkable. They became more creative, confident and problem-solving oriented.",
  },

  {
    name: "Neha Joshi",
    role: "Robotics Mentor",
    image: "/images/testimonials/mentor.jpg",
    review:
      "An inspiring ecosystem where students are encouraged to experiment, innovate and transform ideas into meaningful projects.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonialBlur blurLeft"></div>
      <div className="testimonialBlur blurRight"></div>

      <div className="testimonialContainer">

        <motion.div
          className="testimonialHeading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
        >

          <span className="testimonialBadge">
            TESTIMONIALS
          </span>

          <h2>
            Voices That
            <span> Inspire </span>
            Our Journey
          </h2>

          <p>
            Every success story motivates us to continue building an
            innovation ecosystem where creativity, learning and
            technology come together.
          </p>

        </motion.div>

        <div className="testimonialGrid">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              className="testimonialCard"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
                duration: .6,
              }}
              whileHover={{ y: -8 }}
            >

              <FaQuoteLeft className="quoteIcon" />

              <div className="stars">

                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

              </div>

              <p className="review">
                {item.review}
              </p>

              <div className="user">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h3>{item.name}</h3>

                  <span>{item.role}</span>

                </div>

              </div>

              <button>

                Read Story

                <FaArrowRight />

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}