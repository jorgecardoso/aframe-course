module.exports = {
    exercise: {
        type: 'lang',
        filter: function(text, converter, options) {

            return text.replace(/:::exercise (.+?)\s(.+)?/g,
                '<div class="example" > ' +
                '<iframe style="position:absolute; top: 0; left: 0" data-src="$1" width="100%" height="100%"></iframe>' +
                '<img src=\'https://fixed-chronometer.glitch.me/shot/?url=$1\'>'+
                    '<span style="background-color:white">Click to load.</span></div>' +
                '</div>');
        }
    },
    example: {
        type: 'lang',
        filter: function(text, converter, options) {

            return text.replace(/:::example (.+?)\s(.+)?/g,
                '*Example: $1* (<a href="examples/$1.html" target="_blank">open in new tab</a> | <a href="/viewsource/examples/$1.html" target="_blank">view source</a> ):' +
                '<div class="example"> ' +
                '  <iframe data-src="/examples/$1.html" width="100%" height="100%"></iframe>' +
                '  <div><img src=\'https://fixed-chronometer.glitch.me/shot/?url=https://aframe-usj.glitch.me/examples/$1.html\'>' +
                '  <span><strong>Click to load.</strong><br> Use keys \'w\', \'a\', \'s\', \'d\' to move around.<br>Mouse to look around.</span>' +
                '</div></div>');
        }
    },
   getStylesheetInclude: function() {
      return '<link rel="stylesheet" href="/markdown-extensions.css">';
   }
};

var zemba = function() {}