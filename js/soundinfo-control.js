var SoundInfoControl = (function() {
    console.log('init -- sound info');

    var page = document.getElementById( "page-sound-info" );
    var soundlistPage = document.getElementById( "soundlist-page" );
    var recordingSoundPage = document.getElementById( "recording-sound-page" );
    
    var btn_ok = page.querySelector( "#page-sound-info-btn-ok" );
    var btn_cancel = page.querySelector( "#page-sound-info-btn-cancel" );
    
    function _handleOk () {
    	tau.changePage(soundlistPage);
    }
    
    function _handleCancel () {
    	tau.back();
    }
    
    btn_ok.addEventListener('click', function(ev) {
    	_handleOk();    
    });
    
    btn_cancel.addEventListener('click', function(ev) {
    	_handleCancel();    
    });

    return {
    	SoundInfoControl: SoundInfoControl
    }
}());
