import React from 'react';
import { useNavigate } from 'react-router-dom';  // Cambié useHistory por useNavigate
import './Start.css'; // Importa el archivo CSS

const Start = () => {
  const navigate = useNavigate();  // Usé useNavigate en vez de useHistory

  const handleCreateAccount = () => {
    // Redirigir al Checkout Brick
    navigate('/checkout');  // Usé navigate en vez de history.push
  };

  const handleStart = () => {
    // Redirigir al Dashboard
    navigate('/dashboard'); // Cambia la ruta aquí
  };

  return (
    <div className="start-container">
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
        <button className="start-btn" onClick={handleStart}>
          Nutri-AS
        </button>
      </div>
    </div>
  );
};

export default Start;
// Asegúrate de que el CSS esté en el mismo directorio o ajusta la ruta según sea necesario
// src/components/Login.css