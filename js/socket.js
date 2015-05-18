var Cast = (function() {
    var cast = new Broadcast(function(msg) {
        console.log('receive: ' + msg);

        if (strStartsWith(msg, "#")) {
            // number
            
            var num = parseInt(msg.substr(1));
            console.log('listenerApp.emit(soundMatched, ' + num +')');
            listenerApp.emit('soundMatched', num);
        } else if (strStartsWith(msg, "@")) {
            // string
            var str = parseInt(msg.substr(1));
            // TODO::
        } else {
            console.log('not match');
        }
    });

//    $("#msgbox").keyup(function(event) {
//        if (event.which == 13) {
//            cast.send($('#msgbox').val());
//            $('#msgbox').val('');
//        }
//    });

    function strStartsWith(str, prefix) {
        return str.indexOf(prefix) === 0;
    }

    return {
        cast : cast
    }
}());