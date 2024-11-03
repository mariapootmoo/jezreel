import "./styles/footer.css";
import ContactForm from "./contact";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Contfooter = () => {
  return (
    <div className="contactinfo">
      <div className="follow">Siguenos en nuestras redes</div>
      <div className="redes">
        <a href="#" target="_blank" rel="noopener noreferrer"> <FaFacebook /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"> <FaLinkedin /></a>
      </div>
      <div className="info">
        <a href="#" target="_blank" rel="noopener noreferrer">
          Política de Privacidad
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Términos del servicio
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Política de Cookies
        </a>

      </div>

    </div>
  );
};
