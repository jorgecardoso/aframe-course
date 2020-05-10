module.exports = {
  exercise: {
    type: "lang",
    filter: function(text, converter, options) {
      return text.replace(
        /:::exercise (.+?)\s(.+)?/g,
        '<div class="exercise" > ' +
          '<a href="$1" target="_blank">' +
          "<div><img src='" +
          process.env.PUPPETEER_ADDRESS +
          "/shot/?url=$1'>" +
          '<span style="background-color:white">Open in new tab</span></div>' +
          "</a></div>"
      );
    }
  },
  example: {
    type: "lang",
    filter: function(text, converter, options) {
      return text.replace(
        /:::example (.+?)\s(.+)?/g,
        '<div class="example-container" id="$1">' +
          '<code>Example: $1 (<a href="examples/$1.html" target="_blank">open in new tab</a> | <a href="/viewsource/examples/$1.html" target="_blank">view source</a>):</code>' +
          '<div class="example"> ' +
          '  <iframe data-src="/examples/$1.html" width="100%" height="100%"></iframe>' +
          "  <div><img src='" +
          process.env.PUPPETEER_ADDRESS +
          "/shot/?url=https://aframe-usj.glitch.me/examples/$1.html'>" +
          "  <span><strong>Click to load.</strong><br> Use keys 'w', 'a', 's', 'd' to move around.<br>Mouse to look around.</span>" +
          "</div></div></div>"
      );
    }
  },
  refexample: {
    type: "lang",
    filter: function(text, converter, options) {
      return text.replace(
        /:::ref ([^\s,\.:;]+)/g,
        '<a href="#$1"><code>$1</code></a>'
      );
    }
  },
  getStylesheetInclude: function() {
    return '<link rel="stylesheet" href="/css/markdown-extensions.css">';
  }
};
