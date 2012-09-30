This gist will ajaxify your website with the HTML5 History API using History.js and ScrollTo.


## Installation

``` html
<!-- jQuery --> 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script> 
 
<!-- jQuery ScrollTo Plugin -->
<script defer src="http://balupton.github.com/jquery-scrollto/scripts/jquery.scrollto.min.js"></script>

<!-- History.js --> 
<script defer src="http://balupton.github.com/history.js/scripts/bundled/html4+html5/jquery.history.js"></script>

<!-- This Gist -->
<script defer src="http://gist.github.com/raw/854622/ajaxify-html5.js"></script>  
```

## Explanation

### What do the installation instructions do?

1. Load in jQuery
1. Load in the [jQuery ScrollTo Plugin](https://github.com/balupton/jquery-scrollto) allowing our ajaxify gist to scroll nicely and smoothly to the new loaded in content
1. Load in [History.js](https://github.com/balupton/history.js) with support for jQuery, HTML4 and HTML5
1. Load in this gist :-)

### What does this gist do?

1. Check if History.js is enabled for our current browser, if it isn't then skip this gist.

1. Create a way to detect our page's root url, so we can compare our links against it.

1. Create a way to convert the ajax repsonse into a format jQuery will understand - as jQuery is only made to handle elements which go inside the body element, not elements made for the head element.

1. Define our content and menu selectors, these are using when we load in new pages. We use our content selector to find our new content within the response, and replace the existing content on our current page. We use our menu selector to update the active navigation link in our menu when the page changes.

1. Discover our internal links on our website, and upgrade them so when they are clicked it instead of changing the page to the new page, it will change our page's state to the new page. Links with the class `no-ajaxy` will not be upgraded.

1. When a page state change occurs, we will:

	1. Determine the absolute and relative urls from the new url

	1. Use our content selector to find our current page's content and fade it out

	1. Send off an ajax request to the absolute url

	1. Convert the response into one we can undertand

	1. Extract the response's title and set `document.title` and the title element to it

	1. Use our menu selector to find our page's menu, then scan for new page's url in the menu, and make that the active menu item and mark other menu items inactive
	
	1. Finish the current content's fadeout animation

	1. Use our menu selector to find the new page's content, and replace the current content with the new page's content

	1. Fade the new content in

	1. Scroll to the new current content so the user is directed to the right place - rather than them ending up looking at the footer or something instead of your page's content due to the height shift with the content change

	1. Inform Google Analytics and other tracking software about the page change


## Using this Gist?

[Post your website in the showcase here!](https://github.com/balupton/history.js/wiki/Showcase)

## Further Reading

- [The History.js Readme: Your guide to History.js](https://github.com/balupton/history.js)
- [Intelligent State Handling: The evolution from hashes, to hashbangs to the HTML5 History API](https://github.com/balupton/history.js/wiki/Intelligent-State-Handling)
- [The state of the HTML5 History API, why it isn't good enough and why we need History.js](https://github.com/balupton/history.js/wiki/The-State-of-the-HTML5-History-API)

## History

- v1.0.1 - 30 September, 2012
	- Added completion event (customisable via `completedEventName` defaults to `statechangecomplete`)
	- Updated for new Google Analytics code - [credits to](https://gist.github.com/854622#gistcomment-294951) [aspiziri](https://github.com/aspiziri)

