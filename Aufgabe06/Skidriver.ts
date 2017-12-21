/* Name:Alica Sailer
     Matrikel:256030
     Datum:22.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Aufgabe6 {
    export class Skidriver extends MovingObject {
        dx: number;
        dy: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.dx = 3 + Math.random() * 3;
            this.dy = 2 + Math.random();
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

        move(): void {
            if (this.x > 800) {
                this.x = 0;
                this.y = 150;
            }

            this.x += this.dx;
            this.y += this.dy;
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, 50, -10);

            crc2.fillRect(this.x + 10, this.y - 10, 16, -40);

            crc2.beginPath();
            crc2.arc(this.x + 18, this.y - 50, 12, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x + 20, this.y - 35);
            crc2.lineTo(this.x + 40, this.y - 30);
            crc2.stroke();

            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.moveTo(this.x + 40, this.y - 30);
            crc2.lineTo(this.x + 55, this.y - 10);
            crc2.stroke();
        }
    }
}