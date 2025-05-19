import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import './Banner.css';
import './ConsultationBar.css';
import 'react-calendar/dist/Calendar.css';
import './CalendarCustom.css';
import Calendar from 'react-calendar';
const Dashboard = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const handleLogout = () => {
    navigate('/');
  };

  const handleGenerarConsulta = () => {
    // Sin funcionalidad aún
    console.log('Generar Nueva Consulta');
  };

  const handleAltaPaciente = () => {
    // Sin funcionalidad aún
    console.log('Alta de Paciente');
  };

  const onChange = date => {
    setDate(date);
    console.log('Nueva fecha seleccionada:', date);
  };

  const currentDate = new Date();
  const monthYear = currentDate.toLocaleString('es-MX', { month: 'long', year: 'numeric' }).toUpperCase();

  return (
    <div
      className="dashboard-container"
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'var(--beige)',
        color: 'var(--dark-moss-green)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        overflow: 'hidden',
      }}
    >
      <div className="dashboard-sidebar">
        <h1>Inicio</h1>
        <ul className="dashboard-navigation">
          <li>Mis Pacientes</li>
          <li>SMAE</li>
          <li>Material De Apoyo</li>
          <li>Dietas Automáticas</li>
          <li>Cálculo Dietético</li>
          <li>Creación de Menú</li>
        </ul>
        <div className="dashboard-sidebar-bottom">
          <div className="configuracion">Configuración</div>
          <div className="cerrar-sesion" onClick={handleLogout}>Cerrar Sesión</div>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="main-banner">
          <div className="banner-text">
            <h2 className="banner-title">SALAD</h2>
            <h1 className="banner-subtitle">FreshFood</h1>
            <p className="banner-organic">100% Organic Products</p>
            <p className="banner-website">www.saladfood.com</p>
          </div>
          <div className="profile-info">
            <div className="profile-column">
              <div className="profile-placeholder"></div>
              <p className="profile-name">Nutrióloga</p>
            </div>
          </div>
        </div>
        <div className="consultation-bar">
          <button className="new-consultation-btn" onClick={handleGenerarConsulta}>Generar Nueva Consulta</button>
          {/* <div className="month-year">{monthYear}</div> */}
          <button className="add-patient-btn" onClick={handleAltaPaciente}>Alta de Paciente</button>
        </div>
        <div className="calendar-container">
          <Calendar
            onChange={onChange}
            value={date}
            locale="es-MX"
          />
        </div>
        {/* Aquí iría el resto del contenido principal si lo hubiera */}
      </div>
    </div>
  );
};

export default Dashboard;