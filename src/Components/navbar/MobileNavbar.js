import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "./menu.png";

export default function MobileNavbar() {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleShowNavbar = () => {
    setShowNavBar((prev) => !prev);
  };

  const shouldShowModal = () => {
    if (showNavBar) {
      document.body.style.overflow = "hidden";
      return "navbar-modal-active";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <div className="mobile-navbar-container">
      <div className="menu-icon" onClick={toggleShowNavbar}>
        <img src={MenuIcon} alt=""></img>
      </div>
      {showNavBar && (
        <div
          className="mobile-modal-overlay"
          onClick={() => setShowNavBar(false)}
        ></div>
      )}
      <div className={`navbar-modal ${shouldShowModal()}`}>
        <div className="mobile-navbar">
          <div
            className="nav-item mobile-item"
            onClick={() => setShowNavBar(false)}
          >
            <Link to="/">Principal</Link>
          </div>
          <div
            className="nav-item mobile-item"
            onClick={() => setShowNavBar(false)}
          >
            <Link to="/galleries">Galerias</Link>
          </div>
          <div
            className="nav-item mobile-item"
            onClick={() => setShowNavBar(false)}
          >
            <Link to="/about">Sobre Mi</Link>
          </div>
          <div
            className="nav-item mobile-item"
            onClick={() => setShowNavBar(false)}
          >
            <Link to="/contact">Contacto</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
