// src/components/CalculoCreacionMenu.jsx
import React, { useState } from 'react';
import './CalculoCreacionMenu.css';
import { FaPlayCircle } from 'react-icons/fa'; // <-- Importa el icono de play

const CalculoCreacionMenu = () => {
    // Estado para los inputs del paciente
    const [patientData, setPatientData] = useState({
        sex: '',
        weight: '',
        height: '',
        age: '',
        activityLevel: '', // CAMBIO: Valor inicial vacío para el select
        formula: 'MIFFLIN ST. JEOR',
        dietKcal: '2000'
    });

    // Estado para los valores de las barras (Verduras, Frutas, etc.)
    const [alimentos, setAlimentos] = useState({
        verduras: 0,
        frutas: 0,
        cerealesSG: 0,
        cerealesCG: 0,
        leguminosas: 0,
        aoaMBAG: 0,
        aoaMBAG2: 0,
        aoaAAG: 0,
        lecheDeslactosada: 0,
        lecheSemidescremada: 0,
        lecheEntera: 0,
        lecheCA: 0,
        aceitesSIP: 0,
        aceitesCP: 0,
        azucarSG: 0,
        azucarCG: 0,
    });

    // Estado para los porcentajes y KCAL/Gramos de la sección inferior izquierda
    const [composicionDieta, setComposicionDieta] = useState({
        hco: { porcentaje: 55, kcal: 1100, gramos: 275 },
        lip: { porcentaje: 25, kcal: 500, gramos: 55.6 },
        pro: { porcentaje: 20, kcal: 400, gramos: 100 },
        totalKcal: 2000,
    });

    // Estado para la tabla de meta y porcentaje inferior derecha
    const [resumenDieta, setResumenDieta] = useState({
        kcal: 1980,
        pro: 97,
        lip: 51,
        hco: 276,
        metaKcal: 2000,
        metaPro: 100.0,
        metaLip: 88.8,
        metaHco: 275,
        percentKcal: 99.0,
        percentPro: 97.0,
        percentLip: 91.0,
        percentHco: 100.4,
    });

    const handlePatientDataChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'radio') {
            setPatientData(prev => ({ ...prev, [name]: value }));
        } else {
            setPatientData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleAlimentoChange = (alimento, e) => {
        // Asegúrate de que el valor sea un número y no menor a 0
        const value = parseFloat(e.target.value);
        setAlimentos(prev => ({ ...prev, [alimento]: isNaN(value) || value < 0 ? 0 : value }));
    };

    const renderAlimentoRow = (label, key) => (
        <div className="alimento-row">
            <label>{label}</label>
            <div className="alimento-input-bar">
                <input
                    type="number"
                    value={alimentos[key]}
                    onChange={(e) => handleAlimentoChange(key, e)}
                    className="alimento-value-input"
                />
                <div className="alimento-bar-container">
                    <div className="alimento-bar" style={{ width: `${alimentos[key]}%` }}></div>
                </div>
            </div>
            <input type="text" className="alimento-field" readOnly />
            <input type="text" className="alimento-field" readOnly />
            <input type="text" className="alimento-field" readOnly />
            <input type="text" className="alimento-field" readOnly />
            <input type="text" className="alimento-field" readOnly />
        </div>
    );

    const handlePlayButtonClick = () => {
        // Aquí puedes agregar la lógica que se ejecutará cuando se presione el botón
        // Por ejemplo, iniciar el cálculo o la creación del menú.
        console.log("Botón de Play presionado. ¡Iniciando cálculo/creación!");
        // Aquí podrías llamar a una función que procese los datos del formulario.
    };


    return (
        <div className="calculo-creacion-menu-container">
            <h2 className="main-title">Creación del Menú</h2>

            {/* Sección 1: Datos del Paciente */}
            <div className="section-card patient-data-section">
                <h3>Ingresa los datos del paciente</h3>
                <div className="input-group">
                    {/* CAMBIO: Más espacio entre texto y radio buttons */}
                    <label style={{ marginRight: '20px' }}>¿Cuál es el genero del Paciente?</label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="sex"
                            value="Masculino"
                            checked={patientData.sex === "Masculino"}
                            onChange={handlePatientDataChange}
                        /> Masculino
                    </label>
                    <label className="radio-label">
                        <input
                            type="radio"
                            name="sex"
                            value="Femenino"
                            checked={patientData.sex === "Femenino"}
                            onChange={handlePatientDataChange}
                        /> Femenino
                    </label>
                </div>

                <h3>Ingresa los Siguientes Datos del Paciente</h3>
                <div className="input-row-group">
                    <div className="input-field-wrapper">
                        <label>Peso</label>
                        <input type="text" name="weight" placeholder="Kg." value={patientData.weight} onChange={handlePatientDataChange} />
                    </div>
                    <div className="input-field-wrapper">
                        <label>Altura</label>
                        <input type="text" name="height" placeholder="Cm." value={patientData.height} onChange={handlePatientDataChange} />
                    </div>
                    <div className="input-field-wrapper">
                        <label>Edad</label>
                        <input type="text" name="age" placeholder="Años" value={patientData.age} onChange={handlePatientDataChange} />
                    </div>
                </div>

                <div className="input-group">
                    <label style={{ marginRight: '20px' }}>Nivel de Actividad Física</label>
                    <select
                        name="activityLevel"
                        value={patientData.activityLevel}
                        onChange={handlePatientDataChange}
                        className="activity-level-select"
                    >
                        <option value="">Selecciona un nivel</option>
                        <option value="Nivel de Actividad 1">Nivel de Actividad 1</option>
                        <option value="Nivel de Actividad 2">Nivel de Actividad 2</option>
                        <option value="Nivel de Actividad 3">Nivel de Actividad 3</option>
                        <option value="Nivel de Actividad 4">Nivel de Actividad 4</option>
                    </select>
                </div>
            </div>

            {/* Sección 2: Selección de Fórmula */}
            <div className="section-card formula-selection-section">
                <h3>Selecciona el tipo de fórmula más adecuada para el paciente</h3>
                <div className="radio-group-horizontal">
                    <label className="radio-label">
                        <input type="radio" name="formula" value="MIFFLIN ST. JEOR" checked={patientData.formula === "MIFFLIN ST. JEOR"} onChange={handlePatientDataChange} /> MIFFLIN ST. JEOR
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="formula" value="HARRIS-BENEDICT" checked={patientData.formula === "HARRIS-BENEDICT"} onChange={handlePatientDataChange} /> HARRIS-BENEDICT
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="formula" value="VALENCIA" checked={patientData.formula === "VALENCIA"} onChange={handlePatientDataChange} /> VALENCIA
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="formula" value="SCHOFIELD" checked={patientData.formula === "SCHOFIELD"} onChange={handlePatientDataChange} /> SCHOFIELD
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="formula" value="OMS/FAO" checked={patientData.formula === "OMS/FAO"} onChange={handlePatientDataChange} /> OMS/FAO
                    </label>
                </div>
                <div className="diet-kcal-input">
                    <label>Dieta:</label>
                    <input type="text" name="dietKcal" value={patientData.dietKcal} onChange={handlePatientDataChange} />
                    <span>KCal</span>
                </div>
            </div>

            {/* Sección 3: Tabla de Alimentos */}
            <div className="section-card alimentos-table-section">
                <div className="table-header">
                    <div className="header-label"></div>
                    <div className="header-label">EQ</div>
                    <div className="header-label">KCAL</div>
                    <div className="header-label">PRO</div>
                    <div className="header-label">LIP</div>
                    <div className="header-label">HCO</div>
                </div>
                <div className="table-body">
                    {renderAlimentoRow("VERDURAS", "verduras")}
                    {renderAlimentoRow("FRUTAS", "frutas")}
                    {renderAlimentoRow("CEREALES S/G", "cerealesSG")}
                    {renderAlimentoRow("CEREALES C/G", "cerealesCG")}
                    {renderAlimentoRow("LEGUMINOSAS", "leguminosas")}
                    {renderAlimentoRow("AOA MBAG", "aoaMBAG")}
                    {renderAlimentoRow("AOA BAG", "aoaMBAG2")}
                    {renderAlimentoRow("AOA AAG", "aoaAAG")}
                    {renderAlimentoRow("LECHE DESLACTOSADA", "lecheDeslactosada")}
                    {renderAlimentoRow("LECHE SEMIDESCREMADA", "lecheSemidescremada")}
                    {renderAlimentoRow("LECHE ENTERA", "lecheEntera")}
                    {renderAlimentoRow("LECHE C/A", "lecheCA")}
                    {renderAlimentoRow("ACEITES S/P", "aceitesSIP")}
                    {renderAlimentoRow("ACEITES C/P", "aceitesCP")}
                    {renderAlimentoRow("AZÚCAR S/G", "azucarSG")}
                    {renderAlimentoRow("AZÚCAR C/G", "azucarCG")}
                </div>
            </div>

            {/* Sección 4: Resumen Inferior */}
            <div className="bottom-summary-section">
                <div className="composicion-dieta">
                    <h3>PORCENTAJE</h3>
                    <div className="summary-row">
                        <span>HCO</span>
                        <span>{composicionDieta.hco.porcentaje} %</span>
                        <span>{composicionDieta.hco.kcal} KCal</span>
                        <span>{composicionDieta.hco.gramos} g</span>
                    </div>
                    <div className="summary-row">
                        <span>LIP</span>
                        <span>{composicionDieta.lip.porcentaje} %</span>
                        <span>{composicionDieta.lip.kcal} KCal</span>
                        <span>{composicionDieta.lip.gramos} g</span>
                    </div>
                    <div className="summary-row">
                        <span>PRO</span>
                        <span>{composicionDieta.pro.porcentaje} %</span>
                        <span>{composicionDieta.pro.kcal} KCal</span>
                        <span>{composicionDieta.pro.gramos} g</span>
                    </div>
                </div>

                <div className="resumen-final">
                    <div className="summary-table">
                        <div className="summary-table-header">
                            <span></span>
                            <span>Kcal</span>
                            <span>Pro</span>
                            <span>Lip</span>
                            <span>HCO</span>
                        </div>
                        <div className="summary-table-row">
                            <span>Suma</span>
                            <span>{resumenDieta.kcal} K</span>
                            <span>{resumenDieta.pro} g</span>
                            <span>{resumenDieta.lip} g</span>
                            <span>{resumenDieta.hco} g</span>
                        </div>
                        <div className="summary-table-row">
                            <span>Meta</span>
                            <span>{resumenDieta.metaKcal} K</span>
                            <span>{resumenDieta.metaPro} g</span>
                            <span>{resumenDieta.metaLip} g</span>
                            <span>{resumenDieta.metaHco} g</span>
                        </div>
                        <div className="summary-table-row">
                            <span>%</span>
                            <span>{resumenDieta.percentKcal} %</span>
                            <span>{resumenDieta.percentPro} %</span>
                            <span>{resumenDieta.percentLip} %</span>
                            <span>{resumenDieta.percentHco} %</span>
                        </div>
                    </div>
                </div>
                            {/* Nuevo botón circular de Play */}
            <button className="play-button" onClick={handlePlayButtonClick}>
                <FaPlayCircle />
            </button>
            </div>


        </div>
    );
};

export default CalculoCreacionMenu;