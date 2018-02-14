/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Abschluss;
(function (Abschluss) {
    window.addEventListener("load", init);
    var crc2;
    var thickness = 30;
    var borders;
    var Border = (function () {
        function Border(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Border.prototype.drawBorders = function () {
            crc2.fillStyle = "black";
            crc2.fillRect(this.x, this.y, thickness, thickness);
        };
        return Border;
    }());
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        var probe = new Border(0, 0);
        //crc2.fillRect(0,0,thickness,thickness);
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=main.js.map