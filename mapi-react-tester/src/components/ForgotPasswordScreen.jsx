import React from "react";
import "./ForgotPasswordScreen.css";
const ForgotPasswordScreen = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviar correo de recuperación");
  };

  return (
    <div className="forgot-password-container">
      <h1>¿Olvidaste tu contraseña?</h1>
      <p>Ingresa tu correo para recuperar tu contraseña</p>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Tu correo electrónico" />
        <button type="submit" className="recover-button">
          Recuperar
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordScreen;
