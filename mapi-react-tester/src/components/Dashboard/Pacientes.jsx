import React from 'react';
import './Pacientes.css';
import { FaUserEdit, FaEye, FaEnvelope } from 'react-icons/fa';

const Pacientes = ({ onAltaPaciente, onVerPerfil }) => {
    const pacientesDummy = [
        { id: 1, nombre: "Juan Pérez", estado: "Activo", telefono: "555-123-4567" },
        { id: 2, nombre: "María López", estado: "Inactivo", telefono: "555-987-6543" },
        { id: 3, nombre: "Luis Martínez", estado: "Activo", telefono: "555-111-2222" },
        { id: 4, nombre: "Jorge Campos", estado: "Activo", telefono: "555-128-7895" },
        { id: 5, nombre: "Enrique Bermudez", estado: "Activo", telefono: "555-903-6458" },
        { id: 6, nombre: "Omar Ortiz", estado: "Activo", telefono: "555-485-4896" },
    ];

    return (
        <div className="pacientes-container">
            <div className="pacientes-header">
                <h2>Pacientes</h2>
                <button className="btn-alta" onClick={onAltaPaciente}>Alta De Paciente</button>
            </div>
            <div className="pacientes-grid">
                {pacientesDummy.map((p) => (
                    <div key={p.id} className="paciente-card">
                        <div className="paciente-avatar"></div>
                        <div className="paciente-info">
                            <h3>{p.nombre}</h3>
                            <p>Estado: {p.estado}</p>
                            <p>Tel: {p.telefono}</p>
                            <div className="paciente-actions">
                                <button title="Editar"><FaUserEdit /></button>
                                <button title="Ver Perfil" onClick={() => onVerPerfil(p)}><FaEye /></button>
                                <button title="Correo"><FaEnvelope /></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pacientes;
