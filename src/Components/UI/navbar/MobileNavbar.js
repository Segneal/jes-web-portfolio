import React, { useState } from "react";
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
    <>
      <div className="menu-icon" onClick={toggleShowNavbar}>
        <img src={MenuIcon}></img>
      </div>
      {showNavBar && (
        <div
          className="modal-overlay"
          onClick={() => setShowNavBar(false)}
        ></div>
      )}
      <div className={`navbar-modal ${shouldShowModal()}`}>
        <div className="mobile-navbar">
          <div className="nav-item mobile-item">
            <a href="/">Home</a>
          </div>
          {/* <div className="nav-item mobile-item">
            <a href="/events">Events</a>
          </div> */}
          <div className="nav-item mobile-item">
            <a href="/galleries">Galleries</a>
          </div>
          <div className="nav-item mobile-item">
            <a href="/about">About Me</a>
          </div>
        </div>
      </div>
    </>
  );
}
