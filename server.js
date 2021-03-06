'use strict';

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8042;

app.get('/', (req, res) => {

    fs.readFile('index.html', (err, data) => {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
  });

});

app.get('/stylesheets.css', (req, res) => {
        fs.readFile('stylesheets.css', (err, data) => {
            res.send(data);
        });
});


app.listen(PORT, () => {
console.log(`Example app listening at http://localhost:${PORT}`);
});