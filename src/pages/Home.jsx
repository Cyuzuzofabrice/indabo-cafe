import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import FeaturedMenu from "../components/FeaturedMenu";
import GardenSection from "../components/GardenSection";
import Gallery from "../components/Gallery";
import Reviews from "../components/Reviews";
import Locations from "../components/Locations";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <SEO
        title="Coffee, Food & Garden Café in Kigali"
        description="Discover Indabo Café in Kigali, Rwanda — a welcoming garden café serving coffee, food and memorable moments in Kiyovu and Kimihurura."
      />

      <Navbar />

      <main>
        <Hero />
        <Intro />
        <FeaturedMenu />
        <GardenSection />
        <Gallery />
        <Reviews />
        <Locations />
      </main>

      <Footer />
    </>
  );
}

export default Home;