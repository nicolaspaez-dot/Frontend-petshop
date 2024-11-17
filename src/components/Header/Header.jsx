import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img src="/media/images/PetShop Logo.png" alt="PetShop" className="logo" />
        </Link>

        <nav className="nav-menu">
          <Link to="/" className="nav-link">Productos</Link>
          <Link to="/servicios" className="nav-link">Servicios</Link>
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </nav>

        <div className="header-actions">
          <Link to="/cart" className="cart-button">
            <FaShoppingCart />
            <span>Carrito</span>
          </Link>
          <Link to="/login" className="login-button">
            <FaUser />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header; 