var app = require('./config/server');
var routeNoticia = require('./app/routes/noticias')(app);
var routeHome = require('./app/routes/home')(app);
var routeFormNoticia = require('./app/routes/formulario_inclusao_noticia')(app);


app.listen(3000, function(){
    console.log("Servidor ON");
});
