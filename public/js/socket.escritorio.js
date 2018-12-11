var socket = io();
var label = $('small');
var searhParams = new URLSearchParams(window.location.search);

if (!searhParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario..');
}

var escritorio = searhParams.get('escritorio');
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', {
        escritorio: escritorio
    }, function(resp) {
        if (resp === 'No hay tickets') {
            alert(resp);
            label.text(resp);
            return;
        }
        label.text('Ticket' + resp.numero);
    });
});