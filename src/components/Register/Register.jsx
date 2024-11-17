import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="register-page">
      <div className="register-container">
        <IoArrowBack 
          className="back-arrow"
          onClick={() => navigate('/')}
        />
        
        <h1 className="register-title">Crear Cuenta</h1>
        
        <form className="register-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Nombre completo"
              autoComplete="off"
            />
          </div>
          
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
            <div className="password-strength medium"></div>
          </div>
          
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Confirmar contraseña"
            />
          </div>
          
          <button type="submit" className="register-button">
            Registrarse
          </button>
        </form>
        
        <div className="login-link">
          ¿Ya tienes una cuenta?<Link to="/login">Iniciar sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default Register; 