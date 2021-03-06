var Aufgabe8;
(function (Aufgabe8) {
    var Bee = (function () {
        function Bee(_x, _y) {
            this.setColor();
            this.setWingcolor();
            this.x = _x;
            this.y = _y;
        }
        Bee.prototype.draw = function () {
            // Korpus
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.ellipse(this.x, this.y, 16, 10, 0, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.strokeStyle = "#000000";
            Aufgabe8.crc2.stroke();
            var gradient = Aufgabe8.crc2.createLinearGradient(this.x - 16, 0, this.x + 16, 0);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(0.199, this.color);
            gradient.addColorStop(0.2, "black");
            gradient.addColorStop(0.399, "black");
            gradient.addColorStop(0.4, this.color);
            gradient.addColorStop(0.599, this.color);
            gradient.addColorStop(0.6, "black");
            gradient.addColorStop(0.799, "black");
            gradient.addColorStop(0.8, this.color);
            gradient.addColorStop(1, this.color);
            Aufgabe8.crc2.fillStyle = gradient;
            Aufgabe8.crc2.fill();
            // Flügel
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.ellipse(this.x + 2, this.y - 10, 10, 6, .5 * Math.PI, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.strokeStyle = "#000000";
            Aufgabe8.crc2.lineWidth = 2;
            Aufgabe8.crc2.stroke();
            if (this.bluewings == true) {
                Aufgabe8.crc2.fillStyle = "#BCEAF9";
            }
            else {
                Aufgabe8.crc2.fillStyle = "#ffffff";
            }
            Aufgabe8.crc2.fill();
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.ellipse(this.x + 8, this.y - 10, 10, 6, .75 * Math.PI, 0, 2 * Math.PI);
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.strokeStyle = "#000000";
            Aufgabe8.crc2.lineWidth = 2;
            Aufgabe8.crc2.stroke();
            if (this.bluewings == true) {
                Aufgabe8.crc2.fillStyle = "#BCEAF9";
            }
            else {
                Aufgabe8.crc2.fillStyle = "#ffffff";
            }
            Aufgabe8.crc2.fill();
        };
        Bee.prototype.setColor = function () {
            switch (Math.floor((Math.random() * 4) + 1)) {
                case 1:
                    this.color = "gold";
                    break;
                case 2:
                    this.color = "peachpuff";
                    break;
                case 3:
                    this.color = "yellow";
                    break;
                case 4:
                    this.color = "orange";
                    break;
                default:
                    this.color = "gold";
                    break;
            }
        };
        Bee.prototype.setWingcolor = function () {
            if (Math.floor(Math.random() * 2) == 1) {
                this.bluewings = true;
            }
            else {
                this.bluewings = false;
            }
        };
        Bee.prototype.update = function () {
            this.move();
            this.draw();
        };
        Bee.prototype.move = function () {
            this.x += Math.floor(Math.random() * 8) - 4;
            this.y += Math.random() * 6 - 3;
            // Wieder Erscheinen beim Verlassen des Canvas
            if (this.x < 0) {
                this.x = Aufgabe8.canvas.width;
            }
            if (this.y < 0) {
                this.y = Aufgabe8.canvas.height;
            }
            if (this.y > Aufgabe8.canvas.height) {
                this.y = 0;
            }
        };
        return Bee;
    }());
    Aufgabe8.Bee = Bee;
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=bee.js.map