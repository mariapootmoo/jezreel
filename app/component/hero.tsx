import React from "react";
import ContactForm from "./contact";

export default function Hero() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url("./hero.jpg")` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-5xl font-bold mb-4">
          Te ayudamos a hacer realidad tu proyecto
        </h1>
        <p className="text-white text-lg">
          Crea soluciones de software sólidas, ágiles y adaptables a las
          necesidades de tu negocio
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
