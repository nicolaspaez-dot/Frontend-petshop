import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Nosotros</h3>
          <p>Tu tienda de confianza para el cuidado de tus mascotas</p>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: contacto@petshop.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Dirección: Calle Principal 123</p>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 PetShop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer; 