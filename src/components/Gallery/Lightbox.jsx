import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";

import "./Lightbox.css";

export default function Lightbox({
  images,
  current,
  setCurrent,
  open,
  setOpen,
}) {
  const close = () => setOpen(false);

  const next = () =>
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );

  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  useEffect(() => {
    if (!open) return;

    const handleKey = (e) => {
      if (e.key === "Escape") close();

      if (e.key === "ArrowRight") next();

      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener(
        "keydown",
        handleKey
      );

      document.body.style.overflow = "auto";
    };
  }, [open, current]);

  if (!images.length) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .3 }}
          onClick={close}
        >
          <motion.div
            className="lightbox-container"
            initial={{
              opacity: 0,
              scale: .9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: .9,
            }}
            transition={{
              duration: .35,
            }}
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            {/* Top Bar */}

            <div className="lightbox-top">

              <div className="lightbox-counter">

                <FaExpand />

                <span>
                  {current + 1} / {images.length}
                </span>

              </div>

              <button
                className="close-lightbox"
                onClick={close}
              >
                <FaTimes />
              </button>

            </div>

            {/* Image */}

            <motion.img
              key={images[current].image}
              src={images[current].image}
              alt={images[current].title}
              draggable={false}
              initial={{
                opacity: 0,
                scale: .95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: .35,
              }}
            />

            {/* Left */}

            <button
              className="nav-button left"
              onClick={prev}
            >
              <FaChevronLeft />
            </button>

            {/* Right */}

            <button
              className="nav-button right"
              onClick={next}
            >
              <FaChevronRight />
            </button>

            {/* Bottom */}

            <motion.div
              className="lightbox-info"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: .2,
              }}
            >
              <span>
                {images[current].category}
              </span>

              <h2>
                {images[current].title}
              </h2>

              <p>
                {images[current].date}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}