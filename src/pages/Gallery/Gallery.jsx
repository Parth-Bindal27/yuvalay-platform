import "./Gallery.css";
import { useEffect, useState } from "react";
import { getGallery } from "../../services/galleryService";

export default function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    loadGallery();
  }, []);

  useEffect(() => {
    let data = [...gallery];

    if (category !== "All") {
      data = data.filter((item) => item.category === category);
    }

    if (search) {
      data = data.filter(
        (item) =>
          item.title?.toLowerCase().includes(search.toLowerCase()) ||
          item.caption?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
  }, [gallery, search, category]);

  const loadGallery = async () => {
    try {
      const images = await getGallery();
      setGallery(images);
      setFiltered(images);
    } catch (err) {
      console.error(err);
    }
  };

  const categories = [
    "All",
    ...new Set(gallery.map((item) => item.category))
  ];

  return (
    <section className="gallery-page">

      <div className="gallery-header">

        <h1>Gallery</h1>

        <p>
          Explore moments captured at Yuvalay Makerspace.
        </p>

        <div className="gallery-controls">

          <input
            type="text"
            placeholder="Search images..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

        </div>

      </div>

      <div className="gallery-grid">

        {filtered.map((image) => (

          <div
            className="gallery-item"
            key={image.id}
            onClick={() => setSelectedImage(image)}
          >

            <img
              src={image.image_url}
              alt={image.title}
            />

            <div className="gallery-overlay">

              <h3>{image.title}</h3>

              <p>{image.category}</p>

            </div>

          </div>

        ))}

      </div>

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage.image_url}
              alt={selectedImage.title}
            />

            <div className="lightbox-info">

              <h2>{selectedImage.title}</h2>

              <p>{selectedImage.caption}</p>

              <span>{selectedImage.category}</span>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}