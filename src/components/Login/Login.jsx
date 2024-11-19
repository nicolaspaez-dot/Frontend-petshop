import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import './Login.css';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const respuesta = await axios.post('http://localhost:3000/usuarios/iniciar-sesion', {
            email,
            password,
        });
        
        localStorage.setItem('token', respuesta.data.token);
        navigate('/home');

    } catch (error) {
        console.error('Error al iniciar sesión:', error.response?.data || error.message);
        setMensaje('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <IoArrowBack 
          className="back-arrow"
          onClick={() => navigate('/')}
        />
        
        <h1 className="login-title">Iniciar Sesión</h1>
        
        <form className="login-form" onSubmit={handleSubmit}>
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
          </div>
          
          <Link to="/recuperacion" className="forgot-password-link">
            ¿Olvidaste tu contraseña?
          </Link>
          
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
        
        {mensaje && <p className="message">{mensaje}</p>}
        
        <div className="register-link">
          ¿No tienes una cuenta? <Link to="/register">Registrarse</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;