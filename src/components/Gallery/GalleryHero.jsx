import { motion } from "framer-motion";
import "./GalleryHero.css";

export default function GalleryHero() {
  return (
    <section className="gallery-hero">

      <div className="gallery-bg"></div>

      <motion.div
        className="gallery-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >

        <span className="section-tag">
          Gallery
        </span>

        <h1>
          Innovation in
          Every Moment
        </h1>

        <p>
          Explore workshops, hackathons,
          community initiatives and unforgettable
          memories created at Yuvalay Makerspace.
        </p>

        <a href="#featured" className="primary-btn">
          Explore Gallery
        </a>

      </motion.div>

    </section>
  );
}