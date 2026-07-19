import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import "./VideoGallery.css";

const videos = [
  {
    title: "Innovation Challenge Highlights",
    duration: "3:42",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&auto=format&fit=crop",
  },
  {
    title: "Robotics Bootcamp",
    duration: "5:18",
    thumbnail:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&auto=format&fit=crop",
  },
  {
    title: "Paryavaran Mela",
    duration: "4:05",
    thumbnail:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55?w=1600&auto=format&fit=crop",
  },
  {
    title: "Industry Visit",
    duration: "6:20",
    thumbnail:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1600&auto=format&fit=crop",
  },
];

export default function VideoGallery() {
  return (
    <section className="video-gallery">

      <div className="video-heading">

        <span className="section-tag">
          Watch & Experience
        </span>

        <h2>
          Stories In Motion
        </h2>

        <p>
          Discover Yuvalay through inspiring videos,
          workshops and innovation highlights.
        </p>

      </div>

      <div className="video-grid">

        {videos.map((video, index) => (

          <motion.div
            className="video-card"
            key={index}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
          >

            <img
              src={video.thumbnail}
              alt={video.title}
            />

            <div className="play-btn">
              <FaPlay />
            </div>

            <div className="video-overlay">

              <h3>{video.title}</h3>

              <span>{video.duration}</span>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}