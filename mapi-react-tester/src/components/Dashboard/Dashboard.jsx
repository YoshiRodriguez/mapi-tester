import React from 'react';
import { useNavigate } from "react-router-dom";
import colorfulFoodPattern from './img/vecteezy_colorful-food-pattern_420342.svg';
import './Dashboard.css'; // Importa el archivo CSS para el Dashboard
import './Banner.css'; // Importa el CSS para el Banner
import './ConsultationBar.css'; // Importa el CSS para la nueva barra

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/'); // Redirige a la página de inicio
    };

    const handleGenerarConsulta = () => {
        // Aquí iría la lógica para generar una nueva consulta
        console.log('Generar Nueva Consulta');
    };

    const handleAltaPaciente = () => {
        // Aquí iría la lógica para dar de alta a un paciente
        console.log('Alta de Paciente');
    };

    const currentDate = new Date();
    const monthYear = currentDate.toLocaleString('es-MX', { month: 'long', year: 'numeric' }).toUpperCase();


    return (
        <div className="dashboard-container"
            // style={{
            //     display: 'flex',
            //     minHeight: '100vh',
            //     backgroundColor: 'var(--beige)',
            //     color: 'var(--dark-moss-green)',
            //     backgroundImage: `url(${colorfulFoodPattern})`,
            //     backgroundSize: 'cover', // Cubre todo el contenedor
            //     backgroundRepeat: 'no-repeat', // No se repite
            //     backgroundPosition: 'center', // Centra la imagen
            //     overflow: 'hidden', // Evita barras de desplazamiento si la imagen es muy grande
            // }}
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
                    <div className="month-year">{monthYear}</div>
                    <button className="add-patient-btn" onClick={handleAltaPaciente}>Alta de Paciente</button>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;