import { motion } from "framer-motion";

function GardenSection() {
  return (
    <section className="garden-section">
      <div className="garden-overlay" />

      <motion.div
        className="container garden-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.9 }}
      >
        <p className="eyebrow">YOUR ESCAPE IN THE CITY</p>

        <h2>
          Find your
          <br />
          <em>little corner.</em>
        </h2>

        <p>
          Step into a space designed to make you feel at home.
          Greenery, warm light, good food and even better company.
        </p>
      </motion.div>
    </section>
  );
}

export default GardenSection;