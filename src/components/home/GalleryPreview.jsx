// src/components/home/GalleryPreview.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RiArrowRightUpLine,
  RiImageLine,
} from "react-icons/ri";
import "../../styles/home/galleryPreview.css";

const gallery = [
  {
    image: "/images/gallery/gallery1.jpg",
    title: "Hackathons",
    span: "large",
  },
  {
    image: "/images/gallery/gallery2.jpg",
    title: "Innovation Lab",
    span: "small",
  },
  {
    image: "/images/gallery/gallery3.jpg",
    title: "Workshops",
    span: "small",
  },
  {
    image: "/images/gallery/gallery4.jpg",
    title: "Startup Pitch",
    span: "wide",
  },
  {
    image: "/images/gallery/gallery5.jpg",
    title: "Makerspace",
    span: "medium",
  },
];

export default function GalleryPreview() {
  return (
    <section className="gallery-preview">

      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >

        <span className="section-tag">
          Gallery
        </span>

        <h2>
          Moments That
          <br />
          Inspire Innovation
        </h2>

        <p>
          Every project, workshop and event represents a journey of
          creativity, collaboration and real-world learning.
        </p>

      </motion.div>

      <div className="gallery-grid">

        {gallery.map((item, index) => (

          <motion.div
            key={index}
            className={`gallery-card ${item.span}`}
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * .08,
              duration: .45
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -8
            }}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-overlay">

              <div className="gallery-icon">
                <RiImageLine />
              </div>

              <h3>
                {item.title}
              </h3>

            </div>

          </motion.div>

        ))}

      </div>

      <motion.div
        className="gallery-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >

        <Link
          to="/gallery"
          className="gallery-btn"
        >
          Explore Full Gallery
          <RiArrowRightUpLine />
        </Link>

      </motion.div>

    </section>
  );
}