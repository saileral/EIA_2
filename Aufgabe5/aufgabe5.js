/* Name:Alica Sailer
     Matrikel:256030
     Datum:19.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", draw);
    var skidriver = []; //arrays von Typ Klasse
    var cloud = [];
    var smallCloud = [];
    var snow = [];
    var imgData;
    function draw() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe5.crc2 = canvas.getContext("2d");
        console.log(Aufgabe5.crc2);
        //Hintergrund
        Aufgabe5.crc2.fillStyle = "#EFFBF8";
        Aufgabe5.crc2.fillRect(0, 0, 800, 600);
        //Berg 1- links
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(140, 600);
        Aufgabe5.crc2.lineTo(400, 140);
        Aufgabe5.crc2.lineTo(700, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#39BF54";
        Aufgabe5.crc2.fill();
        //Berg 2- mitte
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(330, 600);
        Aufgabe5.crc2.lineTo(550, 50);
        Aufgabe5.crc2.lineTo(780, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#39BF54";
        Aufgabe5.crc2.fill();
        //Berg 3- rechts
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(400, 600);
        Aufgabe5.crc2.lineTo(700, 150);
        Aufgabe5.crc2.lineTo(970, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#39BF54";
        Aufgabe5.crc2.fill();
        //Berggipfel
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(550, 50);
        Aufgabe5.crc2.lineTo(592, 150);
        Aufgabe5.crc2.lineTo(510, 150);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#ffffff";
        Aufgabe5.crc2.fill();
        //Skipiste
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 120);
        Aufgabe5.crc2.lineTo(1000, 600);
        Aufgabe5.crc2.lineTo(0, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#ffffff";
        Aufgabe5.crc2.fill();
        //Skilift
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 60);
        Aufgabe5.crc2.lineTo(1110, 600);
        Aufgabe5.crc2.stroke();
        //Gondel 1
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(200, 156);
        Aufgabe5.crc2.lineTo(200, 185);
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(180, 184);
        Aufgabe5.crc2.lineTo(220, 185);
        Aufgabe5.crc2.stroke();
        //Gondel 2
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(700, 401);
        Aufgabe5.crc2.lineTo(700, 430);
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(680, 430);
        Aufgabe5.crc2.lineTo(720, 430);
        Aufgabe5.crc2.stroke();
        //Sonne
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(800, 0, 80, 0, 2 * Math.PI);
        Aufgabe5.crc2.fillStyle = "#F7FE2E";
        Aufgabe5.crc2.fill();
        //fester Baum mit Funktionaaufruf
        drawTree(100, 500, "#39BF54");
        //B�ume durch Zufall/Schleife
        for (var i = 0; i < 5; i++) {
            var x = 40 + Math.random() * 180;
            var y = 400 + Math.random() * 180;
            drawTree(x, y, "#39BF54");
        }
        //Schnee
        for (var i = 0; i < 900; i++) {
            snow[i] = new Aufgabe5.Snow(0, 0); //new ruft constructor auf//neue Instanz einer Klasse wird erstellt
        }
        //Wolken gro�
        for (var i = 0; i < 2; i++) {
            cloud[i] = new Aufgabe5.Cloud(0 + Math.random() * 800, 130);
        }
        //Wolken klein
        for (var i = 0; i < 2; i++) {
            smallCloud[i] = new Aufgabe5.SmallCloud(0 + Math.random() * 800, 60);
        }
        //Skifahrer
        for (var i = 0; i < 3; i++) {
            skidriver[i] = new Aufgabe5.Skidriver(0, 150);
        }
        //Hintergrund speichern
        imgData = Aufgabe5.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Funktionsaufruf
        animate();
    }
    //Funktion f�r B�ume    
    function drawTree(_x, _y, _color) {
        Aufgabe5.crc2.fillStyle = "#8B4513";
        Aufgabe5.crc2.fillRect(_x, _y, 20, 30);
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(_x - 30, _y);
        Aufgabe5.crc2.lineTo(_x + 10, _y - 100);
        Aufgabe5.crc2.lineTo(_x + 50, _y);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = _color;
        Aufgabe5.crc2.fill();
    }
    //Funktion zum animieren
    function animate() {
        console.log("Timeout");
        Aufgabe5.crc2.putImageData(imgData, 0, 0); //Hintergrund restaurieren
        //Schnee
        for (var i = 0; i < snow.length; i++) {
            var s = snow[i]; //an Stelle [i] des Arrays laden und per s.update an die Klasse �bergeben
            s.update(); // Move und Draw aufrufen
        }
        //Wolken gro�
        for (var i = 0; i < cloud.length; i++) {
            var s = cloud[i];
            s.update(); // Move und Draw aufrufen
        }
        //Wolke klein
        for (var i = 0; i < cloud.length; i++) {
            var s = smallCloud[i];
            s.update(); // Move und Draw aufrufen
        }
        //Skifahrer
        for (var i = 0; i < skidriver.length; i++) {
            var s = skidriver[i];
            s.update(); // Move und Draw aufrufen
        }
        window.setTimeout(animate, 20); //Alle 20ms startet Funktion sich selbst neu
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=aufgabe5.js.map