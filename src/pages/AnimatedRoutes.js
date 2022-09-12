import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./about/About";
import Album from "./album/Album";
import ContactUs from "./contact/ContactUs";
import Gallery from "./gallery/Gallery";
import Home from "./home/Home";

import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route exact path="/galleries" element={<Gallery />} />
        <Route path="galleries/:albumName" element={<Album />} />
      </Routes>
    </AnimatePresence>
  );
}
