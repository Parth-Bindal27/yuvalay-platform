import { motion } from "framer-motion";

const gallery = [
  "/insideLab/gallery/gallery1.jpg",
  "/insideLab/gallery/gallery2.jpg",
  "/insideLab/gallery/gallery3.jpg",
  "/insideLab/gallery/gallery4.jpg",
  "/insideLab/gallery/gallery5.jpg",
  "/insideLab/gallery/gallery6.jpg",
];

export default function GallerySection() {
  return (
    <section className="gallerySection">

      <div className="sectionHeading">

        <span>MAKERSPACE GALLERY</span>

        <h2>
          Experience the
          <span> Innovation Space</span>
        </h2>

        <p>
          Take a glimpse inside Yuvalay Makerspace where ideas,
          creativity and technology come together to build the future.
        </p>

      </div>

      <div className="galleryGrid">

        {gallery.map((image, index) => (

          <motion.div
            key={index}
            className="galleryCard"
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: .6,
              delay: index * .08,
            }}
          >

            <img
              src={image}
              alt={`Gallery ${index + 1}`}
            />

            <div className="galleryOverlay">

              <h3>Yuvalay Makerspace</h3>

              <p>Innovation • Collaboration • Learning</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}