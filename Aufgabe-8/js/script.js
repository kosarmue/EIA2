var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", init);
    var flowersize = 24;
    var bees = [];
    Aufgabe8.flowers = [];
    var bienen = 10;
    var imgData;
    function init(_event) {
        Aufgabe8.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe8.crc2 = Aufgabe8.canvas.getContext("2d");
        var flowernr;
        var x;
        var y;
        var flowernumber = 16;
        drawSky(Aufgabe8.canvas.width, Aufgabe8.canvas.height);
        drawField(Aufgabe8.canvas.width, Aufgabe8.canvas.height);
        drawSun();
        drawMountain(220, 180, Aufgabe8.canvas.height);
        drawMountain(400, 240, Aufgabe8.canvas.height);
        // Random Flowers
        for (var i = 0; i < flowernumber; i++) {
            x = Math.floor(Math.random() * (Aufgabe8.canvas.width - 0 + 1));
            y = Math.floor(Math.random() * ((Aufgabe8.canvas.height / 2 + Aufgabe8.canvas.height / 5) - (Aufgabe8.canvas.height / 2 + 20) + 1)) + Aufgabe8.canvas.height / 2 + 20;
            // Math.floor(Math.random() * (max - min + 1)) + min;
            switch (Math.floor((Math.random() * 4) + 0)) {
                case 0:
                    new Aufgabe8.YellowFlower(x, y);
                    break;
                case 1:
                    new Aufgabe8.WhiteFlower(x, y);
                    break;
                case 2:
                    new Aufgabe8.BlueFlower(x, y);
                    break;
                case 3:
                    new Aufgabe8.RedFlower(x, y);
                    break;
                default:
                    break;
            }
        }
        console.log(Aufgabe8.flowers);
        drawBienenkorb(670, 640);
        imgData = Aufgabe8.crc2.getImageData(0, 0, Aufgabe8.canvas.width, Aufgabe8.canvas.height); // Speichern der Landschaft
        Aufgabe8.flowers.push(new Aufgabe8.YellowFlower(650, 710));
        Aufgabe8.flowers.push(new Aufgabe8.YellowFlower(100, 550));
        Aufgabe8.flowers.push(new Aufgabe8.YellowFlower(230, 600));
        Aufgabe8.flowers.push(new Aufgabe8.YellowFlower(300, 620));
        Aufgabe8.flowers.push(new Aufgabe8.WhiteFlower(50, 580));
        Aufgabe8.flowers.push(new Aufgabe8.WhiteFlower(500, 630));
        Aufgabe8.flowers.push(new Aufgabe8.WhiteFlower(250, 520));
        Aufgabe8.flowers.push(new Aufgabe8.WhiteFlower(410, 710));
        Aufgabe8.flowers.push(new Aufgabe8.BlueFlower(590, 550));
        Aufgabe8.flowers.push(new Aufgabe8.BlueFlower(390, 535));
        Aufgabe8.flowers.push(new Aufgabe8.BlueFlower(150, 720));
        Aufgabe8.flowers.push(new Aufgabe8.BlueFlower(450, 600));
        Aufgabe8.flowers.push(new Aufgabe8.RedFlower(700, 520));
        Aufgabe8.flowers.push(new Aufgabe8.RedFlower(540, 560));
        Aufgabe8.flowers.push(new Aufgabe8.RedFlower(340, 680));
        Aufgabe8.flowers.push(new Aufgabe8.RedFlower(170, 610));
        for (var i = 0; i < bienen; i++) {
            if (i % 2 == 0) {
                var b = new Aufgabe8.Bee(640, 610);
                bees.push(b);
            }
            else {
                var hb = new Aufgabe8.HoneyBee(640, 610);
                bees.push(hb);
            }
        }
        console.log(bees);
        window.setTimeout(animate, 20, Aufgabe8.canvas.width, Aufgabe8.canvas.height);
        Aufgabe8.canvas.addEventListener("click", addBee);
        Aufgabe8.canvas.addEventListener("touchstart", addBee);
    }
    function addBee(_event) {
        var b = new Aufgabe8.Bee(640, 610);
        bees.push(b);
    }
    function animate(_width, _height) {
        Aufgabe8.crc2.putImageData(imgData, 0, 0); // Laden der Landschaft
        for (var i = 0; i < Aufgabe8.flowers.length; i++) {
            switch (Aufgabe8.flowers[i].type) {
                case "yellow":
                    var fy = new Aufgabe8.YellowFlower(Aufgabe8.flowers[i].x, Aufgabe8.flowers[i].y);
                    fy.draw();
                    break;
                case "white":
                    var fw = new Aufgabe8.WhiteFlower(Aufgabe8.flowers[i].x, Aufgabe8.flowers[i].y);
                    fw.draw();
                    break;
                case "blue":
                    var fb = new Aufgabe8.BlueFlower(Aufgabe8.flowers[i].x, Aufgabe8.flowers[i].y);
                    fb.draw();
                    break;
                case "red":
                    var fr = new Aufgabe8.RedFlower(Aufgabe8.flowers[i].x, Aufgabe8.flowers[i].y);
                    fr.draw();
                    break;
                default:
                    break;
            }
        }
        for (var i = 0; i < bees.length; i++) {
            var b = bees[i];
            b.update();
        }
        window.setTimeout(animate, 20, _width, _height);
    }
    function drawSky(_width, _height) {
        Aufgabe8.crc2.fillStyle = "#78BEE0";
        Aufgabe8.crc2.fillRect(0, 0, _width, _height);
    }
    function drawField(_width, _height) {
        Aufgabe8.crc2.fillStyle = "#95D26F";
        Aufgabe8.crc2.fillRect(0, _height / 2, _width, _height / 2);
    }
    function drawSun() {
        Aufgabe8.crc2.beginPath();
        Aufgabe8.crc2.arc(560, 120, 60, 0 * Math.PI, 2 * Math.PI);
        Aufgabe8.crc2.closePath();
        Aufgabe8.crc2.fillStyle = "#FCC631";
        Aufgabe8.crc2.fill();
    }
    function drawMountain(_x, _y, _height) {
        Aufgabe8.crc2.beginPath();
        Aufgabe8.crc2.moveTo(_x, _y); // obere Ecke
        Aufgabe8.crc2.lineTo(_x + (_height / 2 - _y), _height / 2); // rechte untere Ecke
        Aufgabe8.crc2.lineTo(_x - (_height / 2 - _y), _height / 2); // linke untere Ecke
        Aufgabe8.crc2.closePath();
        Aufgabe8.crc2.fillStyle = "#BDBDBD";
        Aufgabe8.crc2.fill();
        drawPeak(_x, _y, _height);
    }
    function drawPeak(_x, _y, _height) {
        Aufgabe8.crc2.beginPath();
        Aufgabe8.crc2.moveTo(_x, _y); // obere Ecke
        var peakSize = (_height / 2 - _y) / 3;
        Aufgabe8.crc2.lineTo(_x + peakSize, _y + peakSize);
        Aufgabe8.crc2.lineTo(_x - peakSize, _y + peakSize);
        Aufgabe8.crc2.closePath();
        Aufgabe8.crc2.fillStyle = "#ffffff";
        Aufgabe8.crc2.fill();
    }
    function drawBienenkorb(_x, _y) {
        Aufgabe8.crc2.beginPath();
        Aufgabe8.crc2.ellipse(_x, _y, 60, 100, 0, 1 * Math.PI, 0);
        Aufgabe8.crc2.closePath();
        Aufgabe8.crc2.strokeStyle = "#3D251C";
        Aufgabe8.crc2.stroke();
        Aufgabe8.crc2.fillStyle = "#835A4B";
        Aufgabe8.crc2.fill();
        Aufgabe8.crc2.beginPath();
        Aufgabe8.crc2.ellipse(_x - 30, _y - 30, 16, 16, 0, 2 * Math.PI, 0);
        Aufgabe8.crc2.closePath();
        Aufgabe8.crc2.fillStyle = "#3D251C";
        Aufgabe8.crc2.fill();
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=script.js.map