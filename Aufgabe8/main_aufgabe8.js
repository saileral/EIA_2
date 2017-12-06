/* Name:Alica Sailer
     Matrikel:256030
     Datum:06.12.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/
var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", init);
    function init() {
        var menge = prompt("Wie viel Spass moechtest du haben? (Auf einer Skala von 10 bis 100)"); //Fenster, dass nachfragt..
        var mengeNumber = parseInt(menge); //Eingabe von String in Number umwandeln
        if (mengeNumber >= 10 && mengeNumber <= 100) {
            for (var i = 0; i < mengeNumber; i++) {
                drawDiv(Math.random() * 500, Math.random() * 300, "hsl(" + Math.random() * 360 + ", 100%, 50%)", 30, 30); //Funktionsaufruf, Parameter werden �bergeben
            }
        }
        else {
            window.alert("Du hast nicht genau genug gelesen! Probiers doch einfach nochmal ;)"); //Bei falscher Eingabe
            init(); //Funktionsaufruf um Eingabe einer Zahl neu zu starten
        }
    }
    function drawDiv(_x, _y, _color, _height, _width) {
        var div = document.createElement("div"); //div-Element wird erstellen
        div.style.marginLeft = _x.toString(); //�bergabewert in String umwandeln, da h.style keine Zahlen entgegen nehmen kann
        div.style.marginTop = _y.toString(); //siehe oben
        div.style.width = _width.toString();
        div.style.height = _height.toString();
        div.style.backgroundColor = _color;
        document.body.appendChild(div); //html ELement in body hinzuf�gen
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=main_aufgabe8.js.map