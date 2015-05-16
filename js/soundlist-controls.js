(function(){
	
	/*
	 * page id = 'soundlist-page'
	 * listview id = 'sound-listview'
	 * delete popup id = 'sound-delete-popup'
	 * delete pupup ok = 'sound-delete-pupup-ok'
	 * delete pupup cancel = 'sound-delete-pupup-cancel'
	 */
	var page = document.getElementById( "soundlist-page" ),
	listElement = page.getElementsByClassName( "ui-swipelist-list" )[0],
	swipeList;
    var deleteTargetElem = null;
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
		var list = evt.currentTarget;
		tau.openPopup("#sound-delete-popup");		
		var target = evt.target; //list 항목
		deleteTargetElem = target;
//		target.remove(); //제거
		var type = evt.type; //swipelist.left						    
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
			      addListItem('응애응애', true, 111);
			      addListItem('헬프미', false, 222);
			   });
	//swipe end

	
	//swipe end

}());
