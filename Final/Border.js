var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Abschluss;
(function (Abschluss) {
    var Border = (function (_super) {
        __extends(Border, _super);
        function Border(_x, _y) {
            _super.call(this, _x, _y);
            this.x = _x * Abschluss.thickness;
            this.y = _y * Abschluss.thickness;
        }
        Border.prototype.drawBorders = function () {
            Abschluss.crc2.fillStyle = "black";
            Abschluss.crc2.fillRect(this.x, this.y, Abschluss.thickness, Abschluss.thickness);
        };
        return Border;
    }(Abschluss.CanvasObjects));
    Abschluss.Border = Border;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Border.js.map