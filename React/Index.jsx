// React/Index.jsx
const App = () => {
    // Función para manejar la redirección
    const redirectToRegister = () => {
        window.location.href = '../Pages/registro.html';
    };

    const redirectToLogin = () => {
        window.location.href = '../Pages/iniciosession.html';
    };

    return (
        
        <div className="login-container">
            
            <button className="login-button" onClick={redirectToLogin}>
                INICIAR SESIÓN
            </button>
            <button className="register-button" onClick={redirectToRegister}>
                REGISTRARSE
            </button>
        </div>
    );
};

// Renderizar el componente en el div con id 'root'
ReactDOM.render(<App />, document.getElementById('root'));
