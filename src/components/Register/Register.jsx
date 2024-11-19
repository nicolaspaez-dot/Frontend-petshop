import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir recarga de la página

    if (password !== confirmPassword) {
      setMensaje('Las contraseñas no coinciden');
      return;
    }

    try {
      // Enviar datos al backend
      const respuesta = await axios.post('http://localhost:3000/usuarios', {
        nombre,
        email,
        password,
      });

      // Mostrar mensaje de éxito y redirigir al login
      setMensaje('Registro exitoso');
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirigir después de 2 segundos
    } catch (error) {
      console.error('Error al registrar usuario:', error.response?.data || error.message);
      setMensaje('Error al registrar usuario. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <IoArrowBack 
          className="back-arrow"
          onClick={() => navigate('/')}
        />
        
        <h1 className="register-title">Crear Cuenta</h1>
        
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Nombre completo"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="password-strength medium"></div>
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
          
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>
        
        {mensaje && <p className="message">{mensaje}</p>}
        
        <div className="login-link">
          ¿Ya tienes una cuenta?<Link to="/login">Iniciar sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
