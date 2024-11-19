import React, { useState } from "react";
import { KeyRound, Mail, ArrowLeft } from "lucide-react";

function App() {
    const [email, setEmail] = useState(""); // Estado para almacenar el email ingresado
    const [message, setMessage] = useState(""); // Estado para mostrar mensajes de éxito/error

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Hacer la solicitud al backend para enviar el correo
            const response = await fetch("http://localhost:5000/recover-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }), // Enviamos el email al backend
            });

            if (response.ok) {
                setMessage("¡Correo de recuperación enviado! Revisa tu bandeja.");
            } else {
                setMessage("Error al enviar el correo. Intenta nuevamente.");
            }
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
            setMessage("Error al conectar con el servidor.");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <div className="header">
                    <div className="icon-wrapper">
                        <KeyRound className="icon" />
                    </div>
                    <h1 className="title">Forgot Password?</h1>
                    <p className="description">
                        Don't worry! It happens. Please enter the email address associated with your account.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="form">
                    <div className="input-group">
                        <Mail className="input-icon" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <button type="submit" className="button">
                        Send Recovery Link
                    </button>
                </form>

                {/* Mostrar mensajes de éxito o error */}
                {message && <p className="message">{message}</p>}

                <div style={{ textAlign: "center" }}>
                    <a href="#" className="back-link">
                        <ArrowLeft className="back-icon" />
                        Back to Login
                    </a>
                </div>
            </div>
        </div>
    );
}

return (
    <div className="container">
        <div className="card">
            <div className="header">
                <div className="icon-wrapper">
                    <KeyRound className="icon" />
                </div>
                <h1 className="title">Forgot Password?</h1>
                <p className="description">
                    Don't worry! It happens. Please enter the email address associated with your account.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="form">
                <div className="input-group">
                    <Mail className="input-icon" />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <button type="submit" className="button">
                    Send Recovery Link
                </button>
            </form>

            {/* Mostrar mensajes de éxito o error */}
            {message && <p className="message">{message}</p>}

            <div style={{ textAlign: "center" }}>
                <a href="#" className="back-link">
                    <ArrowLeft className="back-icon" />
                    Back to Login
                </a>
            </div>
        </div>
    </div>
);



export default App;
