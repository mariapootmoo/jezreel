import React, { useState } from "react";
import "./styles/contact.css";
import { FaCircleXmark } from "react-icons/fa6";

export const ContactForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="contactSection">
      <button
        className="contactButton bg-gradient-to-b from-sky-950
     via-sky-800 to-sky-950"
        onClick={toggleFormVisibility}
      >
        Contáctanos
      </button>

      {isFormVisible && (
        <div className="overlay">
          <div
            className="modalContent bg-gradient-to-b from-sky-300
     via-sky-700 to-sky-950"
          >
            <div className="start">
              <h2 className="font-bold">
                Iniciemos el siguiente paso en tu empresa
              </h2>
              <button className="closeButton" onClick={toggleFormVisibility}>
                <FaCircleXmark className="text-stone-50" />
              </button>
            </div>

            <form
              action="https://formsubmit.co/mariag.pootmoo@gmail.com"
              method="POST"
            >
              <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message">¿Cómo podemos ayudarte?</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button className="send" type="submit">
                Enviar
              </button>
            </form>
          </div>

          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleFormVisibility}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
