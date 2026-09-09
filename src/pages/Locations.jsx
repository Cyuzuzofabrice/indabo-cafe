import { motion } from "framer-motion";
import SEO from "../components/SEO";
import {
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const locations = [
  {
    name: "Kiyovu",
    address: "KN 54 St, Across from Stipp Hotel",
    image: "/images/indabo-garden.jpg",
    description:
      "A peaceful garden café in the heart of Kiyovu, surrounded by greenery and a relaxed atmosphere.",
  },
  {
    name: "Kimihurura",
    address: "11 KG 670 St",
    image: "/images/indabo-gallery-1.jpg",
    description:
      "A beautiful Indabo experience in Kimihurura, perfect for coffee, food, conversations, and slow moments.",
  },
];

const hours = [
  ["Sunday", "8:00 AM – 9:00 PM"],
  ["Monday", "8:00 AM – 9:00 PM"],
  ["Tuesday", "Closed"],
  ["Wednesday", "8:00 AM – 9:00 PM"],
  ["Thursday", "8:00 AM – 9:00 PM"],
  ["Friday", "8:00 AM – 9:00 PM"],
  ["Saturday", "8:00 AM – 9:00 PM"],
];

function Locations() {
  return (
    <div className="locations-page">
      <SEO
  title="Locations in Kigali"
  description="Find Indabo Café in Kiyovu and Kimihurura, Kigali, Rwanda. Discover our café locations, addresses and contact details."
/>

      {/* HERO */}
      <section className="locations-hero">
        <div className="locations-hero-overlay" />

        <div className="container locations-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            FIND US IN KIGALI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Come find
            <br />
            <em>your Indabo.</em>
          </motion.h1>

          <motion.p
            className="locations-hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Two beautiful spaces in Kigali, created for good food,
            great coffee, and meaningful moments.
          </motion.p>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="section locations-section">
        <div className="container">

          <motion.div
            className="section-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">OUR LOCATIONS</p>

            <h2>
              Two places.
              <br />
              <em>One Indabo.</em>
            </h2>
          </motion.div>

          <div className="locations-grid">

            {locations.map((location, index) => (
              <motion.article
                className="location-card"
                key={location.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
              >
                <div className="location-image">
                  <img
                    src={location.image}
                    alt={`Indabo Café ${location.name}`}
                    loading="lazy"
                  />
                </div>

                <div className="location-card-content">
                  <p className="eyebrow">
                    0{index + 1}
                  </p>

                  <h3>{location.name}</h3>

                  <p className="location-description">
                    {location.description}
                  </p>

                  <div className="location-detail">
                    <MapPin size={17} />
                    <span>{location.address}, Kigali, Rwanda</span>
                  </div>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Indabo%20Cafe%20Kigali"
                    target="_blank"
                    rel="noreferrer"
                    className="location-link"
                  >
                    Get Directions
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT + HOURS */}
      <section className="section location-info-section">
        <div className="container">

          <div className="location-info-grid">

            <motion.div
              className="location-info-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="info-icon">
                <Phone size={20} />
              </div>

              <p className="eyebrow">CALL US</p>

              <h3>+250 788 724 292</h3>

              <p>
                For reservations, questions, or anything else,
                feel free to get in touch.
              </p>

              <a
                href="tel:+250788724292"
                className="text-link"
              >
                Call Indabo
                <ArrowUpRight size={16} />
              </a>
            </motion.div>

            <motion.div
              className="location-info-card hours-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="info-icon">
                <Clock size={20} />
              </div>

              <p className="eyebrow">OPENING HOURS</p>

              <div className="hours-list">
                {hours.map(([day, time]) => (
                  <div className="hours-row" key={day}>
                    <span>{day}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section locations-cta">
        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">SEE YOU SOON</p>

            <h2>
              Your table
              <br />
              <em>is waiting.</em>
            </h2>

            <a
              href="tel:+250788724292"
              className="button button-primary"
            >
              Call to Reserve
              <Phone size={17} />
            </a>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default Locations;