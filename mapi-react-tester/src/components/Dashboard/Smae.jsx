// src/components/SmaeContent.jsx
import React from 'react';
import './Smae.css'; // Crearemos este archivo CSS en el siguiente paso

const Smae = () => {
    return (
        <div className="smae-container">
            <h2 className="smae-title">Contenido SMAE</h2>
            <div className="smae-grid">
                <div className="smae-section">
                    <h3 className="smae-section-title">ÍNDICE DE TABLAS</h3>
                    <div className="smae-buttons-column">
                        <button className="smae-button">Verduras</button>
                        <button className="smae-button">Frutas</button>
                        <button className="smae-button">Cereales Sin Grasa</button>
                        <button className="smae-button">Cereales Con Grasa</button>
                        <button className="smae-button">Leguminosas</button>
                        <button className="smae-button">Alimentos De Origen Animal Muy Bajo Aporte De Grasa</button>
                        <button className="smae-button">Alimentos De Origen Animal Moderado Aporte De Grasa</button>
                        <button className="smae-button">Alimentos De Origen Animal Alto Aporte De Grasa</button>
                        <button className="smae-button">Leche Descremada</button>
                        <button className="smae-button">Leche Semidescremada</button>
                    </div>
                </div>

                <div className="smae-section">
                    <div className="smae-buttons-column">
                        <button className="smae-button">Comida Rápida</button>
                        <button className="smae-button">Leche Entera</button>
                        <button className="smae-button">Leche Con Azúcar</button>
                        <button className="smae-button">Aceites Y Grasas</button>
                        <button className="smae-button">Aceites Y Grasas Con Proteína</button>
                        <button className="smae-button">Azúcares Sin Grasa</button>
                        <button className="smae-button">Azúcares Con Grasa</button>
                        <button className="smae-button">Alimentos Libres En Energía</button>
                        <button className="smae-button">Bebidas Alcohólicas</button>
                        <button className="smae-button">Productos Yakult</button>
                        <button className="smae-button">Platillos</button>
                    </div>
                </div>

                <div className="smae-section">
                    <div className="smae-buttons-column smae-right-column">
                        <button className="smae-button">Tabla de Referencia 1</button>
                        <button className="smae-button">Tabla de Referencia 2</button>
                        <button className="smae-button">Tabla de Referencia 3</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Smae;