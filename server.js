// server.js

// init project
const express = require('express')
const fs = require('fs')
const showdown = require('showdown')
const app = express()
const converter = new showdown.Converter()
converter.setFlavor('github');

// prefix and postfix of html body
const head = '<html lang="en"><head><title>Markdown Web Page</title></head><body>'
const footer = '<script src="https://button.glitch.me/button.js" data-style="glitch"></script></body></html>'

// when index route accessed, send readme converted to html
app.get("/", function (req, res) {  
    res.redirect('index.html'); //sendFile('index.html', {root: '.'});
})

// when index route accessed, send readme converted to html
app.get("/:name.html", function (req, res) {  
  
  if (fs.existsSync(req.params['name']+'.html')) {
    res.sendFile(req.params['name']+'.html', {root: '.'});
  } else {
    var filename = req.params['name'] + '.md';

    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      res.send(head + converter.makeHtml(data) + footer);
    })
  }
})

app.get("/examples/:name.html", function (req, res) {  
  res.sendFile('/examples/'+req.params['name']+'.html', {root: '.'});
})

app.get("/exercises/:name.html", function (req, res) {  
 if (fs.existsSync(req.params['name']+'.html')) {
    res.sendFile('/exercises/'+req.params['name']+'.html', {root: '.'});
  } else {
    var filename = 'exercises/' + req.params['name'] + '.md';

    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      res.send(head + converter.makeHtml(data) + footer);
    })
  }
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})
