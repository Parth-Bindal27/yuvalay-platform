import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./faqAccordion.css";

const faqs = [
  {
    category: "General",
    question: "What is Yuvalay Makerspace?",
    answer:
      "Yuvalay Makerspace is an innovation hub where students, educators, startups and innovators collaborate to learn, build and create impactful solutions using modern technologies.",
  },
  {
    category: "Programs",
    question: "Who can join Yuvalay programs?",
    answer:
      "Students, teachers, professionals, startups and anyone passionate about innovation and technology can participate depending on the program requirements.",
  },
  {
    category: "Workshops",
    question: "Do I need prior experience to attend workshops?",
    answer:
      "No. Most workshops are beginner-friendly while advanced sessions clearly mention any prerequisites.",
  },
  {
    category: "Events",
    question: "How do I register for events?",
    answer:
      "You can register directly through the Events page by selecting the event and completing the online registration form.",
  },
  {
    category: "Makerspace",
    question: "What facilities are available in the makerspace?",
    answer:
      "Our makerspace provides access to electronics, robotics kits, 3D printing, AI resources, IoT equipment and collaborative workspaces.",
  },
  {
    category: "Partnerships",
    question: "Can organizations collaborate with Yuvalay?",
    answer:
      "Yes. Educational institutions, NGOs, startups and industry partners can collaborate through workshops, CSR initiatives and innovation programs.",
  },
  {
    category: "Volunteering",
    question: "How can I become a mentor or volunteer?",
    answer:
      "Simply contact us through the Contact page. Our team will guide you through the onboarding process based on your expertise and interests.",
  },
  {
    category: "Donations",
    question: "How can I support Yuvalay?",
    answer:
      "You can contribute by donating, sponsoring programs, mentoring students or partnering with us to expand innovation opportunities.",
  },
];

export default function FAQAccordion() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqAccordion">

      <div className="faqAccordionContainer">

        {faqs.map((faq, index) => (

          <div
            className={`faqItem ${
              activeIndex === index ? "active" : ""
            }`}
            key={index}
          >

            <button
              className="faqQuestion"
              onClick={() => toggleAccordion(index)}
            >

              <div>

                <span className="faqCategoryBadge">
                  {faq.category}
                </span>

                <h3>{faq.question}</h3>

              </div>

              {activeIndex === index ? (
                <FiMinus />
              ) : (
                <FiPlus />
              )}

            </button>

            <div className="faqAnswer">

              <p>{faq.answer}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}