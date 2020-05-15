// server.js

// init project
const express = require("express");
const fs = require("fs");

const app = express();
//const markdownExtensions = require("./js/markdown-extensions");
const pageComponents = require("./js/page-components");


app.use("/js", express.static("js"));
app.use("/css", express.static("css"));
app.use("/examples", express.static("examples"));
app.use("/exercises", express.static("exercises"));

// when index route accessed, send readme converted to html
app.get("/", function(req, res) {
  res.redirect("index.html"); //sendFile('index.html', {root: '.'});
});

app.get("/listfiles.html", function(req, res) {
  var md = pageComponents.makePageFrom('filelist', fs.readdirSync("examples"),fs.readdirSync("exercises"));
   
  res.send(md);
  //res.send(pageComponents.makeHead(converter) + converter.makeHtml(md) + pageComponents.makeFooter(converter));
});

app.get("/:name.:ext", function(req, res) {
  console.log(new Date(), "Serving ", req.params["name"] + "." + req.params["ext"]);

  if (fs.existsSync(req.params["name"] + "." + req.params["ext"])) {
    res.sendFile(req.params["name"] + "." + req.params["ext"], { root: "." });
  } else {
    var filename = req.params["name"] + ".md";

    if (!fs.existsSync(filename)) {
      console.warn("File ", filename, " does not exist");
      res
        .status(404) // HTTP status 404: NotFound
        .send("Not found");
      return;
    }

    fs.readFile(filename, "utf8", function(err, data) {
      if (err) {
        return console.log(err);
      }

      if (filename === "index.md") {
        res.send(pageComponents.makePageFrom("index", data));
      } else {
        res.send(pageComponents.makePageFrom("chapter", data));
      }
    });
  }
  console.log(new Date(), "Done.")
});

app.use("/viewsource", function(req, res) {
  console.log(req.path);
  fs.readFile(req.path.substring(1), "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    //res.send(pageComponents.makePage("---\ntitle: Source of "+req.path+"\n---\n\n```html\n" + data + "\n```", false, true));
    res.send(pageComponents.makePageFrom("source", data, req.path));
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
