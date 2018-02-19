/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Final {
    export class Player extends CanvasObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        drawPlayer(): void {
            crc2.beginPath();
            crc2.arc(this.x * thickness + (thickness / 2), this.y * thickness + (thickness / 2), 10, 0, 2 * Math.PI);
            crc2.fillStyle = "blue";
            crc2.fill();
        }

        movePlayerX(_a: number): void {
            if ((this.x + _a) < 0 || (this.x + _a) >= borders[0].length)
                return;
            if (borders[this.y][this.x + _a] == false)
                this.x += _a;
        }

        movePlayerY(_a: number): void {
            if ((this.y + _a) < 0 || (this.y + _a) >= borders.length)
                return;
            if (borders[this.y + _a][this.x] == false)
                this.y += _a;
        }
    }
}