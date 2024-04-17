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
const vehiclesRouter = require('./routes/vehicles'); // Cambia el nombre del router aquí
const sparePartsRouter = require('./routes/spareParts');
const contactRouter = require('./routes/contact');
const brandsRouter = require('./routes/brands'); // Agregar la ruta para las marcas
const clientsRouter = require('./routes/clients');
const usedsRouter = require('./routes/useds');
const categoriesRouter = require('./routes/categories');

app.use('/api/vehiculos', vehiclesRouter); // Cambia la ruta aquí
app.use('/api/repuestos', sparePartsRouter);
app.use('/api/contacto', contactRouter);
app.use('/api/marcas', brandsRouter);
app.use('/api/clientes', clientsRouter);
app.use('/api/usados', usedsRouter);
app.use('/api/categorias', categoriesRouter);

app.get('/', (req, res) => {
    res.json('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
