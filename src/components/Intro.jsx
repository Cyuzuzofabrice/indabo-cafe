import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />

      <motion.div
        className="container hero-content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="eyebrow" variants={item}>
          WELCOME TO INDABO CAFÉ
        </motion.p>

        <motion.h1 variants={item}>
          Good coffee.
          <br />
          Good food.
          <br />
          <em>Good moments.</em>
        </motion.h1>

        <motion.p className="hero-text" variants={item}>
          A beautiful place to slow down, connect, and enjoy
          meaningful moments over great food and coffee.
        </motion.p>

        <motion.div className="hero-actions" variants={item}>
          <Link to="/menu" className="button button-primary">
            Explore Our Menu
            <ArrowRight size={18} />
          </Link>

          <Link to="/reservations" className="button button-outline">
            Reserve a Table
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span />
        Scroll to explore
      </motion.div>
    </section>
  );
}

export default Hero;