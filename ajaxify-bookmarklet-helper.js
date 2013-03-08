(function (window, undefined) {
    "use strict";

    // Globals
    var interval;

    // Helper
    var loadScript = function (scriptUrl) {
        var s = document.createElement('script');
        s.setAttribute('src', scriptUrl);
        document.head.appendChild(s);
        return s;
    };


    // jQuery
    window.jQuery || document.write('<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"><\/script>');

    // History & ScrollTo (Wait for jQuery)
    interval = setInterval(function () {
        if (window.jQuery) {
            clearInterval(interval);

            // History.js & ScrollTo.js
            document.write('<script src="//browserstate.github.com/history.js/scripts/bundled/html4+html5/jquery.history.js"><\/script>');
            document.write('<script src="//raw.github.com/balupton/jquery-scrollto/master/scripts/jquery.scrollto.min.js"><\/script>');

            interval = setInterval(function () {
                if (window.History && window.History.initHtml4) {
                    clearInterval(interval);

                    // Ajaxify-html5.js
                    document.write('<script src="//raw.github.com/browserstate/ajaxify/master/ajaxify-html5.js"><\/script>');

                    interval = setInterval(function () {
                        if (jQuery.fn.ajaxify) {
                            clearInterval(interval);
                            alert('History.js It! Is ready for action!');
                        }
                    }, 500);
                } else if (console.log) {
                    console.log("Loading history.js and scrollto.js");
                }
            }, 500);
        } else if (console.log) {
            console.log("Loading jQuery");
        }
    }, 500);
}(window));