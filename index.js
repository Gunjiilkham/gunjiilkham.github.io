var Typer = {
    text: "",
    index: 0,
    speed: 3,
    file: "rimijoker.html",
    init: function() {
      setInterval(this.updLstChr, 500);
      $.get(this.file, data => this.text = data.slice(0, -1));
    },
    content: () => $("#console").html(),
    write: str => $("#console").append(str),
    addText: key => {
      if (key.keyCode == 18) this.accessCount++;
      else if (key.keyCode == 20) this.deniedCount++;
      else if (key.keyCode == 27) this.hidepop();
      else if (this.text) {
        var cont = this.content();
        if (cont.endsWith("|"))
          $("#console").html(cont.slice(0, -1));
        if (key.keyCode != 8)
          this.index += this.speed;
        else if (this.index > 0)
          this.index -= this.speed;
        $("#console").html(this.text.slice(0, this.index).replace(/\n/g, "<br/>"));
        window.scrollBy(0, 50);
      }
      if (key.preventDefault && key.keyCode != 122)
        key.preventDefault();
      if (key.keyCode != 122)
        key.returnValue = false;
    },
    updLstChr: function() {
      var cont = this.content();
      if (cont.endsWith("|"))
        $("#console").html(cont.slice(0, -1));
      else
        this.write("|");
    }
  };
  
  function replaceUrls(text) {
    var http = text.indexOf("http://");
    var space = text.indexOf(".me ", http);
    if (space != -1) {
      var url = text.slice(http, space - 1);
      return text.replace(url, '<a href="' + url + '">' + url + "</a>");
    } else {
      return text;
    }
  }
  
  Typer.init();
  setInterval("t();", 30);
  function t() {
    Typer.addText({ keyCode: 123748 });
    if (Typer.index > Typer.text.length)
      clearInterval(timer);
  }