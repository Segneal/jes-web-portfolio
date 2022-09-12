import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/Styles/styles.css";
import Instagram from "../../Assets/Images/logos/Instagram.png";
export default function Header() {
  return (
    <div className="header-wrapper flex">
      <div className="header-container">
        <Link to="/" className="header-title">
          Irene Vallejo
        </Link>
      </div>
      <div className="social-icon">
        <a href="https://www.instagram.com/irene_moda_ybelleza/">
          <img src={Instagram} alt=""></img>
        </a>
      </div>
    </div>
  );
}
