/* Name:Alica Sailer
     Matrikel:256030
     Datum:19.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Aufgabe5 {
    export class Snow {
        x: number;
        y: number;
        color: string;
        g: number;

        constructor(_x: number, _y: number) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 600;
            this.color = "#ffffff";
            this.g = Math.random();
        }

        sayHello(): void {
            console.log("Hello Snow");
        }

        update(): void {
            this.move();
            this.draw();
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