// TODO: use template engine (https://github.com/eta-dev/eta)

const fs = require("fs");
var eta = require("eta");
const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight");
const markdownExtensions = require("./markdown-extensions.js");
const converter = new showdown.Converter({
  extensions: [
    showdownHighlight,
    markdownExtensions.example,
    markdownExtensions.exercise,
    markdownExtensions.refexample,
    markdownExtensions.imgexample,
    markdownExtensions.note
  ]
});
converter.setOption("metadata", "true");
converter.setFlavor("github");

const chapterTpl = fs.readFileSync("templates/chapter.tpl.html", "utf-8");
const sourceTpl = fs.readFileSync("templates/source.tpl.html", "utf-8");

const scriptsEndBody = fs.readFileSync("js/scriptsEndBody.html", "utf-8");
const scriptDisqus = fs.readFileSync("js/scriptDisqus.html", "utf-8");

//console.log(scriptsEndBody);
//console.log(scriptDisqus);

module.exports = {
  makePageFrom: function(template, data, path) {
    switch(template) {
      case 'chapter': return this.makePageFromTemplateChapter(data);
        
      case 'source': return this.makePageFromTemplateSource(data, path);
        
    }
  },
  makePageFromTemplateChapter: function(markdown) {
    let body = converter.makeHtml(markdown);
    let pageTitle = converter.getMetadata().title
      ? converter.getMetadata().title
      : "";

    let styles = [];
    if (converter.getMetadata().style) {
      styles.push(converter.getMetadata().style);
    }
    styles.push(markdownExtensions.getStylesheet());

    let html = eta.render(chapterTpl, {
      pageTitle: pageTitle,
      styles: styles,
      body: body,
      copyright:
        process.env.COPYRIGHT ||
        "Change environment variable in .env file: COPYRIGHT=message"
    });
    return html;
  },
  makePageFromTemplateSource: function(markdown, path) {
    let body = converter.makeHtml("---\ntitle: Source of "+path+"\n---\n\n```html\n" + markdown + "\n```");
    let pageTitle = converter.getMetadata().title
      ? converter.getMetadata().title
      : "";

    let styles = [];
    if (converter.getMetadata().style) {
      styles.push(converter.getMetadata().style);
    }
    

    let html = eta.render(sourceTpl, {
      pageTitle: pageTitle,
      styles: styles,
      body: body,
      
    });
    return html;
  },
  makeHead: function(mdConverter) {
    let title = mdConverter.getMetadata().title;
    let style = mdConverter.getMetadata().style;

    let h =
      '<html lang="en"><head><title>A-Frame Course' +
      (title ? ": " + title : "") +
      "</title>" +
      (style !== undefined
        ? '<link rel="stylesheet" href="' + style + '">'
        : "") +
      '<link rel="stylesheet" href="/css/menu.css">' +
      '<link rel="stylesheet" href="/css/titles.css">' +
      '<link rel="stylesheet" href="/css/listfiles.css">' +
      markdownExtensions.getStylesheetInclude() +
      '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">' +
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tocbot/4.11.1/tocbot.css">';
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
      "</head><body>";
    return h;
  },
  makeHeadSourceCode: function(mdConverter) {
    let title = mdConverter.getMetadata().title;
    let style = mdConverter.getMetadata().style;

    let h =
      '<html lang="en"><head><title>A-Frame Course' +
      (title ? ": " + title : "") +
      "</title>" +
      '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">' +
      '<meta name="viewport" content="width=device-width, initial-scale=1">' +
      "</head><body >";
    return h;
  },
  makeHeader: function(mdConverter) {
    let prev = mdConverter.getMetadata().previous;
    let prevTitle = mdConverter.getMetadata().previoustitle;
    let next = mdConverter.getMetadata().next;
    let nextTitle = mdConverter.getMetadata().nexttitle;

    return makeMenu() + '\
    <div class="js-toc"></div>\
    ';
  },
  makeFooter: function(mdConverter) {
    let prev = mdConverter.getMetadata().previous;
    let prevTitle = mdConverter.getMetadata().previoustitle;
    let next = mdConverter.getMetadata().next;
    let nextTitle = mdConverter.getMetadata().nexttitle;

    //return '<script src="https://button.glitch.me/button.js" data-style="glitch">'+
    return (
      '<h2 id="disqus_comments">Comments</h2>Notice anything wrong? Have a doubt?' +
      scriptDisqus +
      "<hr>" +
      (process.env.COPYRIGHT ||
        "Change environment variable in .env file: COPYRIGHT=message") +
      scriptsEndBody +
      "</body></html>"
    );
  },
  makeExampleListItem: function(exampleName, title) {
    if (title === "Exercises") {
      return (
        '<li id="' +
        exampleName +
        '"><a href="exercises/' +
        exampleName +
        '.html" target="_blank">' +
        exampleName +
        "</a></li>"
      );
    }
    return (
      '<li id="' +
      exampleName +
      '"><a href="examples/' +
      exampleName +
      '.html" target="_blank">' +
      exampleName +
      "</a></li>"
    );
  },
  makeExampleList: function(title, fileList) {
    var md = '<div class="exampleList"><h2>' + title + "</h2><ul>";
    fileList.forEach(file => {
      console.log(file);
      if (file.endsWith(".html")) {
        md += this.makeExampleListItem(file.slice(0, -5), title);
      }
    });
    md += "</ul></div>";
    return md;
  },
  makeFileListPage: function(examples, exercises) {},

  makePage: function(body, isHtml, isSimple) {
    isHtml = isHtml || false;
    isSimple = isSimple || false;
    let bodyHtml = isHtml ? body : converter.makeHtml(body);

    return (
      (isSimple
        ? this.makeHeadSourceCode(converter)
        : this.makeHead(converter)) +
      (isSimple ? "" : this.makeHeader(converter)) +
      bodyHtml +
      (isSimple ? "" : this.makeFooter(converter))
    );
  }
};

var makeMenu = function() {
  return (
    '<ol class="menu">' +
    '<li id="index"> <a href="/index.html">Home</a></li>' +
    '<li id="intro-glitch"> <a href="0010-intro-glitch.html">Intro to Glitch</a></li>' +
    '<li id="intro-html"> <a href="0020-intro-html.html">Intro to HTML</a></li>' +
    '<li id="primitives-components"> <a href="0100-primitives-components.html">Primitives and Components</a></li>' +
    '<li id="aframewebsite"> <a href="0200-aframe-website.html">A-Frame Website</a> </li>' +
    '<li id="text"> <a href="0300-text.html">Text</a> </li>' +
    '<li id="textures"> <a href="0400-textures.html">Textures</a> </li>' +
    '<li id="environments"> <a href="0500-environments.html">Environments</a> </li>' +
    '<li id="portals"> <a href="0600-portals.html" >Portals</a> </li>' +
    '<li id="360vr"> <a href="0700-360vr.html">360º VR</a> </li>' +
    '<li id="lights"> <a href="0800-lights.html">Lights</a> </li>' +
    '<li id="3dmodels"> <a href="0900-3d-models.html">3D Models</a> </li>' +
    '<li id="magicavoxel"> <a href="1000-magica-voxel.html">Magica Voxel</a> </li>' +
    '<li id="interactions"> <a href="1100-interactions.html" >Interactions</a> </li>' +
    '<li id="animations"> <a href="1200-animations.html">Animations</a> </li>' +
    '<li id="sound"> <a href="1300-sound.html" >Sound</a> </li>' +
    //'<li> <a href="10-proximity.html" >10. Proximity Detection</a> </li>' +
    //  '<li> <a href="11-superhands.html" >11. Super Hands</a> </li>' +
    '<li id="listfiles"> <a href="/listfiles.html" >List of all files</a> </li>' +
    "</ol>"
  );
};
