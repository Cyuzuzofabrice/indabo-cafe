import { motion } from "framer-motion";

function Reviews() {
  return (
    <section className="section reviews-section">
      <motion.div
        className="container review-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">FROM OUR GUESTS</p>

        <blockquote>
          “A beautiful space, amazing atmosphere, and food that
          keeps you coming back.”
        </blockquote>

        <div className="review-author">
          <span />
          Indabo Café Guest
        </div>
      </motion.div>
    </section>
  );
}

export default Reviews;