// ModalEmergente.jsx
import React from 'react';
import './ModalEmergente.css';

const ModalEmergente = ({ mostrar, cerrar }) => {
    if (!mostrar) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>En construcción</h2>
                <p>Esta funcionalidad aún está en desarrollo.</p>
                <button onClick={cerrar}>Aceptar</button>
            </div>
        </div>
    );
};

export default ModalEmergente;
