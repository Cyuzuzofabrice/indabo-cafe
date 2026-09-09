import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const items = [
  {
    name: "Specialty Coffee",
    description: "Freshly brewed coffee made with care.",
  },
  {
    name: "Breakfast",
    description: "A fresh and satisfying start to your day.",
  },
  {
    name: "Lunch",
    description: "Delicious meals prepared with fresh ingredients.",
  },
];

function FeaturedMenu() {
  return (
    <section className="section menu-section">
      <div className="container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="eyebrow">WHAT'S ON THE TABLE</p>

            <h2>
              Made fresh,
              <br />
              <em>served with love.</em>
            </h2>
          </div>

          <Link to="/menu" className="text-link">
            View full menu
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        <div className="menu-grid">
          {items.map((item, index) => (
            <motion.article
              className="menu-card"
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >
              <span className="menu-number">
                0{index + 1}
              </span>

              <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>

              <strong>Discover</strong>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedMenu;