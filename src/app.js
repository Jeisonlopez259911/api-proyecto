const express = require('express');
const usuariosRoutes = require('./routes/usuarios.routes');
const historiaRoutes = require('./routes/historias.routes');
const app = express();

app.use(express.json());
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/historias', historiaRoutes);

app.get('/', (req, res) => {
    res.send('✔app is running🤗');
});

module.exports = app;