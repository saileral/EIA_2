/* Name:Alica Sailer
     Matrikel:256030
     Datum:04.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", draw);
    var crc2;
    var skidriver = [];
    var snowX = [];
    var snowY = [];
    var cloudX = [];
    var cloudY = [];
    var cloudSX = 10;
    var cloudSY = 60;
    var imgData;
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
        crc2.lineTo(1000, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //Skilift
        crc2.beginPath();
        crc2.moveTo(0, 60);
        crc2.lineTo(1110, 600);
        crc2.stroke();
        //Gondel 1
        crc2.beginPath();
        crc2.moveTo(200, 156);
        crc2.lineTo(200, 185);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(180, 184);
        crc2.lineTo(220, 185);
        crc2.stroke();
        //Gondel 2
        crc2.beginPath();
        crc2.moveTo(700, 401);
        crc2.lineTo(700, 430);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(680, 430);
        crc2.lineTo(720, 430);
        crc2.stroke();
        //Sonne
        crc2.beginPath();
        crc2.arc(800, 0, 80, 0, 2 * Math.PI);
        crc2.fillStyle = "#F7FE2E";
        crc2.fill();
        //fester Baum mit Funktionaaufruf
        drawTree(100, 500, "#39BF54");
        //B�ume durch Zufall/Schleife
        for (var i = 0; i < 5; i++) {
            var x = 40 + Math.random() * 180;
            var y = 400 + Math.random() * 180;
            drawTree(x, y, "#39BF54");
        }
        //Schleifen Schnee/Wolken/Skifahrer
        for (var i = 0; i < 800; i++) {
            snowX[i] = 0 + Math.random() * 800;
            snowY[i] = 0 + Math.random() * 600;
        }
        for (var i = 0; i < 2; i++) {
            cloudX[i] = 0 + Math.random() * 800;
            cloudY[i] = 130;
        }
        for (var i = 0; i < 3; i++) {
            skidriver[i] = {
                x: 0,
                y: 150,
                dx: Math.random() * 1 + 1.5,
                dy: Math.random() * 1 + 1.5,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
        }
        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Funktionsaufruf
        animate();
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
    function drawSnow(_x1, _y1) {
        crc2.beginPath();
        crc2.arc(_x1, _y1, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    //Funktion f�r Wolken
    function cloud(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 45, _y, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 23, _y - 20, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
    }
    //Funktion f�r kleine Wolke
    function cloudSmall(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x - 35, _y, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 17, _y - 21, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#99E5D0";
        crc2.fill();
    }
    //Funktion f�r Skifahrer
    function drawAndMoveSkidriver(_Skidriver) {
        _Skidriver.x += _Skidriver.dx * 3;
        _Skidriver.y += _Skidriver.dy * 2; //Steigung
        crc2.fillStyle = _Skidriver.color;
        crc2.fillRect(_Skidriver.x, _Skidriver.y, 50, -10);
        crc2.fillRect(_Skidriver.x + 10, _Skidriver.y - 10, 16, -40);
        crc2.beginPath();
        crc2.arc(_Skidriver.x + 18, _Skidriver.y - 50, 12, 0, 2 * Math.PI);
        crc2.fillStyle = _Skidriver.color;
        crc2.fill();
        crc2.fillStyle = _Skidriver.color;
        crc2.beginPath();
        crc2.moveTo(_Skidriver.x + 20, _Skidriver.y - 35);
        crc2.lineTo(_Skidriver.x + 40, _Skidriver.y - 30);
        crc2.stroke();
        crc2.fillStyle = _Skidriver.color;
        crc2.beginPath();
        crc2.moveTo(_Skidriver.x + 40, _Skidriver.y - 30);
        crc2.lineTo(_Skidriver.x + 55, _Skidriver.y - 10);
        crc2.stroke();
    }
    //Funktion zum animieren
    function animate() {
        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0); //Hintergrund restaurieren
        //Schnee
        for (var i = 0; i < snowX.length; i++) {
            if (snowY[i] > 600) {
                snowY[i] = 0;
            }
            snowY[i] += Math.random();
            drawSnow(snowX[i], snowY[i]);
        }
        //Wolken gro�
        for (var i = 0; i < cloudX.length; i++) {
            if (cloudX[i] > 800) {
                cloudX[i] = 0;
            }
            cloudX[i] += Math.random();
            cloud(cloudX[i], cloudY[i]);
        }
        //Wolke klein
        if (cloudSX > 800) {
            cloudSX = 0;
        }
        cloudSX += Math.random();
        cloudSmall(cloudSX, cloudSY);
        //Skifahrer
        for (var i = 0; i < skidriver.length; i++) {
            drawAndMoveSkidriver(skidriver[i]);
            if (skidriver[i].x > 800) {
                skidriver[i].x = 0;
                skidriver[i].y = 150;
            }
        }
        window.setTimeout(animate, 20); //Alle 20ms startet Funktion sich selbst neu
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=aufgabe4.js.map