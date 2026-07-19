import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

import "./ProgramsFAQ.css";

const faqs = [
  {
    question: "Who can join Yuvalay programs?",
    answer:
      "Students, educators, innovators, startups, professionals and anyone passionate about learning and innovation are welcome to participate.",
  },
  {
    question: "Do I need prior technical knowledge?",
    answer:
      "No. Many of our workshops are beginner-friendly, while advanced programs are available for experienced learners.",
  },
  {
    question: "Are certificates provided?",
    answer:
      "Yes. Participants receive certificates for eligible workshops, bootcamps and innovation programs after successful completion.",
  },
  {
    question: "How can I register?",
    answer:
      "You can register online through our website or during the official announcement of each workshop and event.",
  },
  {
    question: "Can schools or organizations collaborate with Yuvalay?",
    answer:
      "Absolutely. We actively collaborate with schools, colleges, NGOs, industries and government organizations for innovation initiatives.",
  },
];

export default function ProgramsFAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="program-faq">

      <motion.div
        className="faq-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span>FAQs</span>

        <h2>
          Frequently Asked
          <br />
          Questions
        </h2>

        <p>
          Find answers to the most common questions about our
          workshops, innovation labs and learning programs.
        </p>

      </motion.div>

      <div className="faq-container">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className={`faq-item ${
              active === index ? "active" : ""
            }`}
          >

            <button
              className="faq-question"
              onClick={() =>
                setActive(active === index ? -1 : index)
              }
            >

              <span>{faq.question}</span>

              <FaChevronDown
                className={`arrow ${
                  active === index ? "rotate" : ""
                }`}
              />

            </button>

            <AnimatePresence>

              {active === index && (

                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                >

                  <p>{faq.answer}</p>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        ))}

      </div>

    </section>
  );
}