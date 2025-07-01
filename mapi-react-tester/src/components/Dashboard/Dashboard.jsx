import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import colorfulFoodPattern from './img/vecteezy_colorful-food-pattern_420342.svg';
import './Dashboard.css';
import './Banner.css';
import './ConsultationBar.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './CalendarCustom.css';
import Smae from './Smae';
import './Smae.css';
import MaterialDeApoyo from './MaterialDeApoyo.jsx';
import './MaterialDeApoyo.css';
import ModalEmergente from './ModalEmergente';
import Pacientes from './Pacientes.jsx';
import PerfilPaciente from './PerfilPaciente';
import AltaPacienteForm from './AltaPacienteForm';
import DietasAutomaticas from './DietasAutomaticas';
import './DietasAutomaticas.css'; 
import CalculoCreacionMenu from './CalculoCreacionMenu';
import './CalculoCreacionMenu.css'; 



console.log("¿Qué es Pacientes?", Pacientes);

const Dashboard = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const [mostrarModal, setMostrarModal] = useState(false);
    const [vistaActiva, setVistaActiva] = useState("dashboard");
    const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);

    const handleLogout = () => {
        navigate('/');
    };

    const handleGenerarConsulta = () => {
        setMostrarModal(true);
    };

    const handleAltaPaciente = () => {
        setVistaActiva("altaPaciente");
    };

    const cerrarModal = () => setMostrarModal(false);

    const onChange = date => {
        setDate(date);
        console.log('Nueva fecha seleccionada:', date);
    };
 
    const currentDate = new Date();
    const monthYear = currentDate.toLocaleString('es-MX', { month: 'long', year: 'numeric' }).toUpperCase();

    return (
        <div className="dashboard-container">
            <div className="dashboard-sidebar">
                <h1>Inicio</h1>
                <ul className="dashboard-navigation">
                    <li onClick={() => setVistaActiva("dashboard")}>Dashboard</li>
                    <li onClick={() => setVistaActiva("pacientes")}>Mis Pacientes</li>
                    <li onClick={() => setVistaActiva("smae")}>SMAE</li>
                    <li onClick={() => setVistaActiva("material")}>Material De Apoyo</li>
                    <li onClick={() => setVistaActiva("dietas")}>Dietas Automáticas</li>
                    <li onClick={() => setVistaActiva("calculo-menu")}>Cálculo y Creación de Menú</li>
                </ul>
                <div className="dashboard-sidebar-bottom">
                    <div className="configuracion">Configuración</div>
                    <div className="cerrar-sesion" onClick={handleLogout}>Cerrar Sesión</div>
                </div>
            </div>

            <div className="dashboard-content">
                {vistaActiva === "dashboard" && (
                    <>
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
                            <button className="new-consultation-btn" onClick={handleGenerarConsulta}>
                                Generar Nueva Consulta
                            </button>
                            <button className="add-patient-btn" onClick={handleAltaPaciente}>
                                Alta de Paciente
                            </button>
                        </div>

                        <div className="calendar-container">
                            <Calendar onChange={onChange} value={date} locale="es-MX" />
                        </div>
                    </>
                )}

                {vistaActiva === "pacientes" && (
                    pacienteSeleccionado ? (
                        <PerfilPaciente paciente={pacienteSeleccionado} onVolver={() => setPacienteSeleccionado(null)} />
                    ) : (
                        <Pacientes
                            onAltaPaciente={handleAltaPaciente}
                            onVerPerfil={setPacienteSeleccionado}
                        />
                    )
                )}

                {vistaActiva === "altaPaciente" && (
                    <AltaPacienteForm onCancelar={() => setVistaActiva("dashboard")} />
                )}

                {vistaActiva === "smae" && (
                    <Smae /> // Renderiza el componente SmaeContent cuando vistaActiva es "smae"
                )}

                {vistaActiva === "material" && (
                    <MaterialDeApoyo/> // Renderiza el componente SmaeContent cuando vistaActiva es "smae"
                )}

                {vistaActiva === "dietas" && ( // <-- Renderiza el nuevo componente aquí
                    <DietasAutomaticas />
                )}

                {/* CAMBIO: Renderizar el nuevo componente unificado */}
                {vistaActiva === "calculo-menu" && (
                    <CalculoCreacionMenu />
                )}

                {/* Eliminar o adaptar esta sección si ya no hay más "en construcción" */}
                {/* Por ahora, mantengo las vistas que no unificamos explícitamente */}
                {/* Si "calculo" y "menu" solo se usan aquí, puedes quitarlos de la condición */}
                {/* ["calculo", "menu"].includes(vistaActiva) && (
                    <div style={{ padding: '2rem', fontSize: '1.2rem' }}>
                        <p>Sección "{vistaActiva}" en construcción...</p>
                    </div>
                )*/}

            </div>

            <ModalEmergente mostrar={mostrarModal} cerrar={cerrarModal} />
        </div>
    );
};

export default Dashboard;
