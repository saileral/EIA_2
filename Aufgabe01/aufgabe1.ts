/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.10.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */

window.addEventListener("load", draw);

function draw(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    //0tes HTMLElement mit dem tag-Name "Canvas" wird gespeichert

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");


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

    //Baum1
    crc2.beginPath();
    crc2.moveTo(100, 350);
    crc2.lineTo(60, 450);
    crc2.lineTo(140, 450);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#39BF54";
    crc2.fill();

    crc2.fillStyle = "#8B4513";
    crc2.fillRect(90, 450, 20, 30);

    //Baum2
    crc2.beginPath();
    crc2.moveTo(240, 400);
    crc2.lineTo(200, 500);
    crc2.lineTo(280, 500);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#39BF54";
    crc2.fill();

    crc2.fillStyle = "#8B4513";
    crc2.fillRect(230, 500, 20, 30);
}