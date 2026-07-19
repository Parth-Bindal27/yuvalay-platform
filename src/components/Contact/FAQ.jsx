import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";

const faqs = [
  {
    question: "How can I join Yuvalay?",
    answer:
      "You can participate by registering for our workshops, innovation challenges, community events, or volunteering opportunities through our website.",
  },
  {
    question: "Who can participate in Yuvalay programs?",
    answer:
      "Students, educators, startups, innovators, makers, and community members are welcome to participate based on the program requirements.",
  },
  {
    question: "Is there any membership fee?",
    answer:
      "Most community activities are free, while certain specialized workshops or certification programs may have a nominal registration fee.",
  },
  {
    question: "Where is Yuvalay Makerspace located?",
    answer:
      "Yuvalay Makerspace operates under Vadodara Innovation Council in Vadodara, Gujarat.",
  },
  {
    question: "How can schools or colleges collaborate?",
    answer:
      "Educational institutions can partner with us for innovation workshops, maker sessions, hackathons, internships, and industry visits.",
  },
  {
    question: "How can startups partner with Yuvalay?",
    answer:
      "Startups can collaborate through mentoring, innovation challenges, product showcases, incubation support, and community events.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq-section">

      <motion.div
        className="faq-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="section-tag">
          Frequently Asked Questions
        </span>

        <h2>Everything You Need to Know</h2>

        <p>
          Have questions? Here are some of the most common
          queries about Yuvalay Makerspace.
        </p>
      </motion.div>

      <div className="faq-container">

        {faqs.map((faq, index) => (
          <motion.div
            className={`faq-item ${
              active === index ? "active" : ""
            }`}
            key={index}
            layout
          >
            <button
              className="faq-question"
              onClick={() =>
                setActive(active === index ? null : index)
              }
            >
              <span>{faq.question}</span>

              <FaChevronDown
                className={active === index ? "rotate" : ""}
              />
            </button>

            <AnimatePresence>

              {active === index && (

                <motion.div
                  className="faq-answer"
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  <p>{faq.answer}</p>
                </motion.div>

              )}

            </AnimatePresence>
          </motion.div>
        ))}

      </div>
    </section>
  );
}