// React/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';

const Register = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        correo: '',
        celular: '',
        contraseña: '',
        confirmarContraseña: '',
    });

    // Función para manejar cambios en los campos del formulario
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Función para manejar el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para guardar los datos, o hacer validación
        console.log('Datos enviados:', formData);
    };

    return (
        <div className="register-container">
            <Link to="/">
                <button className="button-oval">
                    <i className="fa-solid fa-chevron-left"></i> Regresar al inicio
                </button>
            </Link>
            <h2>Crear Cuenta</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="input-field"
                    required
                />
                <input
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    placeholder="Apellidos"
                    className="input-field"
                    required
                />
                <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="Correo Electrónico"
                    className="input-field"
                    required
                />
                <input
                    type="tel"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    placeholder="Celular"
                    className="input-field"
                    required
                />
                <input
                    type="password"
                    name="contraseña"
                    value={formData.contraseña}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    className="input-field"
                    required
                />
                <input
                    type="password"
                    name="confirmarContraseña"
                    value={formData.confirmarContraseña}
                    onChange={handleChange}
                    placeholder="Confirmar Contraseña"
                    className="input-field"
                    required
                />
                <button type="submit" className="register-button">Crear Cuenta</button>
            </form>
        </div>
    );
};

export default Register;
