const showdown = require('showdown')
const showdownHighlight = require("showdown-highlight")
const markdownExtensions = require("./markdown-extensions.js");
const converter = new showdown.Converter({
    extensions: [showdownHighlight, markdownExtensions.example, markdownExtensions.exercise, markdownExtensions.refexample]
})
converter.setOption('metadata', 'true');
converter.setFlavor('github');
module.exports = {
    makeHead: function(mdConverter) {
        let title = mdConverter.getMetadata().title;
        let style = mdConverter.getMetadata().style;
       

        let h = '<html lang="en"><head><title>A-Frame USJ' + (title ? ": " + title : "") + '</title>' +
            ((style !== undefined) ? '<link rel="stylesheet" href="' + style + '">' : '') +
            '<link rel="stylesheet" href="/css/menu.css">' +
            '<link rel="stylesheet" href="/css/titles.css">' +
             '<link rel="stylesheet" href="/css/listfiles.css">' +
            markdownExtensions.getStylesheetInclude() +
            '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">'+
            '<meta name="viewport" content="width=device-width, initial-scale=1">' +
            '</head><body>';
        return h;
    },
  makeHeadSourceCode: function(mdConverter) {
        let title = mdConverter.getMetadata().title;
        let style = mdConverter.getMetadata().style;
       

        let h = '<html lang="en"><head><title>A-Frame USJ' + (title ? ": " + title : "") + '</title>' +

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

        //return '<script src="https://button.glitch.me/button.js" data-style="glitch">'+
          return  '<h2>Comments</h2>Notice anything wrong? Have a doubt?<div id="disqus_thread"></div>\n' +
      '<script>\n'+
      '//var disqus_config = function () {\n' +
      '//this.page.url = PAGE_URL;  // Replace PAGE_URL with your pages canonical URL variable\n' +
      '//this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your pages unique identifier variable\n' +
       '//};\n'  +
      '(function() { // DONT EDIT BELOW THIS LINE\n' +
      'var d = document, s = d.createElement("script");\n' +
      's.src = "https://virtual-reality-environments-course-materials.disqus.com/embed.js";\n'+
      's.setAttribute("data-timestamp", +new Date());\n' +
'(d.head || d.body).appendChild(s);\n' +
'})();\n'+
'</script>'+
'<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>'+
      '</script><script src="/js/loadiframe.js"></script>' +
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
      
      return (isSimple?this.makeHeadSourceCode(converter):this.makeHead(converter)) +  (isSimple?'':this.makeHeader(converter)) + bodyHtml + (isSimple?'':this.makeFooter(converter));
    }

};

var makeMenu = function() {
  return '<ol class="menu">'+
  '<li id="index"> <a href="/index.html#index">Home</a></li>'+
  '<li id="intro-glitch"> <a href="0010-intro-glitch.html#intro-glitch">Intro to Glitch</a></li>'+
  '<li id="intro-html"> <a href="0020-intro-html.html#intro-html">Intro to HTML</a></li>'+
  '<li id="primitives-components"> <a href="0100-primitives-components.html#primitives-components">Primitives and Components</a></li>' +
    '<li id="aframewebsite"> <a href="0200-aframe-website.html#aframewebsite">A-Frame Website</a> </li>' +
  '<li id="text"> <a href="0300-text.html#text">Text</a> </li>' +
  '<li id="textures"> <a href="0400-textures.html#textures">Textures</a> </li>' +
  '<li id="environments"> <a href="0500-environments.html#environments">Environments</a> </li>' +
  '<li id="portals"> <a href="0600-portals.html#portals" >Portals</a> </li>' +
  '<li id="360vr"> <a href="0700-360vr.html#360vr">360º VR</a> </li>' +
  '<li id="lights"> <a href="0800-lights.html#lights">Lights</a> </li>' +
  '<li id="3dmodels"> <a href="0900-3d-models.html#3dmodels">3D Models</a> </li>' +
  '<li id="magicavoxel"> <a href="1000-magica-voxel.html#magicavoxel">Magica Voxel</a> </li>' +
  '<li id="interactions"> <a href="1100-interactions.html#interactions" >Interactions</a> </li>' +
  '<li id="animations"> <a href="1200-animations.html#animations">Animations</a> </li>' +
  
  '<li id="sound"> <a href="1300-sound.html#sound" >Sound</a> </li>' +
  //'<li> <a href="10-proximity.html" >10. Proximity Detection</a> </li>' +
  //  '<li> <a href="11-superhands.html" >11. Super Hands</a> </li>' +
'<li id="listfiles"> <a href="/listfiles.html#listfiles" >List of all files</a> </li>' +
    '</ol>';
}