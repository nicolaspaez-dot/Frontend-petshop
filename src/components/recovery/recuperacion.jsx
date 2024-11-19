import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import './recuperacion.css';
import axios from 'axios';

function Recuperacion() {
    // Hooks para la navegación y manejo de estado
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Manejador del formulario de recuperación
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Llamada al endpoint de recuperación de contraseña
            const respuesta = await axios.post('http://localhost:3000/usuarios/recuperar-password', {
                email
            });
            
            // Si la petición es exitosa, mostramos mensaje y redirigimos
            setMensaje('Se ha enviado un correo con las instrucciones');
            setTimeout(() => {
                navigate('/login');
            }, 3000);

        } catch (error) {
            console.error('Error:', error.response?.data || error.message);
            setMensaje('No se encontró una cuenta con ese correo electrónico');
        }
    };

    return (
        <div className="recovery-page">
            <div className="recovery-container">
                {/* Botón para regresar al login */}
                <IoArrowBack 
                    className="back-arrow"
                    onClick={() => navigate('/login')}
                />
                
                <h1 className="recovery-title">Recuperar Contraseña</h1>
                
                {/* Texto explicativo */}
                <p className="recovery-description">
                    Ingresa tu correo electrónico y te enviaremos las instrucciones
                    para restablecer tu contraseña.
                </p>

                <form className="recovery-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <button type="submit" className="recovery-button">
                        Enviar Instrucciones
                    </button>
                </form>
                
                {/* Mensaje de éxito o error */}
                {mensaje && <p className="message">{mensaje}</p>}
                
                {/* Link para volver al login */}
                <div className="login-link">
                    ¿Recordaste tu contraseña? <Link to="/login" className="login-link-text">Iniciar Sesión</Link>
                </div>
            </div>
        </div>
    );
}

export default Recuperacion;
