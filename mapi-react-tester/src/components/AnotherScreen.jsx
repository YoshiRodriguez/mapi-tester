import React from "react";
import { useNavigate } from "react-router-dom";
import "./AnotherScreen.css";

const AnotherScreen = () => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/checkout");
  };

  const handleStart = () => {
    navigate("/checkout");
  };

  const handleForgotPassword = () => {
    // Redirigir a la página de "Olvidé mi contraseña"
    navigate("/forgot-password");
  };

  return (
    <div className="another-screen-container">
      <div className="left-column-alt">
        <h1>¿No tienes cuenta?</h1>
        <h2>Crear Cuenta</h2>
        <button className="register-btn" onClick={handleRegister}>
          Registrarse
        </button>
      </div>
      <div className="right-column-alt">
        <h1>Bienvenido a Nutri-AS</h1>
        <h2>Iniciar Sesión</h2>
        <form>
          <div className="input-group">
            <h3>Correo</h3>
            <input type="email" />
          </div>
          <div className="input-group">
            <h3>Contraseña</h3>
            <input type="password" />
          </div>
          <p className="forgot-password" onClick={handleForgotPassword}>
            ¿Olvidaste tu Contraseña?
          </p>
          <button type="button" className="start-btn-alt" onClick={handleStart}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnotherScreen;
