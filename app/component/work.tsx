import React from "react";
import "./styles/work.css";

export const Work = () => {
  return (
    <div>
      <div className="mission">
        <p>
          Nuestro equipo Jezreel combina un equipo de diseño y desarrollo con
          talento, un conjunto de mejores prácticas y pasión por crear productos
          y lanzarlos al mercado más rápido.
        </p>
        <img src="/image5.jpg" alt="Coming Soon" />
      </div>
      <div className="mission">
        <img src="/image6.png" alt="Coming Soon" />
        <p>
          Ayudamos a nuestros clientes a innovar mediante el diseño de productos
          digitales y experiencias para sus usuarios.
        </p>
      </div>

      <div className="mission">
        <p>
          Implementamos las mejores prácticas en el desarrollo de tu proyecto
          que garantizan la estabilidad y confiabilidad para que únicamente te
          preocupes por la operación y generar ventas.
        </p>
        <img src="/image5.jpg" alt="Coming Soon" />
      </div>
    </div>
  );
};
