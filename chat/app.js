/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar porta de escuta */
var server = app.listen(3000, function(){
    console.log('Servidor online');
});

var io = require('socket.io').listen(server);

app.set('io', io);

/** criar a conexão por websocket */
io.on('connection', function(socket){
    console.log('Usuário conectou');

    socket.on('disconnect',function(){
        console.log('Usuário desconectou');
    })

    socket.on('msgParaServidor', function(data){
        socket.broadcast.emit(
            'participantesParaCliente',
            {apelido: data.apelido }
        )

        socket.emit(
            'participantesParaCliente',
            {apelido: data.apelido}
        )

        /* Eventos de dialogos */
        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        )

        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        )
    })
})
