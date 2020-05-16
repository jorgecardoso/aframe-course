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
    markdownExtensions.note,
    markdownExtensions.youtube
  ]
});
converter.setOption("metadata", "true");
converter.setFlavor("github");

const indexTpl = fs.readFileSync("templates/index.eta.html", "utf-8");
const sourceTpl = fs.readFileSync("templates/source.eta.html", "utf-8");
const chapterTpl = fs.readFileSync("templates/chapter.eta.html", "utf-8");
const filelistTpl = fs.readFileSync("templates/filelist.eta.html", "utf-8");

eta.templates.define('globalmenu', eta.compile(fs.readFileSync("templates/globalmenu.eta.html", "utf-8")))

//console.log(scriptsEndBody);
//console.log(scriptDisqus);

module.exports = {
  makePageFrom: function(template, ...data) {
    switch (template) {
      case "index":
        return this.makePageFromTemplateIndex(data);
      case "chapter":
        return this.makePageFromTemplateChapter(data);
      case "source":
        return this.makePageFromTemplateSource(data);
      case "filelist":
        return this.makePageFromTemplateFileList(data);
    }
  },
  makePageFromTemplateFileList: function([examples, exercises]) {
    let html = eta.render(filelistTpl, {
      examples: examples,
      exercises: exercises,
      styles: [],
      copyright:
        process.env.COPYRIGHT ||
        "Change environment variable in .env file: COPYRIGHT=message"
    });
    return html;
  },
  makePageFromTemplateIndex: function([markdown]) {
    let body = converter.makeHtml(markdown);
    let pageTitle = converter.getMetadata().title
      ? converter.getMetadata().title
      : "";

    let styles = [];
    if (converter.getMetadata().style) {
      styles.push(converter.getMetadata().style);
    }
    styles.push(markdownExtensions.getStylesheet());

    let html = eta.render(indexTpl, {
      pageTitle: pageTitle,
      styles: styles,
      body: body,
      copyright:
        process.env.COPYRIGHT ||
        "Change environment variable in .env file: COPYRIGHT=message"
    });
    return html;
  },
  makePageFromTemplateChapter: function([markdown]) {
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
  makePageFromTemplateSource: function([markdown, path]) {
    let body = converter.makeHtml(
      "---\ntitle: Source of " +
        path +
        "\n---\n\n```html\n" +
        markdown +
        "\n```"
    );
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
      body: body
    });
    return html;
  }
};
