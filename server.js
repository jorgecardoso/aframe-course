// server.js

// init project
const express = require('express')
const fs = require('fs')
const showdown = require('showdown')
const showdownHighlight = require("showdown-highlight")
const app = express()

app.use('/examples', express.static('examples'))

var  exerciseExtension = {
    type: 'lang',
    filter: function (text, converter, options) {
     
     return text.replace(/:::exercise (.+?)\s(.+)?/g, 
                         '<div class="example" style="width:600px; height:400px;position:relative;"> '+
                         '<iframe style="position:absolute; top: 0; left: 0" data-src="$1" width="100%" height="100%"></iframe>' +
                         '<div style="background-image: url(\'https://fixed-chronometer.glitch.me/shot/?url=$1\'); background-size: 100% 100%; width:100%;min-height:100%;position:absolute;background-color:tomato; display:flex; justify-content: center; align-items:center"><span style="background-color:white">Click to load</span></div>'+
                         '</div>');
  }
  };

var  exampleExtension = {
    type: 'lang',
    filter: function (text, converter, options) {
     
     return text.replace(/:::example (.+?)\s(.+)?/g, 
                         '*Example: $1* (<a href="examples/$1.html" target="_blank">open in new tab</a>):'+
                         '<div class="example" style="width:600px; height:400px;position:relative;"> '+
                         '<iframe style="position:absolute; top: 0; left: 0" data-src="/examples/$1.html" width="100%" height="100%"></iframe>' +
                         '<div style="background-image: url(\'https://fixed-chronometer.glitch.me/shot/?url=https://aframe-usj.glitch.me/examples/$1.html\'); background-size: 100% 100%; width:100%;min-height:100%;position:absolute;background-color:tomato; display:flex; justify-content: center; align-items:center"><span style="background-color:white">Click to load</span></div>'+
                         '</div>');
  }
  };
  
const converter = new showdown.Converter({
    extensions: [showdownHighlight, exampleExtension, exerciseExtension]
})
converter.setOption('metadata', 'true');
converter.setFlavor('github');

// prefix and postfix of html body
const head = function(converter) { 
  let title = converter.getMetadata().title;
  let style = converter.getMetadata().style;
  
  return '<html lang="en"><head><title>AFrame USJ'+(title?": "+title:"")+'</title>'+
    style?'<link rel="stylesheet" href="'+style+'">':'' +
    '<link rel="stylesheet"      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"></head><body>';
}

const footer = '<script src="https://button.glitch.me/button.js" data-style="glitch"></script><script src="loadiframe.js"></script></body></html>'

// when index route accessed, send readme converted to html
app.get("/", function (req, res) {  
    res.redirect('index.html'); //sendFile('index.html', {root: '.'});
})


app.get("/:name.:ext", function (req, res) {  
  
  if (fs.existsSync(req.params['name']+'.'+req.params['ext'])) {
    res.sendFile(req.params['name']+'.'+req.params['ext'], {root: '.'});
  } else {
    var filename = req.params['name'] + '.md';

    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      var html = converter.makeHtml(data);
      res.send(head(converter) + html + footer);
    })
  }
})

/*
app.get("/examples/:name.html", function (req, res) {  
  res.sendFile('/examples/'+req.params['name']+'.html', {root: '.'});
})
*/
/*
app.get("/:name.js", function (req, res) {  
  res.sendFile(req.params['name']+'.js', {root: '.'});
})
*/
/*
app.get("/exercises/:name.html", function (req, res) {  
 if (fs.existsSync(req.params['name']+'.html')) {
    res.sendFile('/exercises/'+req.params['name']+'.html', {root: '.'});
  } else {
    var filename = 'exercises/' + req.params['name'] + '.md';

    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      var html = converter.makeHtml(data);
      res.send(head(converter.getMetadata().title) + html + footer);
    })
  }
})*/

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
