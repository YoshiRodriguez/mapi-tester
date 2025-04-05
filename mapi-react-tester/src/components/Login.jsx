import React from 'react';
import { useNavigate } from 'react-router-dom';  // Cambié useHistory por useNavigate
import './Login.css'; // Importa el archivo CSS

const Login = () => {
  const navigate = useNavigate();  // Usé useNavigate en vez de useHistory

  const handleCreateAccount = () => {
    // Redirigir al Checkout Brick
    navigate('/checkout');  // Usé navigate en vez de history.push
  };

  const handleLogin = () => {
    // Redirigir al Checkout Brick
    navigate('/checkout');  // Igualmente con navigate
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
            <button type="button" className="create-account-btn" onClick={handleCreateAccount}>
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
// Asegúrate de que el CSS esté en el mismo directorio o ajusta la ruta según sea necesario
// src/components/Login.css