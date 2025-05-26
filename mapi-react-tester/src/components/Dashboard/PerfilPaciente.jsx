import React from "react";
import {
  FaHeartbeat,
  FaRegCalendarAlt,
  FaRuler,
  FaCalculator,
  FaVials,
  FaNotesMedical,
  FaArrowLeft,
} from "react-icons/fa";
import "./PerfilPaciente.css"; // Asegúrate de tener estilos base

const PerfilPaciente = ({ paciente, onVolver }) => {
  return (
    <div className="perfil-paciente-container">
      <h1 className="perfil-titulo">Paciente</h1>

      <div className="perfil-header">
        <div className="perfil-foto-placeholder"></div>
        <h2 className="perfil-nombre">{paciente?.nombre}</h2>
      </div>

      <div className="perfil-botones-grid">
        <button className="perfil-btn">
          <FaHeartbeat size={28} />
          Historia Clínica
        </button>
        <button className="perfil-btn">
          <FaRegCalendarAlt size={28} />
          R24
        </button>
        <button className="perfil-btn">
          <FaRuler size={28} />
          Mediciones Antropométricas
        </button>
        <button className="perfil-btn">
          <FaCalculator size={28} />
          Cálculo Dietético
        </button>
        <button className="perfil-btn">
          <FaVials size={28} />
          Estudios de Laboratorio
        </button>
        <button className="perfil-btn">
          <FaNotesMedical size={28} />
          Historial de Consultas
        </button>
      </div>

      <button className="volver-btn" onClick={onVolver}>
        <FaArrowLeft size={20} style={{ marginRight: "0.5rem" }} />
        Volver a Pacientes
      </button>
    </div>
  );
};

export default PerfilPaciente;
