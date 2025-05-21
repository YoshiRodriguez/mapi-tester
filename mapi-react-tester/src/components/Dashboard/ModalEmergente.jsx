import React from 'react';
import './ModalEmergente.css'; // Asegúrate de tener este archivo para estilos

const ModalEmergente = ({ mostrar, cerrar }) => {
    if (!mostrar) return null;

    const handleOverlayClick = (e) => {
        // Si se hace clic directamente en el fondo (no en el contenido), cerrar
        if (e.target.classList.contains('modal-overlay')) {
            cerrar();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-card">
                <h2>En construcción</h2>
                <p>¡Gracias por esperar!</p>
                <button className="modal-close-button" onClick={cerrar}>Cerrar</button>
            </div>
        </div>
    );
};

export default ModalEmergente;
