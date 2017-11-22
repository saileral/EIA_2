var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Name:Alica Sailer
     Matrikel:256030
     Datum:22.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe6;
(function (Aufgabe6) {
    var Snow = (function (_super) {
        __extends(Snow, _super);
        function Snow(_x, _y) {
            _super.call(this, _x + Math.random() * 800, _y + Math.random() * 600);
            this.color = "#ffffff";
            this.g = Math.random();
        }
        Snow.prototype.move = function () {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += this.g;
        };
        Snow.prototype.draw = function () {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
        };
        return Snow;
    }(Aufgabe6.MovingObject));
    Aufgabe6.Snow = Snow;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Snow.js.map