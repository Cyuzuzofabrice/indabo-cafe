
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">

        {/* =========================
            FOOTER TOP
        ========================== */}
        <div className="footer-top">

          {/* BRAND */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img
                src="/images/logo.jpg"
                alt="Indabo Café"
              />
            </Link>

            <p className="footer-tagline">
              Good coffee.
              <br />
              Good food.
              <br />
              Good moments.
            </p>

            <Link
              to="/reservations"
              className="footer-reserve"
            >
              Reserve a Table
              <ArrowUpRight size={16} />
            </Link>
          </div>


          {/* =========================
              NAVIGATION
          ========================== */}
          <div className="footer-column">

            <p className="footer-label">
              EXPLORE
            </p>

            <Link to="/">
              Home
            </Link>

            <Link to="/menu">
              Menu
            </Link>

            <Link to="/story">
              Our Story
            </Link>

            <Link to="/gallery">
              Gallery
            </Link>

            <Link to="/locations">
              Locations
            </Link>

            <Link to="/contact">
              Contact
            </Link>

            <Link to="/reservations">
              Reservations
            </Link>

          </div>


          {/* =========================
              VISIT US
          ========================== */}
          <div className="footer-column footer-visit">

            <p className="footer-label">
              VISIT US
            </p>

            <div className="footer-detail">
              <MapPin size={17} />

              <div>
                <strong>
                  Kiyovu
                </strong>

                <span>
                  KN 54 St, Kigali
                </span>
              </div>
            </div>


            <div className="footer-detail">
              <MapPin size={17} />

              <div>
                <strong>
                  Kimihurura
                </strong>

                <span>
                  11 KG 670 St, Kigali
                </span>
              </div>
            </div>


            <a
              href="tel:+250788724292"
              className="footer-detail footer-phone"
            >
              <Phone size={17} />

              <div>
                <strong>
                  +250 788 724 292
                </strong>

                <span>
                  Call Indabo
                </span>
              </div>
            </a>

          </div>


          {/* =========================
              SOCIAL
          ========================== */}
          <div className="footer-column">

            <p className="footer-label">
              FOLLOW US
            </p>

            <a
              href="https://www.instagram.com/indabo_cafe/"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
              aria-label="Indabo Café Instagram"
            >

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >

                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />

              </svg>

              <span>
                Instagram
              </span>

              <ArrowUpRight size={15} />

            </a>

          </div>

        </div>


        {/* =========================
            FOOTER BOTTOM
        ========================== */}
        <div className="footer-bottom">

          <span>
            © {year} Indabo Café. All rights reserved.
          </span>

          <span className="footer-location">
            Kigali, Rwanda
            <ArrowUpRight size={13} />
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

