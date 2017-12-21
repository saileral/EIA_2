/* Name:Alica Sailer
     Matrikel:256030
     Datum:22.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Aufgabe6 {
    export class Snow extends MovingObject {
        g: number;

        constructor(_x: number, _y: number) {
            super(_x + Math.random() * 800, _y + Math.random() * 600);
            this.color = "#ffffff";
            this.g = Math.random();
        }

        move(): void {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += this.g;
        }

        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
        }
    }
}