const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('✔app is running🤗');
});

module.exports = app;