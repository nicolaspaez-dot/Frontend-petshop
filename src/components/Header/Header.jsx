import React, { useState, useEffect } from 'react'; // Importa módulos necesarios de React para usar estado y efectos.
import { Link } from 'react-router-dom'; // Importa Link para navegación interna sin recargar la página.
import { FaShoppingCart, FaUser } from 'react-icons/fa'; // Importa íconos de FontAwesome para mostrar un carrito de compras y un usuario.
import './Header.css'; // Importa estilos CSS específicos para el componente Header.

// Componente funcional Header
function Header() {
  // Define un estado llamado `isScrolled` para controlar si la página se ha desplazado más de 50px.
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect para manejar el efecto de desplazamiento de la ventana.
  useEffect(() => {
    // Función que se ejecuta cuando la ventana se desplaza. Si el desplazamiento vertical (scrollY) es mayor a 50, actualiza `isScrolled`.
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    // Agrega un evento `scroll` a la ventana cuando el componente se monta.
    window.addEventListener('scroll', handleScroll);
    // Limpia el evento `scroll` al desmontar el componente para evitar fugas de memoria.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Renderizado del contenido del encabezado.
  return (
    // La clase `scrolled` se agrega dinámicamente a `header` si `isScrolled` es `true`.
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        {/* Logo con enlace a la página de inicio */}
        <Link to="/" className="logo-container">
          <img src="/media/images/PetShop Logo.png" alt="PetShop" className="logo" />
        </Link>

        {/* Navegación principal del sitio */}
        <nav className="nav-menu">
          {/* Enlaces de navegación internos */}
          <Link to="/" className="nav-link">Productos</Link>
          <Link to="/servicios" className="nav-link">Servicios</Link>
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
          <Link to="/contacto" className="nav-link">Contacto</Link>
        </nav>

        {/* Acciones en el encabezado (carrito de compras y botón de inicio de sesión) */}
        <div className="header-actions">
          {/* Enlace al carrito de compras con ícono */}
          <Link to="/cart" className="cart-button">
            <FaShoppingCart /> {/* Ícono del carrito de compras */}
            <span>Carrito</span> {/* Texto "Carrito" */}
          </Link>
          {/* Enlace al inicio de sesión con ícono */}
          <Link to="/login" className="login-button">
            <FaUser /> {/* Ícono de usuario */}
            <span>Login</span> {/* Texto "Login" */}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header; // Exporta el componente Header para ser utilizado en otras partes de la aplicación.
