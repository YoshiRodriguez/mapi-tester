// src/components/DietasAutomaticas.jsx
import React from 'react';
import './DietasAutomaticas.css'; // Asegúrate de crear este archivo CSS

const DietasAutomaticas = () => {
    // Puedes crear un array de datos si las tarjetas son dinámicas
    const dietas = [
        { id: 1, kcal: "KCal de la dieta", description: "Descripción general del tipo de persona" },
        { id: 2, kcal: "KCal de la dieta", description: "Descripción general del tipo de persona" },
        { id: 3, kcal: "KCal de la dieta", description: "Descripción general del tipo de persona" },
        { id: 4, kcal: "KCal de la dieta", description: "Descripción general del tipo de persona" },
        { id: 5, kcal: "KCal de la dieta", description: "Descripción general del tipo de persona" },
        { id: 6, kcal: "KCal de la dieta", description: "Descripción general del tipo de persona" },
        { id: 7, kcal: "KCal de la dieta", description: "Descripción general del tipo de persona" },
        { id: 8, kcal: "KCal de la dieta", description: "Descripción general del tipo de persona" },
        { id: 9, kcal: "KCal de la dieta", description: "Descripción general del tipo de persona" },
    ];

    return (
        <div className="dietas-automaticas-container">
            <h2 className="dietas-automaticas-title">Listado de dietas automáticas</h2>

            <div className="dietas-grid">
                {dietas.map(dieta => (
                    <div key={dieta.id} className="dieta-card">
                        <h3 className="dieta-kcal">{dieta.kcal}</h3>
                        <p className="dieta-description">{dieta.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DietasAutomaticas;