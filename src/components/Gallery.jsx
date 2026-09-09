import { motion } from "framer-motion";

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
];

function Gallery() {
  return (
    <section className="section gallery-section">
      <div className="container">
        <motion.div
          className="section-heading centered"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">THE INDABO EXPERIENCE</p>

          <h2>
            See what's
            <br />
            <em>happening.</em>
          </h2>
        </motion.div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div
              className={`gallery-item gallery-${index + 1}`}
              key={image.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <div className="gallery-image">
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                />
              </div>

              <p>{image.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;