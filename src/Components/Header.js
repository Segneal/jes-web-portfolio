import React from "react";
import "../Assets/Styles/styles.css";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="header-wrapper flex">
      <div className="header-container">
        <a href="/" className="header-title">
          Irene Vallejo
        </a>
        <NavBar />
      </div>
    </header>
  );
}
