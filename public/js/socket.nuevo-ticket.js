var socket = io();

var lable = $('#lblNuevoTicket');
socket.on('connect', function() {
    console.log("Conectado al servidor");
});

socket.on('disconnect', function() {
    console.log("Desconectado del servidor");
});

socket.on('estadoActual', function(resp) {
    lable.text(resp.actual);
});


$('button').on('click', function() {
    socket.emit("siguienteTicket", null, function(siguienteTicket) {
        lable.text(siguienteTicket);
    });
});