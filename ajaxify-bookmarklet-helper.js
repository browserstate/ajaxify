(function (window, undefined) {
    "use strict";

    // jQuery
    window.jQuery || document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"><\/script>');

    // History & ScrollTo (Wait for jQuery)
    var interval = setInterval(function () {
        if (window.jQuery) {
            clearInterval(interval);

            // History.js & ScrollTo.js
            window.History || document.write('<script src="//browserstate.github.io/history.js/scripts/bundled/html4+html5/jquery.history.js"><\/script>');
            jQuery.ScrollTo || document.write('<script src="//balupton.github.io/jquery-scrollto/lib/jquery-scrollto.js"><\/script>');

            interval = setInterval(function () {
                if (window.History && window.History.initHtml4) {
                    clearInterval(interval);

                    // Ajaxify-html5.js
                    document.write('<script src="//rawgithub.com/browserstate/ajaxify/master/ajaxify-html5.js"><\/script>');

                    interval = setInterval(function () {
                        if (jQuery.fn.ajaxify) {
                            clearInterval(interval);
                            alert('History.js It! Is ready for action!');
                        }
                    }, 500);
                } else if (console && console.log) {
                    console.log("Loading history.js and scrollto.js");
                }
            }, 500);
        } else if (console && console.log) {
            console.log("Loading jQuery");
        }
    }, 500);
}(window));
