var RecordingControlUI = (function() {
    console.log('init');

    var page = document.getElementById( "recording-sound-page" );    
    var btn_play = page.querySelector( "#recording-page-play-btn" );
    var CLASS_RECORDING = 'recording-btn-recording';
    var CLASS_NORMAL = 'recording-btn-normal';
  
    function getState () {
    	if ($(btn_play).hasClass(CLASS_RECORDING)) {
    		return 'recording';
    	}
    	return 'normal';
    }
    
    function setState (state) {
    	if (state === 'recording') {
    		$(btn_play).addClass(CLASS_RECORDING);
    		$(btn_play).removeClass(CLASS_NORMAL);
    	} else {
    		$(btn_play).addClass(CLASS_NORMAL);
    		$(btn_play).removeClass(CLASS_RECORDING);
    		_handleEndOfRecord(); //TODO : FIXME
    		tau.back();
    	}
    }
    
    function _handleEndOfRecord () {
    	var random = _.random(0, 100);
    	addNewSound('test'+random, null, null, random, 'msg');
//    	updateSoundList();
    }
//
//    
//    function updateIcon() {
//    	if (getSate() === 'recording') {
//    		$(btn_play).addClass(CLASS_RECORDING);
//    	} else {
//    		$(btn_play).removeClass(CLASS_RECORDING); 
//    	}
//    }
//    
        
    btn_play.addEventListener('click', function(ev) {
    	if (getState() === 'recording') {
    		setState ('normal');
    	} else {
    		setState('recording');    		
    	}    	        
    });     
    
    page.addEventListener( "pagebeforeshow", function() {
    	$(btn_play).removeClass(CLASS_RECORDING); 
    });    

    return {
    	RecordingControlUI: RecordingControlUI
    }
}());
