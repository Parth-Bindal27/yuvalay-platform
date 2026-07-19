import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaImages,
  FaThLarge,
} from "react-icons/fa";
import Lightbox from "./Lightbox";
import "./MasonryGallery.css";

const categories = [
  "All",
  "Workshops",
  "Hackathons",
  "Community",
  "Innovation",
  "Competitions",
];

const galleryData = [
  {
    id: 1,
    title: "Robotics Workshop",
    category: "Workshops",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55?w=1200&auto=format&fit=crop",
    height: 420,
    date: "July 2026",
  },
  {
    id: 2,
    title: "Hackathon Finals",
    category: "Hackathons",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&auto=format&fit=crop",
    height: 560,
    date: "June 2026",
  },
  {
    id: 3,
    title: "Innovation Meetup",
    category: "Innovation",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&auto=format&fit=crop",
    height: 360,
    date: "May 2026",
  },
  {
    id: 4,
    title: "Electronics Lab",
    category: "Workshops",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&auto=format&fit=crop",
    height: 520,
    date: "April 2026",
  },
  {
    id: 5,
    title: "Coding Sprint",
    category: "Hackathons",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop",
    height: 340,
    date: "March 2026",
  },
  {
    id: 6,
    title: "Community Meetup",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop",
    height: 500,
    date: "February 2026",
  },
  {
    id: 7,
    title: "Innovation Challenge",
    category: "Competitions",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop",
    height: 420,
    date: "January 2026",
  },
  {
    id: 8,
    title: "Award Ceremony",
    category: "Competitions",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&auto=format&fit=crop",
    height: 560,
    date: "December 2025",
  },
  {
    id: 9,
    title: "STEM Bootcamp",
    category: "Workshops",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&auto=format&fit=crop",
    height: 390,
    date: "November 2025",
  },
  {
    id: 10,
    title: "AI Workshop",
    category: "Innovation",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop",
    height: 470,
    date: "October 2025",
  },
  {
    id: 11,
    title: "Drone Demonstration",
    category: "Innovation",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&auto=format&fit=crop",
    height: 340,
    date: "September 2025",
  },
  {
    id: 12,
    title: "School Outreach",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop",
    height: 540,
    date: "August 2025",
  },
];

export default function MasonryGallery() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(8);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = useMemo(() => {
    return galleryData.filter((item) => {
      const categoryMatch =
        category === "All" || item.category === category;

      const searchMatch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  const displayedImages = filteredImages.slice(0, visible);

  return (
    <section className="gallery-section">

      <div className="gallery-top">

        <span className="section-tag">
          Our Memories
        </span>

        <h2>
          Captured Moments
        </h2>

        <p>
          Every event tells a story of innovation,
          collaboration and community.
        </p>

      </div>

      <div className="gallery-toolbar">

        <div className="gallery-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Search gallery..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="gallery-count">

          <FaImages />

          {filteredImages.length} Photos

        </div>

      </div>

      <div className="gallery-filters">

        {categories.map((item) => (

          <button
            key={item}
            className={
              category === item
                ? "filter active"
                : "filter"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>

        ))}

      </div>

      <motion.div
        layout
        className="gallery-grid"
      >

        <AnimatePresence>

          {displayedImages.map((item, index) => (

            <motion.div
              layout
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: .4,
              }}
              className="gallery-card"
              onClick={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                style={{
                  height: item.height,
                }}
              />

              <div className="gallery-overlay">

                <span>{item.category}</span>

                <h3>{item.title}</h3>

                <small>{item.date}</small>

              </div>

            </motion.div>

          ))}

        </AnimatePresence>

      </motion.div>

      {visible < filteredImages.length && (

        <div className="gallery-load">

          <button
            onClick={() =>
              setVisible((prev) => prev + 4)
            }
          >
            <FaThLarge />

            Load More

          </button>

        </div>

      )}

      <Lightbox
        images={filteredImages}
        current={currentIndex}
        setCurrent={setCurrentIndex}
        open={lightboxOpen}
        setOpen={setLightboxOpen}
      />

    </section>
  );
}