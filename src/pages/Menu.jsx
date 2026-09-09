import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
const menuCategories = [
  {
    number: "01",
    name: "Coffee & Drinks",
    description:
      "From carefully prepared coffee to refreshing drinks for every moment.",
    items: [
      { name: "Espresso", description: "Rich and concentrated", price: "—" },
      { name: "Cappuccino", description: "Espresso with silky milk", price: "—" },
      { name: "Café Latte", description: "Smooth espresso and steamed milk", price: "—" },
      { name: "Iced Coffee", description: "Cold, refreshing coffee", price: "—" },
    ],
  },
  {
    number: "02",
    name: "Breakfast",
    description:
      "A delicious way to start the day, made for slow mornings.",
    items: [
      { name: "Indabo Breakfast", description: "Chef's breakfast selection", price: "—" },
      { name: "Eggs & Toast", description: "Fresh eggs with toasted bread", price: "—" },
      { name: "Pancakes", description: "Light and freshly prepared", price: "—" },
      { name: "Fruit Bowl", description: "Fresh seasonal fruits", price: "—" },
    ],
  },
  {
    number: "03",
    name: "Lunch & Dinner",
    description:
      "Satisfying meals prepared for good conversations around the table.",
    items: [
      { name: "Chef's Special", description: "Ask about today's selection", price: "—" },
      { name: "Grilled Chicken", description: "Freshly prepared and seasoned", price: "—" },
      { name: "Fresh Salad", description: "Crisp and refreshing", price: "—" },
      { name: "Pasta", description: "Comfort food, Indabo style", price: "—" },
    ],
  },
  {
    number: "04",
    name: "Desserts",
    description:
      "Something sweet to finish your Indabo experience.",
    items: [
      { name: "Chocolate Cake", description: "Rich and indulgent", price: "—" },
      { name: "Cheesecake", description: "Creamy and smooth", price: "—" },
      { name: "Ice Cream", description: "A refreshing sweet treat", price: "—" },
      { name: "Daily Dessert", description: "Ask what's fresh today", price: "—" },
    ],
  },
];

function Menu() {
  return (
    <div className="menu-page">
      {/* HERO */}
      <SEO
  title="Menu"
  description="Explore the food and drinks at Indabo Café in Kigali, Rwanda, from coffee and breakfast to lunch, dinner and desserts."
/>
      <section className="menu-hero">
        <div className="menu-hero-overlay" />

        <div className="container menu-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            THE INDABO MENU
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Something for
            <br />
            <em>every moment.</em>
          </motion.h1>

          <motion.p
            className="menu-hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our selection of coffee, breakfast, meals, drinks, and
            desserts.
          </motion.p>
        </div>
      </section>

      {/* MENU */}
      <main>
        {menuCategories.map((category, categoryIndex) => (
          <section
            className={`section menu-category ${
              categoryIndex % 2 === 1 ? "menu-category-alt" : ""
            }`}
            key={category.name}
          >
            <div className="container">
              <div className="menu-category-header">
                <motion.div
                  className="menu-category-number"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {category.number}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="eyebrow">{category.name.toUpperCase()}</p>

                  <h2>{category.name}</h2>

                  <p className="menu-category-description">
                    {category.description}
                  </p>
                </motion.div>
              </div>

              <div className="menu-items">
                {category.items.map((item, index) => (
                  <motion.article
                    className="menu-item"
                    key={item.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                  >
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>

                    <span>{item.price}</span>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="section menu-cta">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="eyebrow">READY FOR YOUR TABLE?</p>

              <h2>
                Come hungry.
                <br />
                <em>Leave happy.</em>
              </h2>

              <Link to="/reservations" className="button button-primary">
                Reserve a Table
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Menu;