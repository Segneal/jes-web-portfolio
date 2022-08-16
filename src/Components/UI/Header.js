import React from "react";
import "../../Assets/Styles/styles.css";
import NavBar from "./navbar/NavBar";

export default function Header() {
  return (
    <div className="header-wrapper flex">
      <div className="header-container">
        <a href="/" className="header-title">
          Irene Vallejo
        </a>
        <NavBar />
      </div>
    </div>
  );
}
