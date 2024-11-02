import React from "react";
import "./styles/server.css";

export const Server = () => {
  return (
    <div className="server">
      <div className="panel">
        <img src="/image1.jpg" alt="Coming Soon" />
        <h4>Diseño y contrucción de sitios web</h4>
        <p>
          Diseñamos y construimos tu sitio web adaptable para dispositivos
          móviles, con las mejores prácticas para su posicionamiento orgánico en
          internet
        </p>
      </div>
      <div className="panel">
        <img src="/image2.jpg" alt="Coming Soon" />
        <h4>Desarrollo de software personalizado</h4>
        <p>
          Desarrollamos software para soluciones interactivas y atractivas.
          Tanto si es una empresa emergente como una corporación, podemos
          ayudarlo a transformar grandes ideas en software utilizable para crear
          productos atractivos.
        </p>
      </div>

      <div className="panel">
        <img src="/image3.jpg" alt="Coming Soon" />
        <h4>Desarrollo de aplicaciones móviles</h4>
        <p>Desarrollamos aplicaciones móviles compatibles con android y ios</p>
      </div>
      <div className="panel">
        <img src="/image4.jpg" alt="Coming Soon" />
        <h4>Tienes una idea para una aplicación</h4>
        <p>
          Te brindamos ayuda para perfeccionar tu idea y convertirlo en un
          proyecto viable, seremos tu equipo técnico que lo haga realidad.
        </p>
      </div>
    </div>
  );
};
