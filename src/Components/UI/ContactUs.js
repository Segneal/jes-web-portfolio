import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../Assets/Styles/contact.css";
import Instagram from "../../Assets/Images/logos/Instagram.png";
import Mail from "../../Assets/Images/logos/Mail.png";
import { Navigate } from "react-router-dom";

const SERVICE_ID = "service_ryj2mk3";
const TEMPLATE_ID = "template_g3vsfqy";
const PUBLIC_KEY = "bgsv6X6__kLcYffCS";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        result.status === 200 ? (
          <Navigate to="/" />
        ) : (
          console.log(result.status)
        );
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-body">
      <div className="contact-form">
        <div className="contact-title">
          <h1>Escribime</h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="contact-form-content">
            <label>Nombre</label>
            <input
              className="contact-input"
              type="text"
              name="user_name"
              required
            />
            <label>Email</label>
            <input
              className="contact-input"
              type="email"
              name="user_email"
              required
            />
            <label>Mensaje</label>
            <textarea className="contact-input" name="message" required />
            <button className="contact-button" type="submit" value="Send">
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="contact-info-wrapper">
        <div className="contact-title">
          <h1>Informacion de contacto</h1>
        </div>
        <p>Cualquier sugerencia es bienvenida.</p>
        <div className="contact-icons">
          <div className="icons">
            <img src={Instagram} alt=""></img>
            <h1>@irene_moda_ybelleza</h1>
          </div>
          <div className="icons">
            <img src={Mail} alt=""></img>
            <h1>irenevalleji25@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
