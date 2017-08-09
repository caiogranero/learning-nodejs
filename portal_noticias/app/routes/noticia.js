module.exports = function(app){

    app.get('/noticia', function(req,res){

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);
        var id_noticia = req.query;

        noticiasModel.getNoticia(id_noticia, function(error, result){
            res.render('noticias/noticia', { noticia : result });
        });

    });
}
