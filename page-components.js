const showdown = require('showdown')
const showdownHighlight = require("showdown-highlight")
const markdownExtensions = require('./markdown-extensions');
const converter = new showdown.Converter({
    extensions: [showdownHighlight, markdownExtensions.example, markdownExtensions.exercise]
})
converter.setOption('metadata', 'true');
converter.setFlavor('github');
module.exports = {
    makeHead: function(mdConverter) {
        let title = mdConverter.getMetadata().title;
        let style = mdConverter.getMetadata().style;
       

        let h = '<html lang="en"><head><title>A-Frame USJ' + (title ? ": " + title : "") + '</title>' +
            ((style !== undefined) ? '<link rel="stylesheet" href="' + style + '">' : '') +
            '<link rel="stylesheet" href="/menu.css">' +
            '<link rel="stylesheet" href="/titles.css">' +
             '<link rel="stylesheet" href="/listfiles.css">' +
            markdownExtensions.getStylesheetInclude() +
            '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">'+
            '<meta name="viewport" content="width=device-width, initial-scale=1">' +
            '</head><body>';
        return h;
    },
   makeHeader: function(mdConverter) {
        let prev = mdConverter.getMetadata().previous;
        let prevTitle = mdConverter.getMetadata().previoustitle;
        let next = mdConverter.getMetadata().next;
        let nextTitle = mdConverter.getMetadata().nexttitle;

        let h = '<body>' +
            '<p><a href="index.html">Home</a>' +
            (prev !== undefined ? ' | <a href="' + prev + '.html">Previous: ' + prevTitle + '</a> ' : '') +
            (next !== undefined ? ' | <a href="' + next + '.html">Next: ' + nextTitle + '</a> ' : '') +
            '</p><hr>';
        return makeMenu();
    },
    makeFooter: function(mdConverter) {
        let prev = mdConverter.getMetadata().previous;
        let prevTitle = mdConverter.getMetadata().previoustitle;
        let next = mdConverter.getMetadata().next;
        let nextTitle = mdConverter.getMetadata().nexttitle;

        return '<script src="https://button.glitch.me/button.js" data-style="glitch"></script><script src="/loadiframe.js"></script>' +
            '<hr>' +
            (process.env.COPYRIGHT || 'Change environment variable in .env file: COPYRIGHT=message') +
            '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-118123196-1"></script>' +
            '<script>' +
            'window.dataLayer = window.dataLayer || [];' +
            'function gtag(){dataLayer.push(arguments);}' +
            'gtag(\'js\', new Date());' +
            'gtag(\'config\', \'UA-118123196-1\');' +
            '</script>' +
            '</body></html>';
    },
    makeExampleListItem: function(exampleName, title) {
      if (title === "Exercises" ) {
        return '<li id="'+exampleName+'"><a href="exercises/' + exampleName + '.html" target="_blank">' + exampleName + '</a></li>';
      }
        return '<li id="'+exampleName+'"><a href="examples/' + exampleName + '.html" target="_blank">' + exampleName + '</a></li>';
    },
    makeExampleList: function(title, fileList) {
        var md = '<div class="exampleList"><h2>' + title + '</h2><ul>';
        fileList.forEach(file => {
            console.log(file);
            if (file.endsWith('.html')) {
                md += this.makeExampleListItem(file.slice(0, -5), title);
            }
        });
        md += '</ul></div>';
        return md;
    },
  makeFileListPage: function(examples, exercises) {
    
  },
  
    makePage: function(body, isHtml, isSimple) {
      isHtml = isHtml || false;
      isSimple = isSimple || false;
      let bodyHtml = isHtml?body:converter.makeHtml(body);
      
      //console.log(bodyHtml);
      
      return this.makeHead(converter) +  (isSimple?'':this.makeHeader(converter)) + bodyHtml + (isSimple?'':this.makeFooter(converter));
    }

};

var makeMenu = function() {
  return '<ol class="menu">'+
  '<li> <a href="/index.html">Home</a></li>'+
   '<li> <a href="/listfiles.html" >List of all files</a> </li>' +
  '</ol>' +
  '<ol class="menu">' +
  '<li> <a href="0-intro-glitch.html">0.1 Intro to Glitch</a></li>'+
  '<li> <a href="0-intro-html.html">0.2 Intro to HTML</a></li>'+
  '<li> <a href="1-basics-1.html">1.1 Primitives</a></li>' +
  '<li> <a href="1-basics-2.html">1.2 Lights, Text</a> </li>' +
  '<li> <a href="2-textures.html">2. Textures</a> </li>' +
  '<li> <a href="3-environments.html">3. Environments</a> </li>' +
  '<li> <a href="4-3d-models.html">4. 3D Models</a> </li>' +
  '<li> <a href="5-magica-voxel.html">5. Magica Voxel</a> </li>' +
  '<li> <a href="6-interactions.html" >6. Interactions</a> </li>' +
  '<li> <a href="7-animations.html" >7. Animations</a> </li>' +
  '<li> <a href="8-portals.html" >8. Portals</a> </li>' +
  '<li> <a href="9-sound.html" >9. Sound</a> </li>' +

    '</ol>';
}