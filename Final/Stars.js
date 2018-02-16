var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Final;
(function (Final) {
    var Stars = (function (_super) {
        __extends(Stars, _super);
        function Stars(_x, _y) {
            _super.call(this, _x, _y);
        }
        /* drawStar(spikes: number, r0: number, r1: number): void {
 
             var rot: number = Math.PI / 2 * 3, x: number = this.x, y: number = this.y, step: number = Math.PI / spikes;
 
             crc2.strokeStyle = "yellow";
             crc2.beginPath();
             crc2.moveTo(this.x, this.y - r0);
             for (let i: number = 0; i < spikes; i++) {
                 x = this.x + Math.cos(rot) * r0;
                 y = this.y + Math.sin(rot) * r0;
                 crc2.lineTo(x, y);
                 rot += step;
 
                 x = this.x + Math.cos(rot) * r1;
                 y = this.y + Math.sin(rot) * r1;
                 crc2.lineTo(x, y);
                 rot += step;
             }
             crc2.lineTo(this.x, this.y - r0);
             crc2.stroke();
             crc2.closePath();
         }*/
        Stars.prototype.drawStar = function (spikes, outerRadius, innerRadius) {
            var rot = Math.PI / 2 * 3;
            var x = this.x;
            var y = this.y;
            var step = Math.PI / spikes;
            Final.crc2.strokeStyle = "#000";
            Final.crc2.beginPath();
            Final.crc2.moveTo(this.x, this.y - outerRadius);
            for (var i = 0; i < spikes; i++) {
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