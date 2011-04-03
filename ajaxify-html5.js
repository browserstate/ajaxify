(function(window,undefined){

	// Prepare our Variables
	var
		History = window.History,
		$ = window.jQuery;

	// Check to see if History.js is enabled for our Browser
	if ( !History.enabled ) {
		return false;
	}

	// Wait for Document
	$(function(){
		// Prepare Variables
		var
			$content = $('#content'),
			$body = $(document.body),
			rootUrl = History.getRootUrl();

		// Ajaxify our Internal Links
		$(this).find('a[href^="/"],a[href^="'+rootUrl+'"]').live('click',function(event){
			// Continue as normal for cmd clicks etc
			if ( event.which == 2 || event.metaKey ) { return true; }
			// Ajaxify this link
			var $this = $(this), url = $this.attr('href'), title = $this.attr('title')||null;
			window.History.pushState(null,title,url);
			event.preventDefault();
			return false;
		});

		// Hook into State Changes
		$(window).bind('statechange',function(){
			// Prepare Variables
			var
				State = window.History.getState(),
				url = State.url,
				relativeUrl = url.replace(rootUrl,'');

			// Set Loading
			$body.addClass('loading');

			// Start Fade Out
			$content.fadeOut(800);
			
			// Ajax Request the Traditional Page
			$.get(url,function(data){
				// Find the content in the page's html, and apply it to our current page's content
				$content.stop(true,true).show();
				$content.html($(data).find('#content'));
				if ( $content.ScrollTo||false ) $content.ScrollTo(); // http://balupton.com/projects/jquery-scrollto
				$body.removeClass('loading');

				// Inform Google Analytics of the change
				if ( typeof pageTracker !== 'undefined' ) {
					pageTracker._trackPageview(relativeUrl);
				}
			}); // end get

		}); // end onStateChange

	}); // end onDomLoad

})(window); // end closure
