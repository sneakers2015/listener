(function(){
	
	var page = document.getElementById( "soundlist-page" );
	var listElement = page.querySelector("#sound-listview" );
	
	var btn_addSound = page.querySelector( "#addSoundBtn" );
	var soundDeletePopup = page.querySelector( "#sound-delete-popup" );
	var soundDeletePopupBtnOk = page.querySelector( "#sound-delete-popup-ok" );
	var soundDeletePopupBtnCancel = page.querySelector( "#sound-delete-popup-cancel" );
	
	var deleteTargetListItemId = null; //using
	var swipeList = null //dynamic create
	
	function updateSoundList () {
		var sound;
		for (var i in listenerApp.sounds) {
			sound = listenerApp.sounds[i];
			addSoundListItem(sound.id, sound.title, sound.enabled, sound.dialNumber);
		}
	}
	
	function addSoundListItem (id, title, enabled, dialNumber) {
		var li, label, span, input;
		li = document.createElement('li')
		label = document.createElement('label');
		span = document.createElement('span');
		input = document.createElement('input');
		
		li.setAttribute('id', id);
		li.setAttribute('class', 'li-has-multiline li-has-checkbox')		
		label.textContent = title;
		
		span.setAttribute('class', 'ui-li-sub-text li-text-sub');		
		if (dialNumber !== undefined) {
			span.textContent = dialNumber
		} else {
			span.textContent = '';
		}
		
		input.setAttribute('type', 'checkbox');
		if (enabled === true) {
			input.checked = true;
		} else {
			input.checked = false;
		}				
		
		label.appendChild(span);
		label.appendChild(input);
		li.appendChild(label)
		listElement.appendChild(li);
		console.log('list item added', li);
	}
	
	function removeSoundListItem (id) {
		var listItem = listElement.querySelector('#' + id);
		if (listItem) {
			console.log('list item deleted', listItem);
			listItem.remove();			
			return true;
		}
		return false;
	}
		   
	page.addEventListener( "pagebeforeshow", function() {
	// make SwipeList object
		swipeList = tau.widget.SwipeList( listElement, {
			swipeTarget: "li",
			swipeElement: ".ui-swipelist"
				/*
				 * ltrStartColor : #xx
				 * ltrEndColor : #xx
				 * rtlStartColor : #xx
				 * rtlEndColor : #xx
				 */
				
		});
					
	listElement.addEventListener("swipelist.right", function(evt) {
		console.log('swipe right', evt.target);
		var list = evt.currentTarget;
		tau.openPopup(soundDeletePopup);		
		var target = evt.target; //list 항목
		deleteTargetElem = target;
//		target.remove(); //제거
		var type = evt.type; //swipelist.left						    
	});
	
	
	listElement.addEventListener("swipelist.left", function(evt) {
		console.log('swipe left', evt.target);
		var list = evt.currentTarget;
//		tau.openPopup(soundDeletePopup);		
//		var target = evt.target; //list 항목
//		deleteTargetElem = target;	
//		var type = evt.type; //swipelist.left						    
	});
	

	});
	
	document.getElementById('sound-delete-popup-cancel').addEventListener('click', function(ev)
	{
	     tau.closePopup();
	});
	
	document.getElementById('sound-delete-popup-ok').addEventListener('click', function(ev)
	{
		if (deleteTargetElem !== null) {			
			deleteTargetElem.remove();
			deleteTargetElem = null;
		}							
		tau.closePopup();
	});



	page.addEventListener( "pagebeforehide", function() {
	// release object
		swipeList.destroy();
	});
	
	var addListItem = function (title, enabled, dialNumber, message) {
		var li, label, span, input;
		li = document.createElement('li')
		label = document.createElement('label');
		span = document.createElement('span');
		input = document.createElement('input');
		
		li.setAttribute('class', 'li-has-multiline li-has-checkbox')		
		label.textContent = title;
		
		span.setAttribute('class', 'ui-li-sub-text li-text-sub');		
		if (dialNumber !== undefined) {
			span.textContent = dialNumber
		} else {
			span.textContent = '';
		}
		
		input.setAttribute('type', 'checkbox');
		if (enabled === true) {
			input.checked = true;
		} else {
			input.checked = false;
		}				
		
		label.appendChild(span);
		label.appendChild(input);
		li.appendChild(label)
		listElement.appendChild(li);
	}

	document.getElementById('addSoundBtn').addEventListener('click', function(ev)
	{
		addNewSound('test01', null, null, 111, 'test01');
		addNewSound('test02', null, null, 112, 'test02');
		addNewSound('test03', null, null, 113, 'test03');
		updateSoundList();
		
//			      addListItem('응애응애', true, 111);
//			      addListItem('헬프미', false, 222);
	});	

}());
