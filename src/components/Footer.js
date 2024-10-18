import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-column">
        <h2 className="footer-title">Contáctanos</h2>
        <p>📍 Julia@SushihushiMaestroroshi.com</p>
        <p>📞 758 104 0495</p>
      </div>

      <div className="footer-column">
        <h2 className="footer-title">Síguenos</h2>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>

    <p className="footer-copyright">
      © 2024 Maestro Roshi Hushi Hoshi. Todos los derechos reservados.
    </p>
  </footer>
);

export default Footer;
