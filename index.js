var Typer = {
    text: "",
    index: 0,
    speed: 3,
    file: "./type.html",
    init: function () {
      $.get(Typer.file, function (data) {
        Typer.text = data;
      });
  
      Typer.addBlinkingCursor();
    },
    content: function () {
      return $("#console").html();
    },
    write: function (str) {
      $("#console").append(str);
      return false;
    },
    addText: function () {
      if (Typer.text) {
        var content = Typer.text.substring(0, Typer.index);
        var rtn = new RegExp("\n", "g");
        $("#console").html(content.replace(rtn, "<br/>"));
        Typer.index++;
  
        if (Typer.index > Typer.text.length) {
          clearInterval(Typer.timer);
        }
      }
    },
    addBlinkingCursor: function () {
      setInterval(() => {
        $("#console").append('<span class="blinking-cursor">█</span>');
      }, 500);
    },
  };
  
  Typer.init();
  Typer.timer = setInterval(() => Typer.addText(), 30);
  