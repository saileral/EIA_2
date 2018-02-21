/* Name:Alica Sailer
     Matrikel:256030
     Datum:21.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Final {
    export class Stars extends CanvasObjects {

        constructor(_x: number, _y: number) {
            super(_x * thickness + (thickness / 2), _y * thickness + (thickness / 2));
        }

        drawStar(outerRadius: number, innerRadius: number): void {
            var rot: number = Math.PI / 2 * 3;
            var x: number = this.x;
            var y: number = this.y;
            var step: number = Math.PI / 5;

            crc2.strokeStyle = "#000";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - outerRadius);
            for (let i: number = 0; i < 5; i++) {
                x = this.x + Math.cos(rot) * outerRadius;
                y = this.y + Math.sin(rot) * outerRadius;
                crc2.lineTo(x, y);
                rot += step;

                x = this.x + Math.cos(rot) * innerRadius;
                y = this.y + Math.sin(rot) * innerRadius;
                crc2.lineTo(x, y);
                rot += step;
            }
            crc2.lineTo(this.x, this.y - outerRadius);
            crc2.closePath();
            crc2.lineWidth = 5;
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fillStyle = "yellow";
            crc2.fill();

        }
    }
}