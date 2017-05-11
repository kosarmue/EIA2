var Aufgabe7;
(function (Aufgabe7) {
    var Flower = (function () {
        function Flower(_x, _y, _type) {
            this.x = _x;
            this.y = _y;
            this.type = _type;
            this.draw();
        }
        Flower.prototype.draw = function () {
            var color;
            var blaetter;
            var circleColor;
            var blattratio;
            switch (this.type) {
                case "yellow":
                    color = "#EFD717";
                    blaetter = 8;
                    circleColor = "#FFFFFF";
                    blattratio = 4;
                    //this.draw("#EFD717", 8, "#FFFFFF", 4);
                    break;
                case "white":
                    color = "#FFFFFF";
                    blaetter = 8;
                    circleColor = "#EFD717";
                    blattratio = 8;
                    //this.draw("#FFFFFF", 8, "#EFD717", 8);
                    break;
                case "blue":
                    color = "#11BAF9";
                    blaetter = 3;
                    circleColor = "#FFFFFF";
                    blattratio = 2;
                    //this.draw("#11BAF9", 3, "#FFFFFF", 2);
                    break;
                default:
                    color = "#EF3017";
                    blaetter = 8;
                    circleColor = "#FFFFFF";
                    blattratio = 3;
                    //this.draw("#EF3017", 8, "#FFFFFF", 3);
                    break;
            }
            // blätter zeichnen
            Aufgabe7.crc2.beginPath();
            for (var n = 0; n < blaetter; n++) {
                var blattbreite = 24 / blattratio;
                Aufgabe7.crc2.moveTo(this.x, this.y);
                Aufgabe7.crc2.ellipse(this.x, this.y, 24, blattbreite, n * (360 / blaetter) * Math.PI / 180, 0, 2 * Math.PI);
            }
            Aufgabe7.crc2.closePath();
            Aufgabe7.crc2.fillStyle = color;
            Aufgabe7.crc2.fill();
            // punkt zeichnen
            Aufgabe7.crc2.beginPath();
            Aufgabe7.crc2.arc(this.x, this.y, 24 / 5, 0, 2 * Math.PI, false);
            Aufgabe7.crc2.fillStyle = circleColor;
            Aufgabe7.crc2.fill();
        };
        return Flower;
    }());
    Aufgabe7.Flower = Flower;
})(Aufgabe7 || (Aufgabe7 = {}));
//# sourceMappingURL=flower.js.map