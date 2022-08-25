import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../../Assets/Images/menu.png";

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
            <Link to="/">Home</Link>
          </div>
          <div
            className="nav-item mobile-item"
            onClick={() => setShowNavBar(false)}
          >
            <Link to="/galleries">Galleries</Link>
          </div>
          <div
            className="nav-item mobile-item"
            onClick={() => setShowNavBar(false)}
          >
            <Link to="/about">About Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
