import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import GalleryHero from "../../components/Gallery/GalleryHero";
import FeaturedGallery from "../../components/Gallery/FeaturedGallery";
import EventGallery from "../../components/Gallery/EventGallery";
import MasonryGallery from "../../components/Gallery/MasonryGallery";
import VideoGallery from "../../components/Gallery/VideoGallery";
import MemoriesTimeline from "../../components/Gallery/MemoriesTimeline";
import GalleryCTA from "../../components/Gallery/GalleryCTA";

export default function Gallery() {
  return (
    <>
      <Navbar />

      <GalleryHero />

      <FeaturedGallery />

      <EventGallery />

      <MasonryGallery />

      <VideoGallery />

      <MemoriesTimeline />

      <GalleryCTA />

      <Footer />
    </>
  );
}