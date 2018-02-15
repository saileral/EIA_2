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