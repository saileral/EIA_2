namespace Abschluss {
    export class Border {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        drawBorders(): void {
            crc2.fillStyle = "black";
            crc2.fillRect(this.x, this.y, thickness, thickness);
        }
    }
}