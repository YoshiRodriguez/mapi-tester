import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    // Redirigir al Checkout Brick
    navigate("/checkout");
  };

  const handleLogin = () => {
    // Redirigir al Checkout Brick
    navigate("/another-screen");
  };

  return (
    <div className="login-container">
      <div className="left-column">
        <h1>Bienvenido a Nutri-AS</h1>
        <h2>¿Te gustaría crear tu cuenta?</h2>
        <form>
          <div className="input-group">
            <h3>Correo Electrónico</h3>
            <input type="email" />
          </div>
          <div className="input-group">
            <h3>Contraseña</h3>
            <input type="password" />
          </div>
          <div className="input-group">
            <h3>Celular</h3>
            <input type="text" />
          </div>
          <button
            type="button"
            className="create-account-btn"
            onClick={handleCreateAccount}
          >
            Crear Cuenta
          </button>
        </form>
      </div>
      <div className="right-column">
        <h1>¿Ya eres usuario?</h1>
        <h2>¿Te gustaría iniciar sesión?</h2>
        <button className="login-btn" onClick={handleLogin}>
          Nutri-AS
        </button>
      </div>
    </div>
  );
};

export default Login;
