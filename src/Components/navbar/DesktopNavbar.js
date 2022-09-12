import React from "react";
import { Link } from "react-router-dom";

export default function DesktopNavbar() {
  return (
    <div className="header-nav flex center">
      <div className="nav-item">
        <Link to="/">Principal</Link>
      </div>

      <div className="nav-item">
        <Link to="/galleries">Galerias</Link>
      </div>
      <div className="nav-item">
        <Link to="/about">Sobre mi</Link>
      </div>
      <div className="nav-item">
        <Link to="/contact">Contacto</Link>
      </div>
    </div>
  );
}
