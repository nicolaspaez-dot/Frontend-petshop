import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import './NuevaContrasena.css';
import axios from 'axios';

function NuevaContrasena() {
  const navigate = useNavigate(); // Hook para navegar entre páginas
  const { token } = useParams(); // Obtiene el token desde la URL (ejemplo: /reset-password/:token)

  // Estados para manejar las contraseñas y mensajes de feedback
  const [password, setPassword] = useState(''); // Nueva contraseña
  const [confirmPassword, setConfirmPassword] = useState(''); // Confirmación de la nueva contraseña
  const [mensaje, setMensaje] = useState(''); // Mensaje de éxito o error

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario (recargar la página)

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setMensaje('Las contraseñas no coinciden');
      return; // Termina la función si no coinciden
    }

    try {
      // Realiza una solicitud POST al backend para actualizar la contraseña
      const respuesta = await axios.post('http://localhost:3000/usuarios/cambiar-contrasena', {
        token, // Enviar el token recibido en el email
        nuevaContrasena: password, // Nueva contraseña ingresada por el usuario
      });

      // Si la solicitud es exitosa, mostrar mensaje de éxito
      setMensaje('Contraseña actualizada exitosamente');
      
      // Redirigir al usuario al login después de 2 segundos
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      // Mostrar un mensaje de error si algo falla
      console.error('Error al cambiar la contraseña:', error.response?.data || error.message);
      setMensaje('Error al cambiar la contraseña. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="nueva-contrasena-page">
      <div className="nueva-contrasena-container">
        <IoArrowBack
          className="back-arrow"
          onClick={() => navigate('/login')}
        />

        <h1 className="nueva-contrasena-title">Nueva Contraseña</h1>

        <form className="nueva-contrasena-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="password"
              placeholder="Nueva contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Confirmar contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="cambiar-contrasena-button">
            Cambiar Contraseña
          </button>
        </form>

        {mensaje && <p className="message">{mensaje}</p>}
      </div>
    </div>
  );
}

export default NuevaContrasena;
