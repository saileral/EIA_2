/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Final {
    export class Border extends CanvasObjects {
        
        constructor(_x: number, _y: number) {
            super(_x * thickness, _y * thickness);
        }

        drawBorders(): void {
            crc2.fillStyle = "black";
            crc2.fillRect(this.x, this.y, thickness, thickness);
        }
    }
}