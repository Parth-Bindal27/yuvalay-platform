import "./MediaCenter.css";

import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

import {
  uploadImage,
  getGallery,
  deleteImage,
} from "../../services/galleryService";

export default function MediaCenter() {

  const { currentUser } = useAuth();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  const [category, setCategory] = useState("Events");

  const [featured, setFeatured] = useState(false);

  const [gallery, setGallery] = useState([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const images = await getGallery();
      setGallery(images);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFile = (e) => {
    const image = e.target.files[0];

    if (!image) return;

    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const handleUpload = async () => {

    if (!file) {
      alert("Please choose an image.");
      return;
    }

    setLoading(true);

    try {

      await uploadImage(
        file,
        title,
        caption,
        category,
        featured,
        currentUser.email
      );

      alert("Image Uploaded Successfully");

      setFile(null);
      setPreview("");

      setTitle("");
      setCaption("");

      setCategory("Events");

      setFeatured(false);

      loadGallery();

    } catch (err) {

      alert(err.message);

    }

    setLoading(false);

  };

  const handleDelete = async (image) => {

    if (!window.confirm("Delete this image?")) return;

    await deleteImage(image.id, image.image_url);

    loadGallery();

  };

  const filteredGallery = gallery.filter((item) => {

    return (
      item.title?.toLowerCase().includes(search.toLowerCase()) ||
      item.category?.toLowerCase().includes(search.toLowerCase())
    );

  });

  return (

    <section className="media-center">

      <div className="media-header">

        <div>

          <h1>Media Center</h1>

          <p>
            Upload and manage Yuvalay gallery images.
          </p>

        </div>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

      </div>

      <div className="upload-card">

        <div className="upload-left">

          <label className="dropzone">

            {preview ? (

              <img
                src={preview}
                alt=""
              />

            ) : (

              <>
                <h3>Select Image</h3>
                <p>PNG, JPG or WEBP</p>
              </>

            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleFile}
            />

          </label>

        </div>

        <div className="upload-right">

          <input
            type="text"
            placeholder="Image Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <textarea
            placeholder="Caption"
            value={caption}
            onChange={(e)=>setCaption(e.target.value)}
          />

          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
          >

            <option>Events</option>

            <option>Makerspace</option>

            <option>Workshop</option>

            <option>Innovation</option>

            <option>Robotics</option>

            <option>Community</option>

          </select>

          <label className="featured">

            <input
              type="checkbox"
              checked={featured}
              onChange={(e)=>setFeatured(e.target.checked)}
            />

            Featured Image

          </label>

          <button
            onClick={handleUpload}
            disabled={loading}
          >

            {
              loading
              ? "Uploading..."
              : "Upload Image"
            }

          </button>

        </div>

      </div>

      <div className="gallery-grid">

        {

          filteredGallery.map((image)=>(

            <div
              className="gallery-card"
              key={image.id}
            >

              <img
                src={image.image_url}
                alt=""
              />

              <div className="gallery-info">

                <h3>
                  {image.title}
                </h3>

                <p>
                  {image.category}
                </p>

                {

                  image.featured &&

                  <span className="badge">
                    Featured
                  </span>

                }

                <button
                  className="delete-btn"
                  onClick={()=>handleDelete(image)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

}