// server.js

// init project
const express = require('express')
const fs = require('fs')

const app = express()
const markdownExtensions = require('./js/markdown-extensions');
const pageComponents = require('./js/page-components');

app.use('/js', express.static('js'))
app.use('/css', express.static('css'))
app.use('/examples', express.static('examples'))
app.use('/exercises', express.static('exercises'))


// when index route accessed, send readme converted to html
app.get("/", function (req, res) {  
      res.redirect('index.html'); //sendFile('index.html', {root: '.'});
})

app.get("/listfiles.html", function (req, res) {  
  var md = pageComponents.makeExampleList("Examples", fs.readdirSync('examples'));

  md += pageComponents.makeExampleList("Exercises", fs.readdirSync('exercises'));
  md += '<div class="clearFix"></div>';
  //console.log(html);
  res.send(pageComponents.makePage(md));
  //res.send(pageComponents.makeHead(converter) + converter.makeHtml(md) + pageComponents.makeFooter(converter));
});

app.get("/:name.:ext", function (req, res) {  
  if (fs.existsSync(req.params['name']+'.'+req.params['ext'])) {
    res.sendFile(req.params['name']+'.'+req.params['ext'], {root: '.'});
  } else {
    var filename = req.params['name'] + '.md';

    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) {
        return console.log(err);
      }
      //var html = converter.makeHtml(data);
      //console.log(head(converter));
      //res.send(pageComponents.makeHead(converter) + html + pageComponents.makeFooter(converter));
      res.send(pageComponents.makePage(data, false, false));
    })
  }
})

app.use("/viewsource", function (req, res) {
  console.log(req.path);
  fs.readFile(req.path.substring(1), 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
    res.send(pageComponents.makePage("---\ntitle: Source of "+req.path+"\n---\n\n```html\n" + data + "\n```", false, true));

});


})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port)
})