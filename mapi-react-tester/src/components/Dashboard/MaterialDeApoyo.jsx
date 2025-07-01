// src/components/MaterialDeApoyo.jsx
import React from 'react';
import './MaterialDeApoyo.css';

// Importa los iconos de react-icons
import { FaWordpressSimple, FaFilePdf, FaCloudUploadAlt } from 'react-icons/fa';
// Nota: FaWordpressSimple es un buen sustituto para el icono de Word.
// FaCloudUploadAlt es para el icono de la nube/subir.

const MaterialDeApoyo = () => {
    return (
        <div className="material-de-apoyo-container">
            <h2 className="material-de-apoyo-title">Multimedia</h2>

            <div className="material-grid">
                {/* Historia Clínica */}
                <div className="material-card">
                    <h3 className="card-title">HISTORIA CLÍNICA</h3>
                    <p className="card-description">
                        Optimiza el bienestar con un sistema que registra hábitos alimenticios,
                        peso, historial de salud y objetivos nutricionales. Ofrece análisis
                        personalizado y seguimiento detallado para ayudarte a lograr tus metas saludables.
                    </p>
                    <p className="card-format">Formato Editable</p>
                    <div className="card-icons">
                        <FaWordpressSimple className="icon" /> {/* Icono de Word */}
                        <FaFilePdf className="icon" />          {/* Icono de PDF */}
                        <FaCloudUploadAlt className="icon" />   {/* Icono de Nube/Subir */}
                    </div>
                </div>

                {/* Guía de Marcas Recomendadas */}
                <div className="material-card">
                    <h3 className="card-title">GUÍA DE MARCAS RECOMENDADAS</h3>
                    <p className="card-description">
                        Descubre las mejores marcas de suplementos y productos saludables
                        evaluados por expertos en nutrición. Encuentra opciones de calidad para
                        potenciar tu bienestar. Proporciona información detallada para tomar
                        decisiones inteligentes sobre tu salud.
                    </p>
                    <p className="card-format">Formato Descargable</p>
                    <div className="card-icons">
                        <FaWordpressSimple className="icon" />
                        <FaFilePdf className="icon" />
                        <FaCloudUploadAlt className="icon" />
                    </div>
                </div>

                {/* Lista de Súper */}
                <div className="material-card">
                    <h3 className="card-title">LISTA DE SÚPER</h3>
                    <p className="card-description">
                        Organiza tus compras saludables fácilmente. Incluye categorías,
                        cantidades y diversidad. Varias opciones más saludables para una
                        alimentación balanceada. Simplifica tu experiencia de compra con esta
                        herramienta práctica y eficiente.
                    </p>
                    <p className="card-format">Formato Descargable</p>
                    <div className="card-icons">
                        <FaWordpressSimple className="icon" />
                        <FaFilePdf className="icon" />
                        <FaCloudUploadAlt className="icon" />
                    </div>
                </div>

                {/* Estudios de Laboratorio */}
                <div className="material-card">
                    <h3 className="card-title">ESTUDIOS DE LABORATORIO</h3>
                    <p className="card-description">
                        Optimiza el bienestar con un sistema que registra hábitos alimenticios,
                        peso, historial de salud y objetivos nutricionales. Ofrece análisis
                        personalizado y seguimiento detallado para ayudarte a lograr tus metas saludables.
                    </p>
                    <p className="card-format">Formato Editable</p>
                    <div className="card-icons">
                        <FaWordpressSimple className="icon" />
                        <FaFilePdf className="icon" />
                        <FaCloudUploadAlt className="icon" />
                    </div>
                </div>

                {/* Porciones Nutricionales */}
                <div className="material-card">
                    <h3 className="card-title">PORCIONES NUTRICIONALES</h3>
                    <p className="card-description">
                        Guía práctica de las proporciones de alimentos adecuada para cada
                        paciente, proporcionando así la pauta visual de sus dietas y alimentos.
                    </p>
                    <p className="card-format">Formato Descargable</p>
                    <div className="card-icons">
                        <FaWordpressSimple className="icon" />
                        <FaFilePdf className="icon" />
                        <FaCloudUploadAlt className="icon" />
                    </div>
                </div>

                {/* Tríptico SMAE 5ta Edición */}
                <div className="material-card">
                    <h3 className="card-title">TRÍPTICO SMAE 5TA EDICIÓN</h3>
                    <p className="card-description">
                        Informa con estilo y claridad sobre alimentos saludables, opciones
                        nutricionales y consejos prácticos. Ideal para educar y motivar a
                        mantener una dieta equilibrada, con un diseño atractivo y fácil de leer.
                    </p>
                    <p className="card-format">Formato Descargable</p>
                    <div className="card-icons">
                        <FaWordpressSimple className="icon" />
                        <FaFilePdf className="icon" />
                        <FaCloudUploadAlt className="icon" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaterialDeApoyo;