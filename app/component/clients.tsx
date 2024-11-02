import React, { useState } from "react";
import "./styles/clients.css";

export const Clients = () => {
  const [isColor, setIsColor] = useState(false);

  return (
    <div className="panelclients bg-gradient-to-br from-sky-400
     via-sky-100 to-sky-400 shadow-lg transform">
      <h4 className="font-extrabolds">
        Forma parte de nuestra comunidad de clientes satisfechos{" "}
      </h4>
      <div
        className={`logos ${isColor ? "color" : "grayscale"}`}
        onMouseEnter={() => setIsColor(true)}
        onMouseLeave={() => setIsColor(false)}
      >
        <div className="clients">
          <a
            href="https://dentlinsclmsadminsys.info/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/logo1D.png" alt="Client1" />
          </a>
          <a
            href="https://www.5rives.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/5rives.png" alt="Client2" />
          </a>
          <a
            href="https://intelimarket.mx/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/logointelimarket.png" alt="Client3" />
          </a>
        </div>
      </div>
    </div>
  );
};
