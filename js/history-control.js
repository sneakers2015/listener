var HistoryControl = (function() {
    console.log('init');

    var page = document.getElementById('page-sound-history');
    var flashPanel = page.querySelector('.flash-panel');
    var headerBtn = page.querySelector('.ui-header');
    
    var btn_ok = page.querySelector('.send-message-cancel');
    var btn_cancel = page.querySelector('.send-message-ok');

    function startMatcher () {
        // TODO
    }

    function _createNewSoundByStream() {
        var sound;
        return sound;
    }

    function endMatcher() {
        var result;
        if (result) {
            
        }
    }

    function addNewItemElem (title, time) {
        $('.history-container').prepend("<div class='history-item'><span class='history-item-title'>" + title + "</span><span class='history-item-time'>" + time + "</span><div class='history-item-icon'>icon</div></div>"
        );
        showFlashPanel(title);
    };

    function _addHistoryItem (history) {
    	var time = history.timestamp;
    	var sound = listenerApp.getSoundByID(history.soundID);
    	if (sound) {
    		var title = sound.id;	
    	}    	
    };

    function showFlashPanel (text) {
        flashPanel.innerText = text;
        blinkBlue(flashPanel);
    };


    function historyMatchHandler( event, soundID ) {
        console.log( 'history matchHandler', soundID );

        var sound = getSoundByID( soundID );
        if (!sound || !sound.notiEnabled) {
        	return;
        }       

        var currentDate = new Date;
        var history = getHistoryByID( soundID );
        if ( !history ) {
            // new history
            history = addNewHistory(soundID, currentDate);
        } else {
            // exist history
            var diffMs = currentDate - history.timestamp;
            var diffMin =  Math.round(((diffMs % 86400000) % 3600000) / 60000);
            if ( diffMin < 1) {
                // ignore match
                return;
            } else {
                // update time
                history.timestamp = currentDate;
            }
        }

        var noti = {
                id : sound.id,
                title : sound.title,
                dialNumber : sound.number,
                message: sound.message
        }
        notification(noti);
        _addHistoryItem(history);

        // FIXME:
        //blink($('#content1')[0]);

        // TODO:: link to send SMS in Alert Dialog

        // FIXME:
        //updateHistoryList();
    }
    

    function clearHistory () {
    	$('.history-container').empty();
    };

    page.addEventListener( "pagebeforeshow", function() {
        console.log('pagebeforeshow');

        listenerApp.on('soundMatched', historyMatchHandler);
    });

    page.addEventListener( "pagebeforehide", function() {
        console.log('pagebeforehide');

        listenerApp.off('soundMatched', historyMatchHandler);
    });

    function _createSamples () {
    	var samples = ['alarm', 'crash', 'klaxon', 'doorbell'];
    	var sampleCnt = 8;
    	var idx;
        for (var i = sampleCnt - 1; i >= 0; i--) {
        	idx = _.random(0, 4);
        	addNewItemElem(samples[idx], parseInt(i/2) + '분전');
        }             
    };
    
    document.addEventListener('click', function(ev) {
        console.log('click', ev);
        _createSamples();
        
    });
    
    headerBtn.addEventListener ('dblclick', function() {
    	clearHistory();
    });


    return {
    }
}());