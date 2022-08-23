import React from "react";

export default function DesktopNavbar() {
  return (
    <div className="header-nav flex center">
      <div className="nav-item">
        <a href="/">Principal</a>
      </div>
      {/* <div className="nav-item">
        <a href="/events">Events</a>
      </div> */}
      <div className="nav-item">
        <a href="/galleries">Galerias</a>
      </div>
      <div className="nav-item">
        <a href="/about">Sobre mi</a>
      </div>
    </div>
  );
}
