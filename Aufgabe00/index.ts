/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.10.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
function dialogFeld(): void {
    let eingabe: string = prompt("Sag mir, wie du heißt!", "");
    if (eingabe != null) {
        document.getElementById("aufg0").innerHTML =
            "Hallo " + eingabe + "! Herzlich Willkommen auf dieser Seite.";
    }
}
