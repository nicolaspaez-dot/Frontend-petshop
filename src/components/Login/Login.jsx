import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-container">
        <IoArrowBack 
          className="back-arrow"
          onClick={() => navigate('/')}
        />
        
        <h1 className="login-title">Iniciar Sesión</h1>
        
        <form className="login-form">
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Contraseña"
            />
          </div>
          
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
        
        <div className="register-link">
          ¿No tienes una cuenta?<Link to="/register">Registrarse</Link>
        </div>
      </div>
    </div>
  );
}

export default Login; 