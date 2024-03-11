const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conexión a la base de datos MongoDB
const uri = process.env.MONGODB_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// Rutas para acceder a los datos y manejar el formulario de contacto
const productosRouter = require('./routes/productos'); // Cambia el nombre del router aquí
const partsRouter = require('./routes/repuestos');
const contactRouter = require('./routes/contacto');
const marcasRouter = require('./routes/marcas'); // Agregar la ruta para las marcas
const clientesRouter = require('./routes/clientes');

app.use('/api/productos', productosRouter); // Cambia la ruta aquí
app.use('/api/repuestos', partsRouter);
app.use('/api/contacto', contactRouter);
app.use('/api/marcas', marcasRouter);
app.use('/api/clientes', clientesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
