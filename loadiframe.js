console.log("loadiframe.js");

var divs = document.querySelectorAll("div.example");

divs.forEach(function(div) {
    div.addEventListener("click", function() {
      console.log("click");
      var iframe = this.querySelector("iframe");
      iframe.src = iframe.getAttribute("data-src");
      this.removeChild(this.querySelector("div"));
    });
});
