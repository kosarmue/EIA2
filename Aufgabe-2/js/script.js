document.addEventListener('DOMContentLoaded', function () {
    var n = 64;
    var size = 120;
    var reihe = 1;
    var color;
    for (var i = 0; i < n; i++) {
        if (reihe % 2 != 0) {
            if (i % 2 == 0) {
                color = "black";
            }
            else {
                color = "white";
            }
        }
        else {
            if (i % 2 == 0) {
                color = "white";
            }
            else {
                color = "black";
            }
        }
        x = (i % 8) * size;
        y = reihe * size;
        placeDiv(color, x, y, size, i);
        if (x == (7 * size)) {
            reihe++;
        }
    }
    writeKoerner();
    function writeKoerner() {
        var feld = document.getElementsByClassName("felder");
        var koerner = 1;
        for (var j = 0; j < feld.length; j++) {
            if (j > 23) {
                koerner = koerner.toExponential(4);
            }
            feld[j].textContent = koerner;
            koerner *= 2;
        }
    }
    function placeDiv(_color, _x, _y, _size, _koerner) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        var s = div.style;
        s.position = "absolute";
        s.display = "inline-block";
        div.className += _color;
        div.className += " felder";
        s.width = _size + "px";
        s.height = _size + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
});
//# sourceMappingURL=script.js.map