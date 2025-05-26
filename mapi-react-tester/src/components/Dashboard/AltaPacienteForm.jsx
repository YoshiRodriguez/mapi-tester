import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AltaPacienteForm.css';

const AltaPacienteForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica para guardar los datos
    alert('Paciente guardado correctamente');
  };

  const handleCancel = () => {
    navigate('/dashboard');
  };

  const antecedentesFamiliares = [
    'Diabetes', 'Cáncer', 'Desnutrición', 'HTA', 'Hipertrigliceridemia',
    'Obesidad', 'Cardiopatias', 'Hipercolesterolemia', 'Enf. Renal'
  ];

  const antecedentesPersonales = [
    'Diarrea', 'Nauseas', 'Desnutrición', 'Estreñimiento', 'Vomito',
    'Colitis', 'Otra enfermedad', 'Alguna cirugía'
  ];

  const manifestacionClinica = [
    'Ojos', 'Piel', 'Cabello', 'Uñas', 'Labios', 'Lengua',
    'Dientes', 'Cuello', 'Mucosa', 'Oseos', 'Tiroides'
  ];

  return (
    <form className="alta-paciente-container" onSubmit={handleSubmit}>
      <div className="section">
        <h2>Datos Generales</h2>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input type="number" required />
        </div>
        <div className="form-group">
          <label>Fecha de Nacimiento</label>
          <input type="date" required />
        </div>
        <div className="form-group">
          <label>No. Teléfono</label>
          <input type="tel" required />
        </div>
        <div className="form-group">
          <label>No. Expediente</label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>Motivo de Consulta</label>
          <textarea rows="3" required></textarea>
        </div>
      </div>

      <div className="section">
        <h2>Antecedentes Familiares</h2>
        <div className="checkbox-section">
          {antecedentesFamiliares.map((item) => (
            <div className="checkbox-item" key={item}>
              <input type="checkbox" id={item} name="antecedentesFamiliares" value={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Antecedentes Patológicos Personales</h2>
        <div className="checkbox-section">
          {antecedentesPersonales.map((item) => (
            <div className="checkbox-item" key={item}>
              <input type="checkbox" id={item} name="antecedentesPersonales" value={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
        <div className="form-group">
          <label>¿Qué tipo?</label>
          <input type="text" />
        </div>
      </div>

      <div className="section">
        <h2>Manifestación Clínica</h2>
        <table className="manifestacion-clinica-table">
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Características Normales</th>
              <th>Características del Paciente</th>
            </tr>
          </thead>
          <tbody>
            {manifestacionClinica.map((item) => (
              <tr key={item}>
                <td>{item}</td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="button-container">
        <button type="submit" className="guardar-btn">Guardar</button>
        <button type="button" className="cancelar-btn" onClick={handleCancel}>Cancelar</button>
      </div>
    </form>
  );
};

export default AltaPacienteForm;
