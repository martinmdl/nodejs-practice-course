const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send("Hola EXPRESS");
});

app.listen(3000, function() {
    console.log('Funcionando');
});
