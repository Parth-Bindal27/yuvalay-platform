import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

import "./FeaturedGallery.css";

export default function FeaturedGallery() {
  return (
    <section
      className="featured-gallery"
      id="featured"
    >

      <div className="featured-header">

        <span className="section-tag">
          Featured Event
        </span>

        <h2>
          Moments That
          Inspire Innovation
        </h2>

      </div>

      <motion.div
        className="featured-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <div className="featured-image">

          <img
            src="/images/gallery/featured.jpg"
            alt="Featured Event"
          />

        </div>

        <div className="featured-content">

          <span className="event-tag">
            Robotics Workshop
          </span>

          <h3>
            Building Tomorrow's
            Innovators Today
          </h3>

          <p>
            Students collaborated on robotics,
            AI, electronics and design thinking
            to solve real-world challenges through
            hands-on innovation.
          </p>

          <div className="featured-info">

            <div>

              <FaCalendarAlt />

              <span>July 2026</span>

            </div>

            <div>

              <FaMapMarkerAlt />

              <span>Vadodara</span>

            </div>

            <div>

              <FaUsers />

              <span>250+ Participants</span>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}