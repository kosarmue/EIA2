/*
Aufgabe: Aufgabe 3a
Name: Kai Halfinger
Matrikel: 254872
Datum: 5. April 2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
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
        y = (reihe - 1) * size;
        placeDiv(color, x, y, size, i);
        if (x == (7 * size)) {
            reihe++;
        }
    }
    writeKoerner();
    function writeKoerner() {
        var feld = document.getElementsByClassName("felder");
        var koerner;
        for (var j = 0; j < feld.length; j++) {
            koerner = Math.pow(2, j);
            if (j > 23) {
                koerner = koerner.toExponential(5);
            }
            feld[j].textContent = koerner.toString();
        }
    }
    function placeDiv(_color, _x, _y, _size, _counter) {
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
    var divList = document.getElementsByTagName("div");
    for (var i_1 = 0; i_1 < 9; i_1++) {
        divList[i_1].addEventListener("click", function () {
            this.classList.toggle("selected");
            showSummeKoerner();
        });
    }
    function showSummeKoerner() {
        var selectedDivs = document.getElementsByClassName("selected");
        var summeKoerner = 0;
        if (selectedDivs.length == 0) {
            document.getElementById("tooltip").style.display = "none";
        }
        else {
            document.getElementById("tooltip").style.display = "inline-block";
        }
        for (var i_2 = 0; i_2 < selectedDivs.length; i_2++) {
            summeKoerner += Number(selectedDivs[i_2].textContent);
            document.getElementById("tooltip").textContent = "Summe der selektierten Reiskörner:" + "\r\n" + "Dezimal: " + summeKoerner.toString() + "\r\n" + "Hexadezimal: " + summeKoerner.toString(16);
        }
    }
});
document.addEventListener("mousemove", function (Event) {
    document.getElementById("tooltip").style.left = (Event.clientX + 10) + "px";
    document.getElementById("tooltip").style.top = (Event.clientY + 10) + "px";
});
//# sourceMappingURL=script.js.map