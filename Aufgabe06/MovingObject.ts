/* Name:Alica Sailer
     Matrikel:256030
     Datum:22.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Aufgabe6 {
    export class MovingObject {
        x: number;
        y: number;
        color: string;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            console.log("Create shape");
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            //abstract
        }

        draw(): void {
            //abstract
        }
    }
}