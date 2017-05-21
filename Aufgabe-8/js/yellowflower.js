var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Aufgabe8;
(function (Aufgabe8) {
    var YellowFlower = (function (_super) {
        __extends(YellowFlower, _super);
        function YellowFlower(_x, _y) {
            var _this = _super.call(this, _x, _y, "yellow") || this;
            _this.draw();
            return _this;
        }
        YellowFlower.prototype.draw = function () {
            var color = "#EFD717";
            var blaetter = 8;
            var circleColor = "#FFFFFF";
            var blattratio = 4;
            Aufgabe8.crc2.beginPath();
            for (var n = 0; n < blaetter; n++) {
                var blattbreite = 24 / blattratio;
                Aufgabe8.crc2.moveTo(this.x, this.y);
                Aufgabe8.crc2.ellipse(this.x, this.y, 24, blattbreite, n * (360 / blaetter) * Math.PI / 180, 0, 2 * Math.PI);
            }
            Aufgabe8.crc2.closePath();
            Aufgabe8.crc2.fillStyle = color;
            Aufgabe8.crc2.fill();
            // punkt zeichnen
            Aufgabe8.crc2.beginPath();
            Aufgabe8.crc2.arc(this.x, this.y, 24 / 5, 0, 2 * Math.PI, false);
            Aufgabe8.crc2.fillStyle = circleColor;
            Aufgabe8.crc2.fill();
        };
        return YellowFlower;
    }(Aufgabe8.Flower));
    Aufgabe8.YellowFlower = YellowFlower;
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=yellowflower.js.map