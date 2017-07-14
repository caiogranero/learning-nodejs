var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views'); //Está olhando a partir do app.js pois é chamado lá

module.exports = app;
