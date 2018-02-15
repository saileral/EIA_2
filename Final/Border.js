var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Final;
(function (Final) {
    var Border = (function (_super) {
        __extends(Border, _super);
        function Border(_x, _y) {
            _super.call(this, _x * Final.thickness, _y * Final.thickness);
        }
        Border.prototype.drawBorders = function () {
            Final.crc2.fillStyle = "black";
            Final.crc2.fillRect(this.x, this.y, Final.thickness, Final.thickness);
        };
        return Border;
    }(Final.CanvasObjects));
    Final.Border = Border;
})(Final || (Final = {}));
//# sourceMappingURL=Border.js.map