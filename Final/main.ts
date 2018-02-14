/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Abschluss {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    export let thickness: number = 30;
    let borders: boolean[][];
    
    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        let probe: Border = new Border(0, 0);
        probe.drawBorders();
        //crc2.fillRect(0,0,thickness,thickness);


    }
}