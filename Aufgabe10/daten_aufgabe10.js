var Aufgabe10;
(function (Aufgabe10) {
    Aufgabe10.posten = [
        { art: "Baumart", name: "Nordmanntanne", preis: 31.55 },
        { art: "Baumart", name: "Blaufichte", preis: 48.36 },
        { art: "Baumart", name: "Fichte", preis: 29.99 },
        { art: "Baumart", name: "Kiefer", preis: 56.84 },
        { art: "Halter", name: "schwarz", preis: 15.99 },
        { art: "Halter", name: "gold", preis: 24.63 },
        { art: "Halter", name: "silber", preis: 20.47 },
        { art: "Halter", name: "dunkelgrün", preis: 8.68 },
        { art: "Beleuchtung", name: "Lichterkette", preis: 31.55 },
        { art: "Beleuchtung", name: "Kerzen", preis: 22.85 },
        { art: "Schmuck", name: "Kugel, bunt gestreift", preis: 2.11 },
        { art: "Schmuck", name: "Kugel, rot", preis: 0.80 },
        { art: "Schmuck", name: "Kugel, blau", preis: 0.88 },
        { art: "Schmuck", name: "Kugel, silber", preis: 0.90 },
        { art: "Schmuck", name: "Kugel, gold", preis: 0.99 },
        { art: "Schmuck", name: "Lametta, rot", preis: 0.50 },
        { art: "Schmuck", name: "Lametta, silber", preis: 0.50 },
        { art: "Schmuck", name: "Lametta, gold", preis: 0.50 },
        { art: "Schmuck", name: "Herz-Anhünger", preis: 3.79 },
        { art: "Schmuck", name: "Engel-Anhünger", preis: 4.62 },
        { art: "Schmuck", name: "Stern-Anhünger", preis: 5.82 },
        { art: "Schmuck", name: "Zuckerstange", preis: 0.30 },
        { art: "Schmuck", name: "Orangenscheiben", preis: 0.55 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.88 }
    ];
    for (var i = 0; i < Aufgabe10.posten.length; i++) {
        if (Aufgabe10.posten[i].art == "Baumart") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.bA.push(temp);
        }
        if (Aufgabe10.posten[i].art == "Halter") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.h.push(temp);
        }
        if (Aufgabe10.posten[i].art == "Beleuchtung") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.b.push(temp);
        }
        if (Aufgabe10.posten[i].art == "Schmuck") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.s.push(temp);
        }
        if (Aufgabe10.posten[i].art == "Lieferung") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.l.push(temp);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=daten_aufgabe10.js.map