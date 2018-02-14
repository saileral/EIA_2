var Abschluss;
(function (Abschluss) {
    var Border = (function () {
        function Border(_x, _y) {
            this.x = _x * Abschluss.thickness;
            this.y = _y * Abschluss.thickness;
        }
        Border.prototype.drawBorders = function () {
            Abschluss.crc2.fillStyle = "black";
            Abschluss.crc2.fillRect(this.x, this.y, Abschluss.thickness, Abschluss.thickness);
        };
        return Border;
    }());
    Abschluss.Border = Border;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Border.js.map