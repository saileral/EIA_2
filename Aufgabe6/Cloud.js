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
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        function Cloud(_x, _y) {
            _super.call(this, _x, _y);
            this.color = "#99E5D0";
            this.g = Math.random() * 1 + 0.3;
        }
        Cloud.prototype.move = function () {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += this.g;
        };
        Cloud.prototype.draw = function () {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 45, this.y, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 23, this.y - 20, 25, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
        };
        return Cloud;
    }(Aufgabe6.MovingObject));
    Aufgabe6.Cloud = Cloud;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Cloud.js.map