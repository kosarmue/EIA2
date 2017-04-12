var Blumenwiese;
(function (Blumenwiese) {
    window.addEventListener("load", init);
    var crc2;
    var flowersize = 20;
    function init(_event) {
        var canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        var color;
        var colornr;
        var x;
        var y;
        var colors = ["#11BAF9", "#EFD717", "#EF3017", "#AB7ACF"]; // blau, gelb, rot, lila
        var flowernumber = 30;
        drawSky(canvas.width, canvas.height);
        drawField(canvas.width, canvas.height);
        for (var i = 0; i < flowernumber; i++) {
            colornr = Math.floor((Math.random() * 4) + 0);
            color = colors[colornr];
            x = Math.floor(Math.random() * ((canvas.width - flowersize) - (flowersize + 1)) + flowersize);
            y = Math.floor(Math.random() * ((canvas.height - flowersize) - ((canvas.height / 2 + flowersize) + 1)) + (canvas.height / 2 + flowersize));
            // Math.floor(Math.random() * (max - min + 1)) + min;
            drawFlower(color, x, y);
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
    function drawFlower(_color, _x, _y) {
        crc2.fillStyle = _color;
        crc2.fillRect(_x, _y, flowersize, flowersize);
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=script.js.map