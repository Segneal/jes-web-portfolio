import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../../Assets/Styles/contact.css";
import Instagram from "../../Assets/Images/logos/Instagram.png";
import Mail from "../../Assets/Images/logos/Mail.png";
import { motion } from "framer-motion";

const SERVICE_ID = "service_ryj2mk3";
const TEMPLATE_ID = "template_g3vsfqy";
const PUBLIC_KEY = "bgsv6X6__kLcYffCS";

const defaultForm = { name: "", email: "", message: "" };

export default function ContactUs() {
  const form = useRef();
  const [submitForm, setSubmitForm] = React.useState(defaultForm);
  const [messageSent, setMessageSent] = React.useState(false);
  const handleChange = (e) => {
    setSubmitForm({ ...submitForm, [e.target.name]: e.target.value });
  };

  const setDefaultForm = () => {
    setSubmitForm(defaultForm);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setMessageSent(true);
        setDefaultForm();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="contact-body"
    >
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
              name="name"
              value={submitForm.name}
              onChange={handleChange}
              required
            />
            <label>Email</label>
            <input
              className="contact-input"
              onChange={handleChange}
              type="email"
              name="email"
              value={submitForm.email}
              required
            />
            <label>Mensaje</label>
            <textarea
              onChange={handleChange}
              className="contact-input"
              value={submitForm.message}
              name="message"
              required
            />
            {messageSent ? (
              <div style={{ color: "green" }}>
                <h1>Mensaje enviado</h1>
              </div>
            ) : (
              <button className="contact-button" type="submit" value="Send">
                Enviar
              </button>
            )}
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
    </motion.div>
  );
}
