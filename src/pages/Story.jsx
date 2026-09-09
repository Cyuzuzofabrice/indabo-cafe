import { motion } from "framer-motion";
import { ArrowRight, Coffee, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

function Story() {
  return (
    <div className="story-page">
      {/* ================= HERO ================= */}
      <section className="story-hero">
        <div className="story-hero-overlay" />
        <SEO
  title="Our Story"
  description="Learn about Indabo Café, its garden atmosphere, coffee, food and the experience behind one of Kigali's welcoming café spaces."
/>

        <div className="container story-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            OUR STORY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            More than
            <br />
            <em>a café.</em>
          </motion.h1>

          <motion.p
            className="story-hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A place built around good food, genuine connection, and moments
            worth remembering.
          </motion.p>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="section story-intro">
        <div className="container story-intro-grid">
          <motion.div
            className="story-number"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>01</span>
            <p>THE BEGINNING</p>
          </motion.div>

          <motion.div
            className="story-text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">WHERE IT STARTED</p>

            <h2>
              Created for
              <br />
              <em>connection.</em>
            </h2>

            <p>
              Indabo Café was created with a simple idea: create a space where
              people can come together, enjoy good food and coffee, and feel
              completely at home.
            </p>

            <p>
              From a quiet morning coffee to an afternoon with friends, every
              visit is an opportunity to slow down and enjoy the moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= IMAGE ================= */}
      <section className="story-image-section">
        <motion.div
          className="story-large-image"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/indabo-garden.jpg"
            alt="Indabo Café garden"
          />
        </motion.div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="section philosophy-section">
        <div className="container">
          <motion.div
            className="section-heading centered"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">WHAT WE BELIEVE</p>

            <h2>
              The Indabo
              <br />
              <em>philosophy.</em>
            </h2>
          </motion.div>

          <div className="philosophy-grid">
            <motion.article
              className="philosophy-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Coffee size={30} />

              <span>01</span>

              <h3>Good Food</h3>

              <p>
                Thoughtfully prepared food made to be enjoyed, shared, and
                remembered.
              </p>
            </motion.article>

            <motion.article
              className="philosophy-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Heart size={30} />

              <span>02</span>

              <h3>Warm Hospitality</h3>

              <p>
                Every guest should feel welcome, comfortable, and appreciated
                from the moment they arrive.
              </p>
            </motion.article>

            <motion.article
              className="philosophy-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Users size={30} />

              <span>03</span>

              <h3>Connection</h3>

              <p>
                We believe cafés are about people just as much as they are
                about food and coffee.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="story-experience">
        <div className="story-experience-image">
          <img
            src="/images/indabo-gallery-3.jpg"
            alt="Indabo Café experience"
          />
        </div>

        <motion.div
          className="story-experience-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">THE EXPERIENCE</p>

          <h2>
            Come as you are.
            <br />
            <em>Stay awhile.</em>
          </h2>

          <p>
            Whether you're starting your day, meeting someone special, working
            over coffee, or simply looking for somewhere peaceful to unwind,
            Indabo is made for your moment.
          </p>

          <Link to="/menu" className="text-link">
            Explore our menu
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section story-cta">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">YOUR TABLE IS WAITING</p>

            <h2>
              Make a moment
              <br />
              <em>of it.</em>
            </h2>

            <Link to="/reservations" className="button button-primary">
              Reserve a Table
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Story;