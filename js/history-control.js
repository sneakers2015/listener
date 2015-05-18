var HistoryControl = (function() {
	
    var page = document.getElementById('page-sound-history');
    var flashPanel = page.querySelector('.flash-panel');
	function startMatcher () {
		
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
	
	function addNewItem () {
		$('.history-container').append("<div class='history-item'><span class='history-item-title'>title</span><span class='history-item-time'>time</span><div class='history-item-icon'>icon</div></div>"
    			
    	);
	};
	
	function _addHistoryItemBySound () {
		
	};
	
	function showFlashPanel (text) {
		flashPanel.innerText = text;
	};
	
	document.addEventListener('click', function(ev) {
    	console.log('click', ev);
    	addNewItem();
    });

	return {
		
	}
}());