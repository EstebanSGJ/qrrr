const express = require('express');
const app = express();
const cors = require('cors'); // Asegúrate de usar cors si tu frontend está en otro puerto

app.use(cors());
app.use(express.json());

// Simulando una base de datos de usuarios (reemplázalo con la lógica real)
const usuarios = [
  { id: 1, nombre: 'Esteban Santiago' },
  { id: 2, nombre: 'Garcia JuAREZ' }
];

// Ruta para obtener el nombre del usuario (simulado por ID)
app.get('/usuario/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === userId);

  if (usuario) {
    res.json({ nombre: usuario.nombre });
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});

app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});


//Conexion database
require('dotenv').config();
const express = require('express');
const connectDB = require('./database'); // Ruta donde guardaste database.js

const app = express();

// Middleware para JSON
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
