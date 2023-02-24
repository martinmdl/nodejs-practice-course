const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static( __dirname + '/public' ));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(3000, function() {
    console.log('funcionando');
});
