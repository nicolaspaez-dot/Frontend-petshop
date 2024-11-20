import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import './NuevaContrasena.css';
import axios from 'axios';

function NuevaContrasena() {
  const navigate = useNavigate();
  
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setMensaje('Las contraseñas no coinciden');
      return;
    }

    try {
      // TODO: Reemplazar con tu endpoint real
      const respuesta = await axios.post('http://localhost:3000/usuarios/nueva-contrasena', {
        password,
        // Aquí podrías necesitar un token o ID de usuario desde la URL o localStorage
      });
      
      setMensaje('Contraseña actualizada exitosamente');
      // Redirigir al login después de 2 segundos
      setTimeout(() => navigate('/login'), 2000);

    } catch (error) {
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