var Blumenwiese;
(function (Blumenwiese) {
    window.addEventListener("load", init);
    var crc2;
    var flowersize = 30;
    function init(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        var flowernr;
        var x;
        var y;
        var flowernumber = 16;
        drawSky(canvas.width, canvas.height);
        drawField(canvas.width, canvas.height);
        drawSun();
        drawMountain(220, 180, canvas.height);
        drawMountain(400, 240, canvas.height);
        drawYellow(650, 130, canvas.height);
        drawYellow(400, 200, canvas.height);
        drawYellow(550, 350, canvas.height);
        drawYellow(500, 140, canvas.height);
        drawWhite(420, 40, canvas.height);
        drawWhite(520, 160, canvas.height);
        drawWhite(480, 300, canvas.height);
        drawWhite(720, 200, canvas.height);
        drawBlue(380, 90, canvas.height);
        drawBlue(560, 30, canvas.height);
        drawBlue(430, 260, canvas.height);
        drawBlue(680, 320, canvas.height);
        drawRed(500, 280, canvas.height);
        drawRed(610, 230, canvas.height);
        drawRed(530, 130, canvas.height);
        drawRed(370, 300, canvas.height);
        for (var i = 0; i < flowernumber; i++) {
            flowernr = Math.floor((Math.random() * 4) + 0);
            x = Math.floor(Math.random() * ((canvas.width / 2 - flowersize) - (flowersize + 1)) + flowersize);
            y = Math.floor(Math.random() * ((canvas.height - flowersize) - ((canvas.height / 2 + flowersize) + 1)) + (canvas.height / 2 + flowersize));
            // Math.floor(Math.random() * (max - min + 1)) + min;
            switch (flowernr) {
                case 0:
                    drawYellow(x, y, 0);
                    break;
                case 1:
                    drawWhite(x, y, 0);
                    break;
                case 2:
                    drawBlue(x, y, 0);
                    break;
                case 3:
                    drawRed(x, y, 0);
                    break;
                default:
                    break;
            }
        }
    }
    function drawSky(_width, _height) {
        crc2.fillStyle = "#78BEE0";
        crc2.fillRect(0, 0, _width, _height);
    }
    function drawField(_width, _height) {
        crc2.fillStyle = "#95D26F";
        crc2.fillRect(0, _height / 2, _width, _height / 2);
    }
    function drawSun() {
        crc2.beginPath();
        crc2.arc(560, 120, 60, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#FCC631";
        crc2.fill();
    }
    function drawMountain(_x, _y, _height) {
        crc2.beginPath();
        crc2.moveTo(_x, _y); // obere Ecke
        crc2.lineTo(_x + (_height / 2 - _y), _height / 2); // rechte untere Ecke
        crc2.lineTo(_x - (_height / 2 - _y), _height / 2); // linke untere Ecke
        crc2.closePath();
        crc2.fillStyle = "#BDBDBD";
        crc2.fill();
        drawPeak(_x, _y, _height);
    }
    function drawPeak(_x, _y, _height) {
        crc2.beginPath();
        crc2.moveTo(_x, _y); // obere Ecke
        var peakSize = (_height / 2 - _y) / 3;
        crc2.lineTo(_x + peakSize, _y + peakSize);
        crc2.lineTo(_x - peakSize, _y + peakSize);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    function drawFlower(_color, _x, _y, _blaetter, _circleColor) {
        // crc2.fillStyle = _color;
        // crc2.fillRect(_x, _y, flowersize, flowersize);
        crc2.beginPath();
        // draw petals
        for (var n = 0; n < _blaetter; n++) {
            crc2.moveTo(_x, _y);
            crc2.ellipse(_x, _y, 9, 6, (360 / (_blaetter - n)) * Math.PI / 180, 0, 2 * Math.PI);
        }
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
        // draw yellow center
        crc2.beginPath();
        crc2.arc(_x, _y, flowersize / 5, 0, 2 * Math.PI, false);
        crc2.fillStyle = _circleColor;
        crc2.fill();
    }
    function drawYellow(_x, _y, _height) {
        drawFlower("#EFD717", _x, _y + _height / 2, 8, "#FFFFFF");
    }
    function drawWhite(_x, _y, _height) {
        drawFlower("#FFFFFF", _x, _y + _height / 2, 8, "#EFD717");
    }
    function drawBlue(_x, _y, _height) {
        drawFlower("#11BAF9", _x, _y + _height / 2, 8, "#FFFFFF");
    }
    function drawRed(_x, _y, _height) {
        drawFlower("#EF3017", _x, _y + _height / 2, 8, "#FFFFFF");
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=script.js.map