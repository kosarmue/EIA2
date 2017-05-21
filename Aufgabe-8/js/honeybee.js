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
    var HoneyBee = (function (_super) {
        __extends(HoneyBee, _super);
        function HoneyBee(_x, _y) {
            var _this = _super.call(this, _x, _y) || this;
            _this.setRandomTarget();
            _this.status = "fly";
            _this.pausecounter = 0;
            _super.prototype.draw.call(_this);
            return _this;
        }
        HoneyBee.prototype.setRandomTarget = function () {
            var i = Math.floor(Math.random() * (Aufgabe8.flowers.length - 1));
            this.targetx = Aufgabe8.flowers[i].x;
            this.targety = Aufgabe8.flowers[i].y;
        };
        HoneyBee.prototype.update = function () {
            this.move();
            _super.prototype.draw.call(this);
        };
        HoneyBee.prototype.move = function () {
            if (this.status == "fly") {
                this.x += Math.floor(Math.random() * 8) - 4;
                this.y += (this.targety - this.y) * 0.05;
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
                if ((this.targetx - this.x < 12 && this.targetx - this.x > -12) && (this.targety - this.y < 12 && this.targety - this.y > -12)) {
                    this.status = "pause";
                }
            }
            else {
                this.pausecounter += 1;
                if (this.pausecounter % 50 == 0) {
                    this.setRandomTarget();
                    this.status = "fly";
                }
            }
        };
        return HoneyBee;
    }(Aufgabe8.Bee));
    Aufgabe8.HoneyBee = HoneyBee;
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=honeybee.js.map