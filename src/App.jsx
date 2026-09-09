import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import GalleryPage from "./pages/GalleryPage";
import Locations from "./pages/Locations";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/story" element={<Story />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;