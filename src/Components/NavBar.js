import React from "react";

export default function NavBar() {
  return (
    <div className="header-nav flex center">
      <div className="header-nav-item">
        <a href="/">Home</a>
      </div>
      <div className="header-nav-item">
        <a href="/#">Events</a>
      </div>
      <div className="header-nav-item">
        <a href="/#">Galleries</a>
      </div>
      <div className="header-nav-item">
        <a href="/About">About Me</a>
      </div>
    </div>
  );
}
