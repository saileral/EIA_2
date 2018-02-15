namespace Final {
    export class Player extends CanvasObjects {

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        drawPlayer(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "blue";
            crc2.fill();

        }

        movePlayer(): void {
            //hi
        }
    }
}