namespace Aufgabe10 {
    //Baumart
    export interface Baumart {
        art: string;
        preis: number;
    }

    export let nordmanntanne: Baumart = {
        art: "Nordmanntanne",
        preis: 31.55
    };

    export let blaufichte: Baumart = {
        art: "Blaufichte",
        preis: 48.36
    };
    export let fichte: Baumart = {
        art: "Fichte",
        preis: 29.99
    };
    export let kiefer: Baumart = {
        art: "Kiefer",
        preis: 56.84
    };

    export let baumarten: Baumart[] = [nordmanntanne, blaufichte, fichte, kiefer];

    //Halterung
    export interface Halterung {
        art: string;
        preis: number;
    }

    export let schwarz: Halterung = {
        art: "schwarz",
        preis: 15.99
    };

    export let gold: Halterung = {
        art: "gold",
        preis: 24.63
    };

    export let dunkelgruen: Halterung = {
        art: "silber",
        preis: 20.47
    };
    export let silber: Halterung = {
        art: "dunkelgrün",
        preis: 8.68
    };

    export let halterungen: Halterung[] = [schwarz, gold, dunkelgruen, silber];

    //Beleuchtung
    export interface Beleuchtung {
        art: string;
        preis: number;
    }

    export let lichterkette: Beleuchtung = {
        art: "Lichterkette",
        preis: 31.55
    };

    export let kerzen: Beleuchtung = {
        art: "Kerzen",
        preis: 48.36
    };

    export let beleuchtungen: Beleuchtung[] = [lichterkette, kerzen];

    //Schmuckartikel
    export interface Schmuckartikel {
        art: string;
        preis: number;
    }

    export let k1: Schmuckartikel = {
        art: "Kugel, bunt gestreift",
        preis: 2.11
    };

    export let k2: Schmuckartikel = {
        art: "Kugel, rot",
        preis: 0.80
    };

    export let k3: Schmuckartikel = {
        art: "Kugel, blau",
        preis: 0.88
    };
    export let k4: Schmuckartikel = {
        art: "Kugel, silber",
        preis: 0.90
    };

    export let k5: Schmuckartikel = {
        art: "Kugel, gold",
        preis: 0.99
    };

    export let l1: Schmuckartikel = {
        art: "Lametta, rot",
        preis: 0.50
    };

    export let l2: Schmuckartikel = {
        art: "Lametta, silber",
        preis: 0.50
    };

    export let l3: Schmuckartikel = {
        art: "Lametta, gold",
        preis: 0.50
    };

    export let a1: Schmuckartikel = {
        art: "Herz-Anhänger",
        preis: 3.79
    };

    export let a2: Schmuckartikel = {
        art: "Engel-Anhänger",
        preis: 4.62
    };

    export let a3: Schmuckartikel = {
        art: "Stern-Anhänger",
        preis: 5.82
    };

    export let z: Schmuckartikel = {
        art: "Zuckerstange",
        preis: 0.30
    };

    export let o: Schmuckartikel = {
        art: "Orangenscheiben",
        preis: 0.55
    };

    export let schmuck: Schmuckartikel[] = [k1, k2, k3, k4, k5, l1, l2, l3, a1, a2, a3, z, o];

    //Lieferoptionen
    export interface Lieferoptionen {
        art: string;
        preis: number;
    }

    export let standard: Lieferoptionen = {
        art: "Standard-Lieferung",
        preis: 0.0
    };

    export let express: Lieferoptionen = {
        art: "Express-Lieferung",
        preis: 4.88
    };

    export let lieferOptionen: Lieferoptionen[] = [standard, express];
}