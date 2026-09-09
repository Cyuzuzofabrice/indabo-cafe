import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
const images = [
  {
    src: "/images/indabo-gallery-1.jpg",
    title: "Coffee & Conversation",
  },
  {
    src: "/images/indabo-gallery-2.jpg",
    title: "Fresh From The Kitchen",
  },
  {
    src: "/images/indabo-gallery-3.jpg",
    title: "Your Morning Ritual",
  },
  {
    src: "/images/indabo-gallery-4.jpg",
    title: "Good Times at Indabo",
  },
  {
    src: "/images/indabo-garden.jpg",
    title: "The Indabo Garden",
  },
  {
    src: "/images/indabo-hero.jpg",
    title: "Welcome to Indabo",
  },
];

function GalleryPage() {
  return (
    <div className="gallery-page">

      <SEO
  title="Gallery"
  description="Explore photos of Indabo Café, its garden, food, coffee and atmosphere in Kigali, Rwanda."
/>

      {/* HERO */}
      <section className="gallery-page-hero">
        <div className="gallery-page-overlay" />

        <div className="container gallery-page-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            THE INDABO EXPERIENCE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Moments worth
            <br />
            <em>remembering.</em>
          </motion.h1>

          <motion.p
            className="gallery-page-intro"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Take a look inside the atmosphere, food, garden, and moments
            that make Indabo Café special.
          </motion.p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section gallery-page-section">
        <div className="container">

          <motion.div
            className="section-heading centered"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">GALLERY</p>

            <h2>
              A glimpse of
              <br />
              <em>Indabo.</em>
            </h2>
          </motion.div>

          <div className="gallery-page-grid">
            {images.map((image, index) => (
              <motion.figure
                className={`gallery-page-item gallery-page-item-${index + 1}`}
                key={image.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
              >
                <div className="gallery-page-image">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                  />
                </div>

                <figcaption>{image.title}</figcaption>
              </motion.figure>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section gallery-page-cta">
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">COME EXPERIENCE IT</p>

            <h2>
              Don't just look.
              <br />
              <em>Come visit.</em>
            </h2>

            <Link
              to="/reservations"
              className="button button-primary"
            >
              Reserve a Table
              <ArrowRight size={17} />
            </Link>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default GalleryPage;