import { motion } from "framer-motion";
import SEO from "../components/SEO";
import {
  CalendarDays,
  Clock,
  Users,
  Phone,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const name = form.elements["reservation-name"].value;
    const phone = form.elements["reservation-phone"].value;
    const date = form.elements["reservation-date"].value;
    const time = form.elements["reservation-time"].value;
    const guests = form.elements["reservation-guests"].value;
    const email = form.elements["reservation-email"].value;
    const location = form.elements["reservation-location"].value;
    const message = form.elements["reservation-message"].value;

    const whatsappMessage = `
Hello Indabo Café 👋

I would like to request a table.

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Guests: ${guests}
Location: ${location}
Email: ${email || "Not provided"}

Special Request:
${message || "None"}

Please confirm my reservation. Thank you!
`;

    const whatsappUrl = `https://wa.me/250788724292?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
  }

  return (
    <div className="reservations-page">
      <SEO
  title="Reserve a Table"
  description="Reserve a table at Indabo Café in Kigali, Rwanda. Choose your preferred location, date, time and number of guests."
/>

      {/* HERO */}
      <section className="reservations-hero">
        <div className="reservations-hero-overlay" />

        <div className="container reservations-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            RESERVATIONS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Your table.
            <br />
            <em>Your moment.</em>
          </motion.h1>

          <motion.p
            className="reservations-hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Planning a coffee date, lunch with friends, or a special
            evening? Let us prepare a table for you.
          </motion.p>
        </div>
      </section>

      {/* RESERVATION SECTION */}
      <section className="section reservations-section">
        <div className="container">

          <div className="reservations-grid">

            {/* LEFT INFORMATION */}
            <motion.div
              className="reservation-info"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">MAKE IT SPECIAL</p>

              <h2>
                Take a seat.
                <br />
                <em>Stay awhile.</em>
              </h2>

              <p className="reservation-description">
                Tell us when you'd like to visit and we'll do our best
                to make your Indabo experience memorable.
              </p>

              {/* FEATURES */}
              <div className="reservation-features">

                <div className="reservation-feature">
                  <div className="reservation-feature-icon">
                    <CalendarDays size={20} />
                  </div>

                  <div>
                    <h3>Choose your date</h3>
                    <p>
                      Pick the day you'd like to visit us.
                    </p>
                  </div>
                </div>

                <div className="reservation-feature">
                  <div className="reservation-feature-icon">
                    <Clock size={20} />
                  </div>

                  <div>
                    <h3>Select your time</h3>
                    <p>
                      Let us know when we should expect you.
                    </p>
                  </div>
                </div>

                <div className="reservation-feature">
                  <div className="reservation-feature-icon">
                    <Users size={20} />
                  </div>

                  <div>
                    <h3>Tell us your group size</h3>
                    <p>
                      Whether it's two people or a larger group.
                    </p>
                  </div>
                </div>

              </div>

              {/* DIRECT CONTACT */}
              <div className="reservation-direct">

                <p className="eyebrow">
                  PREFER TO TALK?
                </p>

                <div className="reservation-direct-buttons">

                  <a
                    href="tel:+250788724292"
                    className="reservation-contact-link"
                  >
                    <Phone size={18} />
                    <span>Call Us</span>
                  </a>

                  <a
                    href="https://wa.me/250788724292"
                    target="_blank"
                    rel="noreferrer"
                    className="reservation-contact-link"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </a>

                </div>

              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              className="reservation-form-card"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              {!submitted ? (
                <>
                  <p className="eyebrow">
                    RESERVE A TABLE
                  </p>

                  <h3>
                    Tell us about
                    <br />
                    <em>your visit.</em>
                  </h3>

                  <form onSubmit={handleSubmit}>

                    {/* NAME + PHONE */}
                    <div className="reservation-form-row">

                      <div className="form-group">
                        <label htmlFor="reservation-name">
                          Full Name
                        </label>

                        <input
                          id="reservation-name"
                          name="reservation-name"
                          type="text"
                          placeholder="Your name"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="reservation-phone">
                          Phone
                        </label>

                        <input
                          id="reservation-phone"
                          name="reservation-phone"
                          type="tel"
                          placeholder="+250..."
                          required
                        />
                      </div>

                    </div>

                    {/* DATE + TIME */}
                    <div className="reservation-form-row">

                      <div className="form-group">
                        <label htmlFor="reservation-date">
                          Date
                        </label>

                        <input
                          id="reservation-date"
                          name="reservation-date"
                          type="date"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="reservation-time">
                          Time
                        </label>

                        <input
                          id="reservation-time"
                          name="reservation-time"
                          type="time"
                          required
                        />
                      </div>

                    </div>

                    {/* GUESTS + EMAIL */}
                    <div className="reservation-form-row">

                      <div className="form-group">
                        <label htmlFor="reservation-guests">
                          Number of Guests
                        </label>

                        <select
                          id="reservation-guests"
                          name="reservation-guests"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Select guests
                          </option>

                          <option value="1">
                            1 Guest
                          </option>

                          <option value="2">
                            2 Guests
                          </option>

                          <option value="3">
                            3 Guests
                          </option>

                          <option value="4">
                            4 Guests
                          </option>

                          <option value="5">
                            5 Guests
                          </option>

                          <option value="6">
                            6 Guests
                          </option>

                          <option value="7+">
                            7+ Guests
                          </option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="reservation-email">
                          Email
                        </label>

                        <input
                          id="reservation-email"
                          name="reservation-email"
                          type="email"
                          placeholder="you@example.com"
                        />
                      </div>

                    </div>

                    {/* LOCATION */}
                    <div className="form-group">
                      <label htmlFor="reservation-location">
                        Preferred Location
                      </label>

                      <select
                        id="reservation-location"
                        name="reservation-location"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Choose a location
                        </option>

                        <option value="Kiyovu">
                          Kiyovu
                        </option>

                        <option value="Kimihurura">
                          Kimihurura
                        </option>
                      </select>
                    </div>

                    {/* SPECIAL REQUEST */}
                    <div className="form-group">
                      <label htmlFor="reservation-message">
                        Special Request
                      </label>

                      <textarea
                        id="reservation-message"
                        name="reservation-message"
                        rows="4"
                        placeholder="Birthday, special occasion, seating preference..."
                      />
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      className="button button-primary reservation-submit"
                    >
                      Request Reservation
                      <CalendarDays size={17} />
                    </button>

                    <p className="reservation-note">
                      Your reservation is a request. Our team will
                      contact you to confirm your table.
                    </p>

                  </form>
                </>
              ) : (

                /* SUCCESS */
                <motion.div
                  className="reservation-success"
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                >
                  <div className="success-icon">
                    <CheckCircle size={45} />
                  </div>

                  <p className="eyebrow">
                    THANK YOU
                  </p>

                  <h3>
                    Reservation
                    <br />
                    <em>request received.</em>
                  </h3>

                  <p>
                    Your WhatsApp reservation message has been
                    prepared. Please send it to the Indabo team
                    to complete your request.
                  </p>

                  <button
                    className="button button-secondary"
                    onClick={() => setSubmitted(false)}
                  >
                    Make Another Request
                  </button>
                </motion.div>

              )}

            </motion.div>

          </div>
        </div>
      </section>

      {/* IMAGE */}
      <section className="reservation-image-section">

        <img
          src="/images/indabo-garden.jpg"
          alt="Indabo Café garden"
          loading="lazy"
        />

        <div className="reservation-image-overlay">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="eyebrow">
              INDABO CAFÉ
            </p>

            <h2>
              Come for the coffee.
              <br />
              <em>Stay for the feeling.</em>
            </h2>
          </motion.div>

        </div>

      </section>

    </div>
  );
}

export default Reservations;