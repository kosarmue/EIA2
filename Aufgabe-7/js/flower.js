var Aufgabe7;
(function (Aufgabe7) {
    var Flower = (function () {
        function Flower(_x, _y, _type) {
            this.x = _x;
            this.y = _y;
            this.type = _type;
            switch (_type) {
                case "yellow":
                    this.draw("#EFD717", 8, "#FFFFFF", 4);
                    break;
                case "white":
                    this.draw("#FFFFFF", 7, "#EFD717", 8);
                    break;
                case "blue":
                    this.draw("#11BAF9", 3, "#FFFFFF", 2);
                    break;
                default:
                    this.draw("#EF3017", 8, "#FFFFFF", 3);
                    break;
            }
        }
        Flower.prototype.draw = function (_color, _blaetter, _circleColor, _blattratio) {
            // blätter zeichnen
            Aufgabe7.crc2.beginPath();
            for (var n = 0; n < _blaetter; n++) {
                var blattbreite = 24 / _blattratio;
                Aufgabe7.crc2.moveTo(this.x, this.y);
                Aufgabe7.crc2.ellipse(this.x, this.y, 24, blattbreite, n * (360 / _blaetter) * Math.PI / 180, 0, 2 * Math.PI);
            }
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = _color;
            Aufgabe7.crc2.fill();
            // punkt zeichnen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x, this.y, 24 / 5, 0, 2 * Math.PI, false);
            Aufgabe7.crc2.fillStyle = _circleColor;
            Aufgabe7.crc2.fill();
        };
        return Flower;
    }());
    Aufgabe7.Flower = Flower;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=flower.js.map