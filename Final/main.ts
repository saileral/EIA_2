/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Abschluss {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let thickness: number = 30;
    let borders: boolean[][];

    class Border {
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
    
    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        let probe: Border = new Border(0, 0);
        //crc2.fillRect(0,0,thickness,thickness);


    }
}