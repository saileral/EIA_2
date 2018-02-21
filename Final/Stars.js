var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Name:Alica Sailer
     Matrikel:256030
     Datum:21.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Final;
(function (Final) {
    var Stars = (function (_super) {
        __extends(Stars, _super);
        function Stars(_x, _y) {
            _super.call(this, _x * Final.thickness + (Final.thickness / 2), _y * Final.thickness + (Final.thickness / 2));
        }
        Stars.prototype.drawStar = function (outerRadius, innerRadius) {
            var rot = Math.PI / 2 * 3;
            var x = this.x;
            var y = this.y;
            var step = Math.PI / 5;
            Final.crc2.strokeStyle = "#000";
            Final.crc2.beginPath();
            Final.crc2.moveTo(this.x, this.y - outerRadius);
            for (var i = 0; i < 5; i++) {
                x = this.x + Math.cos(rot) * outerRadius;
                y = this.y + Math.sin(rot) * outerRadius;
                Final.crc2.lineTo(x, y);
                rot += step;
                x = this.x + Math.cos(rot) * innerRadius;
                y = this.y + Math.sin(rot) * innerRadius;
                Final.crc2.lineTo(x, y);
                rot += step;
            }
            Final.crc2.lineTo(this.x, this.y - outerRadius);
            Final.crc2.closePath();
            Final.crc2.lineWidth = 5;
            Final.crc2.strokeStyle = "black";
            Final.crc2.stroke();
            Final.crc2.fillStyle = "yellow";
            Final.crc2.fill();
        };
        return Stars;
    }(Final.CanvasObjects));
    Final.Stars = Stars;
})(Final || (Final = {}));
//# sourceMappingURL=Stars.js.map