import React from "react";

export default function NavBar() {
  return (
    <div className="header-nav flex center">
      <div className="header-nav-item">
        <a href="/">Home</a>
      </div>
      <div className="header-nav-item">
        <a href="/events">Events</a>
      </div>
      <div className="header-nav-item">
        <a href="/galleries">Galleries</a>
      </div>
      <div className="header-nav-item">
        <a href="/about">About Me</a>
      </div>
    </div>
  );
}
