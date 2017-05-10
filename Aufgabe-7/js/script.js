var Aufgabe7;
(function (Aufgabe7) {
    window.addEventListener("load", init);
    var flowersize = 24;
    var bees = [];
    var flowers = [];
    var bienen = 10;
    var imgData;
    function init(_event) {
        Aufgabe7.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe7.crc2 = Aufgabe7.canvas.getContext("2d");
        var flowernr;
        var x;
        var y;
        var flowernumber = 16;
        drawSky(Aufgabe7.canvas.width, Aufgabe7.canvas.height);
        drawField(Aufgabe7.canvas.width, Aufgabe7.canvas.height);
        drawSun();
        drawMountain(220, 180, Aufgabe7.canvas.height);
        drawMountain(400, 240, Aufgabe7.canvas.height);
        flowers.push(new Aufgabe7.Flower(650, 710, "yellow"));
        flowers.push(new Aufgabe7.Flower(100, 550, "yellow"));
        flowers.push(new Aufgabe7.Flower(230, 600, "yellow"));
        flowers.push(new Aufgabe7.Flower(300, 620, "yellow"));
        flowers.push(new Aufgabe7.Flower(50, 580, "white"));
        flowers.push(new Aufgabe7.Flower(500, 630, "white"));
        flowers.push(new Aufgabe7.Flower(250, 520, "white"));
        flowers.push(new Aufgabe7.Flower(410, 710, "white"));
        flowers.push(new Aufgabe7.Flower(590, 550, "blue"));
        flowers.push(new Aufgabe7.Flower(390, 535, "blue"));
        flowers.push(new Aufgabe7.Flower(150, 720, "blue"));
        flowers.push(new Aufgabe7.Flower(450, 600, "blue"));
        flowers.push(new Aufgabe7.Flower(700, 520, "red"));
        flowers.push(new Aufgabe7.Flower(540, 560, "red"));
        flowers.push(new Aufgabe7.Flower(340, 680, "red"));
        flowers.push(new Aufgabe7.Flower(170, 610, "red"));
        // Random Flowers
        for (var i = 0; i < flowernumber; i++) {
            x = Math.floor(Math.random() * (Aufgabe7.canvas.width - 0 + 1));
            y = Math.floor(Math.random() * ((Aufgabe7.canvas.height / 2 + Aufgabe7.canvas.height / 5) - (Aufgabe7.canvas.height / 2 + 20) + 1)) + Aufgabe7.canvas.height / 2 + 20;
            // Math.floor(Math.random() * (max - min + 1)) + min;
            switch (Math.floor((Math.random() * 4) + 0)) {
                case 0:
                    new Aufgabe7.Flower(x, y, "yellow");
                    break;
                case 1:
                    new Aufgabe7.Flower(x, y, "white");
                    break;
                case 2:
                    new Aufgabe7.Flower(x, y, "blue");
                    break;
                case 3:
                    new Aufgabe7.Flower(x, y, "red");
                    break;
                default:
                    break;
            }
        }
        console.log(flowers);
        drawBienenkorb(670, 640);
        imgData = Aufgabe7.crc2.getImageData(0, 0, Aufgabe7.canvas.width, Aufgabe7.canvas.height); // Speichern der Landschaft
        for (var i = 0; i < bienen; i++) {
            var b = new Aufgabe7.Bee(640, 610);
            bees[i] = b;
        }
        window.setTimeout(animate, 20, Aufgabe7.canvas.width, Aufgabe7.canvas.height);
        Aufgabe7.canvas.addEventListener("click", addBee);
        Aufgabe7.canvas.addEventListener("touchstart", addBee);
    }
    function addBee(_event) {
        var b = new Aufgabe7.Bee(640, 610);
        bees.push(b);
    }
    function animate(_width, _height) {
        Aufgabe7.crc2.putImageData(imgData, 0, 0); // Laden der Landschaft
        for (var i = 0; i < bees.length; i++) {
            var b = bees[i];
            b.update();
        }
        window.setTimeout(animate, 20, _width, _height);
    }
    function drawSky(_width, _height) {
        Aufgabe7.crc2.fillStyle = "#78BEE0";
        Aufgabe7.crc2.fillRect(0, 0, _width, _height);
    }
    function drawField(_width, _height) {
        Aufgabe7.crc2.fillStyle = "#95D26F";
        Aufgabe7.crc2.fillRect(0, _height / 2, _width, _height / 2);
    }
    function drawSun() {
        Aufgabe7.crc2.beginPath();
        Aufgabe7.crc2.arc(560, 120, 60, 0 * Math.PI, 2 * Math.PI);
        Aufgabe7.crc2.closePath();
        Aufgabe7.crc2.fillStyle = "#FCC631";
        Aufgabe7.crc2.fill();
    }
    function drawMountain(_x, _y, _height) {
        Aufgabe7.crc2.beginPath();
        Aufgabe7.crc2.moveTo(_x, _y); // obere Ecke
        Aufgabe7.crc2.lineTo(_x + (_height / 2 - _y), _height / 2); // rechte untere Ecke
        Aufgabe7.crc2.lineTo(_x - (_height / 2 - _y), _height / 2); // linke untere Ecke
        Aufgabe7.crc2.closePath();
        Aufgabe7.crc2.fillStyle = "#BDBDBD";
        Aufgabe7.crc2.fill();
        drawPeak(_x, _y, _height);
    }
    function drawPeak(_x, _y, _height) {
        Aufgabe7.crc2.beginPath();
        Aufgabe7.crc2.moveTo(_x, _y); // obere Ecke
        var peakSize = (_height / 2 - _y) / 3;
        Aufgabe7.crc2.lineTo(_x + peakSize, _y + peakSize);
        Aufgabe7.crc2.lineTo(_x - peakSize, _y + peakSize);
        Aufgabe7.crc2.closePath();
        Aufgabe7.crc2.fillStyle = "#ffffff";
        Aufgabe7.crc2.fill();
    }
    function drawBienenkorb(_x, _y) {
        Aufgabe7.crc2.beginPath();
        Aufgabe7.crc2.ellipse(_x, _y, 60, 100, 0, 1 * Math.PI, 0);
        Aufgabe7.crc2.closePath();
        Aufgabe7.crc2.strokeStyle = "#3D251C";
        Aufgabe7.crc2.stroke();
        Aufgabe7.crc2.fillStyle = "#835A4B";
        Aufgabe7.crc2.fill();
        Aufgabe7.crc2.beginPath();
        Aufgabe7.crc2.ellipse(_x - 30, _y - 30, 16, 16, 0, 2 * Math.PI, 0);
        Aufgabe7.crc2.closePath();
        Aufgabe7.crc2.fillStyle = "#3D251C";
        Aufgabe7.crc2.fill();
    }
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=script.js.map