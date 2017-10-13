window.addEventListener("load", draw);
function draw() {
    var canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    var crc2 = canvas.getContext("2d");
    console.log(crc2);
    //Hintergrund
    crc2.fillStyle = "#CEF6EC";
    crc2.fillRect(0, 0, 800, 600);
    //Berg 1
    crc2.beginPath();
    crc2.moveTo(100, 500);
    crc2.lineTo(450, 150);
    crc2.lineTo(750, 150);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    /* crc2.beginPath();
     crc2.moveTo(0, 0);
     crc2.lineTo(400, 300);
     crc2.stroke();
 
     crc2.beginPath();
     crc2.moveTo(100, 100);
     crc2.lineTo(120, 130);
     crc2.lineTo(80, 130);
     crc2.closePath();
     crc2.stroke();
     crc2.fillStyle = "#0000ff";
     crc2.fill();
 
     crc2.beginPath();
     crc2.arc(200, 50, 40, 0, 2 * Math.PI);
     crc2.fill();*/
}
