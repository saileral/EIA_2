/* Name:Alica Sailer
     Matrikel:256030
     Datum:22.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */

namespace Aufgabe6 {
    window.addEventListener("load", draw);
    export let crc2: CanvasRenderingContext2D;

    let objects: MovingObject[] = [];

    let imgData: ImageData;

    function draw(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
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
        for (let i: number = 0; i < 5; i++) {

            let x: number = 40 + Math.random() * 180;
            let y: number = 400 + Math.random() * 180;

            drawTree(x, y, "#39BF54");
        }

        //Schleife Schnee
        for (let i: number = 0; i < 900; i++) {
            let s: Snow = new Snow(0, 0);
            objects.push(s);
        }

        //Schleife Wolken
        for (let i: number = 0; i < 2; i++) {
            let c: Cloud = new Cloud(0 + Math.random() * 800, 130);
            objects.push(c);
            let sc: SmallCloud = new SmallCloud(0 + Math.random() * 800, 60);
            objects.push(sc);
        }

        //Schleife Skifahrer
        for (let i: number = 0; i < 3; i++) {
            let sd: Skidriver = new Skidriver(0, 150);
            objects.push(sd);
        }

        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Funktionsaufruf
        animate();
    }

    //Funktion f�r B�ume    
    function drawTree(_x: number, _y: number, _color: string): void {

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

    //Funktion zum animieren
    function animate(): void {
        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0); //Hintergrund restaurieren

        for (let i: number = 0; i < objects.length; i++) {
            let s: MovingObject = objects[i];
            s.update();
        }
        window.setTimeout(animate, 20); //Alle 20ms startet Funktion sich selbst neu
    }
}