
function test() {
    var i = 0;
    setInterval(function() {
        i = i+1;
        console.log(i);
        if (i===10) {
            function onsuccess() {
                alert('alarm');
                navigator.vibrate(1000)
            }
            var app = tizen.application.getCurrentApplication();
            tizen.application.launch(app.appInfo.id, onsuccess);
        }
    },1000);
}

// TODO:: vibrate, light test
function vibrate() {
	navigator.vibrate(1000)
    navigator.vibrate(0);
}