namespace Aufgabe5 {
    export class Skidriver {
        x: number;
        y: number;
        size: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x + 70 * Math.random();
            this.y = _y + 210 * Math.random();
        }

        sayHello(): void {
            console.log("Hallo");
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            if (this.x > 800) {
                this.x = 0;
                this.y = 150;
            }

            this.x += 3; // hier experimentieren um
            this.y += 2; // andere Bewegungsmuster zu finden
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

        setRandomStyle(): void {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
}