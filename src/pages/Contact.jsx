import { motion } from "framer-motion";
import SEO from "../components/SEO";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <div className="contact-page">
      <SEO
  title="Contact Indabo Café"
  description="Get in touch with Indabo Café in Kigali, Rwanda. Contact us about reservations, questions, locations and your next visit."
/>

      {/* HERO */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />

        <div className="container contact-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            GET IN TOUCH
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Let's start a
            <br />
            <em>conversation.</em>
          </motion.h1>

          <motion.p
            className="contact-hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have a question, want to make a reservation, or simply want
            to say hello? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section contact-section">
        <div className="container">

          <div className="contact-grid">

            {/* LEFT SIDE */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">CONTACT INDABO</p>

              <h2>
                We'd love to
                <br />
                <em>hear from you.</em>
              </h2>

              <p className="contact-description">
                Whether you're planning a visit, asking about our menu,
                or looking to connect with the Indabo team, reach out to us.
              </p>

              {/* CONTACT DETAILS */}
              <div className="contact-details">

                {/* PHONE */}
                <a
                  href="tel:+250788724292"
                  className="contact-detail"
                >
                  <div className="contact-icon">
                    <Phone size={19} />
                  </div>

                  <div>
                    <span>PHONE</span>
                    <strong>+250 788 724 292</strong>
                  </div>

                  <ArrowUpRight size={17} />
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:hello@indabocafe.com"
                  className="contact-detail"
                >
                  <div className="contact-icon">
                    <Mail size={19} />
                  </div>

                  <div>
                    <span>EMAIL</span>
                    <strong>hello@indabocafe.com</strong>
                  </div>

                  <ArrowUpRight size={17} />
                </a>

                {/* LOCATION */}
                <div className="contact-detail">
                  <div className="contact-icon">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <span>LOCATIONS</span>
                    <strong>Kiyovu & Kimihurura, Kigali</strong>
                  </div>
                </div>

              </div>

              {/* SOCIAL */}
              <div className="contact-social">
                <p className="eyebrow">FOLLOW US</p>

                <a
                  href="https://www.instagram.com/indabo_cafe/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Indabo Café Instagram"
                >
                  <span className="instagram-symbol">◎</span>

                  <span>Instagram</span>

                  <ArrowUpRight size={16} />
                </a>
              </div>

            </motion.div>

            {/* RIGHT SIDE - FORM */}
            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">SEND A MESSAGE</p>

              <h3>
                Tell us
                <br />
                <em>what's on your mind.</em>
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  alert(
                    "Thank you! Your message has been received."
                  );
                }}
              >

                {/* NAME + EMAIL */}
                <div className="contact-form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                </div>

                {/* SUBJECT */}
                <div className="form-group">
                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div className="form-group">
                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    placeholder="Write your message..."
                    required
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="button button-primary contact-submit"
                >
                  Send Message
                  <Send size={17} />
                </button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* IMAGE SECTION */}
      <section className="contact-image-section">

        <div className="contact-image">

          <img
            src="/images/indabo-garden.jpg"
            alt="Indabo Café garden"
            loading="lazy"
          />

          <div className="contact-image-overlay">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="eyebrow">
                INDABO CAFÉ
              </p>

              <h2>
                Good coffee.
                <br />
                <em>Good people.</em>
              </h2>
            </motion.div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="section contact-cta">

        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="eyebrow">
              READY TO VISIT?
            </p>

            <h2>
              Your next
              <br />
              <em>coffee moment awaits.</em>
            </h2>

            <a
              href="tel:+250788724292"
              className="button button-primary"
            >
              Call Indabo
              <Phone size={17} />
            </a>

          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default Contact;