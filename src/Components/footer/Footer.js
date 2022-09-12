import React from "react";
import Instagram from "../../Assets/Images/logos/Instagram.png";

const INSTA_URL = "https://www.instagram.com/irene_moda_ybelleza/";
export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="social-networks">
        <div className="social-icons">
          <a href={`${INSTA_URL}`}>
            <img src={Instagram} alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
}
