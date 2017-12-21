/* Name:Alica Sailer
     Matrikel:256030
     Datum:22.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", draw);
    var objects = [];
    var imgData;
    function draw() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe6.crc2 = canvas.getContext("2d");
        console.log(Aufgabe6.crc2);
        //Hintergrund
        Aufgabe6.crc2.fillStyle = "#EFFBF8";
        Aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Berg 1- links
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(140, 600);
        Aufgabe6.crc2.lineTo(400, 140);
        Aufgabe6.crc2.lineTo(700, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#39BF54";
        Aufgabe6.crc2.fill();
        //Berg 2- mitte
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(330, 600);
        Aufgabe6.crc2.lineTo(550, 50);
        Aufgabe6.crc2.lineTo(780, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#39BF54";
        Aufgabe6.crc2.fill();
        //Berg 3- rechts
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(400, 600);
        Aufgabe6.crc2.lineTo(700, 150);
        Aufgabe6.crc2.lineTo(970, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#39BF54";
        Aufgabe6.crc2.fill();
        //Berggipfel
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(550, 50);
        Aufgabe6.crc2.lineTo(592, 150);
        Aufgabe6.crc2.lineTo(510, 150);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        //Skipiste
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 120);
        Aufgabe6.crc2.lineTo(1000, 600);
        Aufgabe6.crc2.lineTo(0, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        //Skilift
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 60);
        Aufgabe6.crc2.lineTo(1110, 600);
        Aufgabe6.crc2.stroke();
        //Gondel 1
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(200, 156);
        Aufgabe6.crc2.lineTo(200, 185);
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(180, 184);
        Aufgabe6.crc2.lineTo(220, 185);
        Aufgabe6.crc2.stroke();
        //Gondel 2
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(700, 401);
        Aufgabe6.crc2.lineTo(700, 430);
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(680, 430);
        Aufgabe6.crc2.lineTo(720, 430);
        Aufgabe6.crc2.stroke();
        //Sonne
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(800, 0, 80, 0, 2 * Math.PI);
        Aufgabe6.crc2.fillStyle = "#F7FE2E";
        Aufgabe6.crc2.fill();
        //fester Baum mit Funktionaaufruf
        drawTree(100, 500, "#39BF54");
        //B�ume durch Zufall/Schleife
        for (var i = 0; i < 5; i++) {
            var x = 40 + Math.random() * 180;
            var y = 400 + Math.random() * 180;
            drawTree(x, y, "#39BF54");
        }
        //Schleife Schnee
        for (var i = 0; i < 900; i++) {
            var s = new Aufgabe6.Snow(0, 0);
            objects.push(s);
        }
        //Schleife Wolken
        for (var i = 0; i < 2; i++) {
            var c = new Aufgabe6.Cloud(0 + Math.random() * 800, 130);
            objects.push(c);
            var sc = new Aufgabe6.SmallCloud(0 + Math.random() * 800, 60);
            objects.push(sc);
        }
        //Schleife Skifahrer
        for (var i = 0; i < 3; i++) {
            var sd = new Aufgabe6.Skidriver(0, 150);
            objects.push(sd);
        }
        //Hintergrund speichern
        imgData = Aufgabe6.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Funktionsaufruf
        animate();
    }
    //Funktion f�r B�ume    
    function drawTree(_x, _y, _color) {
        Aufgabe6.crc2.fillStyle = "#8B4513";
        Aufgabe6.crc2.fillRect(_x, _y, 20, 30);
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(_x - 30, _y);
        Aufgabe6.crc2.lineTo(_x + 10, _y - 100);
        Aufgabe6.crc2.lineTo(_x + 50, _y);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = _color;
        Aufgabe6.crc2.fill();
    }
    //Funktion zum animieren
    function animate() {
        console.log("Timeout");
        Aufgabe6.crc2.putImageData(imgData, 0, 0); //Hintergrund restaurieren
        for (var i = 0; i < objects.length; i++) {
            var s = objects[i];
            s.update();
        }
        window.setTimeout(animate, 20); //Alle 20ms startet Funktion sich selbst neu
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=aufgabe6.js.map