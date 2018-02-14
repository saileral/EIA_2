/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Abschluss;
(function (Abschluss) {
    window.addEventListener("load", init);
    Abschluss.thickness = 30;
    var borders;
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        Abschluss.crc2 = canvas.getContext("2d");
        var probe = new Abschluss.Border(0, 0);
        probe.drawBorders();
        //crc2.fillRect(0,0,thickness,thickness);
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=main.js.map