const showdown = require("showdown");

module.exports = {
  note: {
    type: "lang",
    filter: function(text, converter, options) {
      const conv = new showdown.Converter({});
      conv.setOption("metadata", "true");
      conv.setFlavor("github");

      let matches = text.matchAll(/:::note\s(.*?)[\n\r]((?:.*[\n\r])*?):::[\n\r]/g);
      let filtered = text.substring(0);

      for (const match of matches) {       

        let cssclass = match[2]?match[1]:'';
        let content = match[2]?match[2]:match[1];
        filtered = filtered.replace(
          match[0],
          '<div class="note '+cssclass+'">' + conv.makeHtml(content) + "</div>"
        );
      }

      return filtered;
    }
  },
 
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
      let matches = text.matchAll(/:::example (.+?)\s(.+)?/g);
      let filtered = text.substring(0);
      for (const match of matches) {
        //console.log(`Found ${match[0]} ${match[1]}.`);

        /*  console.log(
          "match:",
          match[0],
          match[1],
          match[2],
          match.index,
          match[0].length
        );*/

        //console.log(encodeURIComponent("https://aframe-usj.glitch.me/examples/"+match[0]+".html"+match[1]))
        let id = match[1];
        let hash = match[2] ? match[2] : "";
        let relativeUrl = "examples/" + id + ".html" + hash;
        let viewSourceRelativeUrl = "/viewsource/examples/" + id + ".html";
        let shotUrl = encodeURIComponent(
          "https://aframe-course.glitch.me/examples/" + id + ".html" + hash
        );

        let replace =
          '<div class="example-container" id="' +
          id +
          '">' +
          "<code>Example: " +
          id +
          '(<a href="' +
          relativeUrl +
          '" target="_blank">open in new tab</a> | <a href="' +
          viewSourceRelativeUrl +
          '" target="_blank">view source</a>):</code>' +
          '<div class="example"> ' +
          '  <iframe data-src="' +
          relativeUrl +
          '" width="100%" height="100%"></iframe>' +
          "  <div><img class='imgexample' src='" +
          process.env.PUPPETEER_ADDRESS +
          "/shot/?url=" +
          shotUrl +
          "'>" +
          "  <span><strong>Click to load.</strong><br> Use keys 'w', 'a', 's', 'd' to move around.<br>Mouse to look around.</span>" +
          "</div></div></div>";
        filtered = filtered.replace(match[0], replace);
      }
      //console.log(text);
      return filtered;
    }
  },
  imgexample: {
    type: "lang",
    filter: function(text, converter, options) {
      let matches = text.matchAll(/:::imgexample (.+?)\s(.+)?/g);
      let filtered = text.substring(0);
      for (const match of matches) {
        //console.log(`Found ${match[0]} ${match[1]}.`);

        //console.log(encodeURIComponent("https://aframe-usj.glitch.me/examples/"+match[0]+".html"+match[1]))
        let id = match[1];
        let hash = match[2] ? match[2] : "";
        let relativeUrl = "examples/" + id + ".html" + hash;
        let viewSourceRelativeUrl = "/viewsource/examples/" + id + ".html";
        let shotUrl = encodeURIComponent(
          "https://aframe-course.glitch.me/examples/" + id + ".html" + hash
        );

        let replace =
          '<img class="imgexample" src="' +
          process.env.PUPPETEER_ADDRESS +
          "/shot/?url=" +
          shotUrl +
          '">';

        filtered = filtered.replace(match[0], replace);
      }
      //console.log(text);
      return filtered;
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
