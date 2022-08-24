import React from "react";
import { Link } from "react-router-dom";
import "../../Assets/Styles/styles.css";
import NavBar from "./navbar/NavBar";

export default function Header() {
  return (
    <div className="header-wrapper flex">
      <div className="header-container">
        <Link to="/" className="header-title">
          Irene Vallejo
        </Link>
      </div>
    </div>
  );
}
