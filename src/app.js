const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).json('Hey world!');
});

app.get('/users', (req, res) => {
    res.status(200).json({
        id: 1,
        name: 'example'
    });
});

module.exports = app;