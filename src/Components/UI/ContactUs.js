import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../Assets/Styles/contact.css";
import Instagram from "../../Assets/Images/logos/Instagram.png";
import Mail from "../../Assets/Images/logos/Mail.png";
import Spinner from "../../Assets/Images/Spinner.gif";
import MessageModal from "./MessageModal";

const SERVICE_ID = "service_ryj2mk3";
const TEMPLATE_ID = "template_g3vsfqy";
const PUBLIC_KEY = "bgsv6X6__kLcYffCS";

const STATUS_RESPONSE = 200;

export const ContactUs = () => {
  const [loading, setLoading] = React.useState(false);
  const [messageSent, setMessageSent] = React.useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        if (result.status === STATUS_RESPONSE) {
          console.log("Email sent");
          setMessageSent(true);
          setLoading(false);
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-body">
      <section className="contact-form">
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
            {loading ? (
              <div className="contact-sending-message">
                <img src={Spinner} alt=""></img>
              </div>
            ) : (
              <button className="contact-button" type="submit" value="Send">
                Enviar
              </button>
            )}
            {messageSent && <h1>Mensaje Enviado</h1>}
          </div>
        </form>
      </section>
      <section className="contact-info-wrapper">
        <div className="contact-title">
          <h1>Informacion de contacto</h1>
        </div>
        <p>Cualquier sugerencia es bienvenida.</p>
        <span className="contact-container">
          <div className="icons">
            <img src={Instagram} alt=""></img>
          </div>
          <h1>@irene_moda_ybelleza</h1>
        </span>
        <span className="contact-container">
          <div className="icons">
            <img src={Mail} alt=""></img>
          </div>
          <h1>irenevalleji25@gmail.com</h1>
        </span>
      </section>
    </div>
  );
};
