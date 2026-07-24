// src/pages/FAQs/FAQs.jsx

import Hero from "../../components/faqs/Hero";
import Categories from "../../components/faqs/Categories";
import FAQAccordion from "../../components/faqs/FAQAccordion";
import ContactCTA from "../../components/faqs/ContactCTA";

export default function FAQs() {
  return (
    <>
      <Hero />
      <Categories />
      <FAQAccordion />
      <ContactCTA />
    </>
  );
}