var Cast = (function() {
    var cast = new Broadcast(function(msg) {
        console.log('receive: ' + msg);
        try {
            var num = parseInt(msg);
            console.log('listenerApp.emit(soundMatched, ' + num +')');
            listenerApp.emit('soundMatched', num);
        } catch (e) {
            // TODO: handle exception
            console.log('not number');
        }
    });

//    $("#msgbox").keyup(function(event) {
//        if (event.which == 13) {
//            cast.send($('#msgbox').val());
//            $('#msgbox').val('');
//        }
//    });

    return {
        cast : cast
    }
}());