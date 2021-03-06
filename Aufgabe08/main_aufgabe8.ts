/* Name:Alica Sailer
     Matrikel:256030
     Datum:06.12.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/
namespace Aufgabe8 {

    window.addEventListener("load", init);

    function init(): void {
        var menge: string = prompt("Wie viel Spass moechtest du haben? (Auf einer Skala von 10 bis 100)"); //Fenster, dass nachfragt..
        var mengeNumber: number = parseInt(menge); //Eingabe von String in Number umwandeln
        if (mengeNumber >= 10 && mengeNumber <= 100) { //wenn Eingabe �ber o. gleich 10 oder unter/gl. 100 ist...
            for (var i: number = 0; i < mengeNumber; i++) {
                drawDiv(Math.random() * 500, Math.random() * 300, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 30, 30); //Funktionsaufruf, Parameter werden �bergeben
            }
        } else {
            window.alert("Du hast nicht genau genug gelesen! Probiers doch einfach nochmal ;)"); //Bei falscher Eingabe
            init(); //Funktionsaufruf um Eingabe einer Zahl neu zu starten
        }
    }
    
    function drawDiv(_x: number, _y: number, _color: string, _height: number, _width: number): void {

        let div: HTMLDivElement = document.createElement("div"); //div-Element wird erstellen
        div.style.marginLeft = _x + "px";
        div.style.marginTop = _y + "px"; 
        div.style.width = _width + "px";
        div.style.height = _height + "px";
        div.style.backgroundColor = _color;
        div.style.display = "inline";
        div.style.position = "absolute";
        document.body.appendChild(div); //html ELement in body hinzuf�gen
    }
}