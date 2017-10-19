/* Name:Alica Sailer
     Matrikel:256030
     Datum:19.10.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe2;
(function (Aufgabe2) {
    window.addEventListener("load", draw);
    var crc2;
    function draw() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Hintergrund
        crc2.fillStyle = "#EFFBF8";
        crc2.fillRect(0, 0, 800, 600);
        //Berg 1- links
        crc2.beginPath();
        crc2.moveTo(140, 600);
        crc2.lineTo(400, 140);
        crc2.lineTo(700, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#39BF54";
        crc2.fill();
        //Berg 2- mitte
        crc2.beginPath();
        crc2.moveTo(330, 600);
        crc2.lineTo(550, 50);
        crc2.lineTo(780, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#39BF54";
        crc2.fill();
        //Berg 3- rechts
        crc2.beginPath();
        crc2.moveTo(400, 600);
        crc2.lineTo(700, 150);
        crc2.lineTo(970, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#39BF54";
        crc2.fill();
        //Berggipfel
        crc2.beginPath();
        crc2.moveTo(550, 50);
        crc2.lineTo(592, 150);
        crc2.lineTo(510, 150);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //Skipiste
        crc2.beginPath();
        crc2.moveTo(0, 120);
        crc2.lineTo(900, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //Skilift
        crc2.beginPath();
        crc2.moveTo(0, 60);
        crc2.lineTo(1010, 600);
        crc2.stroke();
        //Gondel 1
        crc2.beginPath();
        crc2.moveTo(200, 166);
        crc2.lineTo(200, 195);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(180, 195);
        crc2.lineTo(220, 195);
        crc2.stroke();
        //Gondel 2
        crc2.beginPath();
        crc2.moveTo(700, 434);
        crc2.lineTo(700, 463);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(680, 463);
        crc2.lineTo(720, 463);
        crc2.stroke();
        //Sonne
        crc2.beginPath();
        crc2.arc(800, 0, 80, 0, 2 * Math.PI);
        crc2.fillStyle = "#F7FE2E";
        crc2.fill();
        //Wolke1
        crc2.beginPath();
        crc2.arc(200, 90, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(245, 90, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(223, 70, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
        //Wolke2
        crc2.beginPath();
        crc2.arc(675, 65, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(710, 65, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(693, 46, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
        //fester Baum mit Funktionaaufruf
        drawTree(100, 500, "#39BF54");
        //B�ume durch Zufall/Schleife
        for (var i = 0; i < 5; i++) {
            var x = 40 + Math.random() * 180;
            var y = 400 + Math.random() * 180;
            drawTree(x, y, "#39BF54");
        }
        //Schneeflocken durch Zufall
        for (var i = 0; i < 500; i++) {
            var x = 0 + Math.random() * 800;
            var y = 0 + Math.random() * 600;
            drawSnow(x, y, 2, 0, 2 * Math.PI, "#ffffff");
        }
    }
    //Funktion f�r B�ume
    function drawTree(_x, _y, _color) {
        crc2.fillStyle = "#8B4513";
        crc2.fillRect(_x, _y, 20, 30);
        crc2.beginPath();
        crc2.moveTo(_x - 30, _y);
        crc2.lineTo(_x + 10, _y - 100);
        crc2.lineTo(_x + 50, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    //Funktion f�r Schneeflocken
    function drawSnow(_x1, _y1, _radius, _start, _end, _color) {
        crc2.beginPath();
        crc2.arc(_x1, _y1, _radius, _start, _end);
        crc2.fillStyle = _color;
        crc2.fill();
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=aufgabe2.js.map