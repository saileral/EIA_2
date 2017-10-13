function dialogFeld() {
    var eingabe = prompt("Sag mir, wie du heißt!", "");
    if (eingabe != null) {
        document.getElementById("aufg0").innerHTML =
            "Hallo " + eingabe + "! Herzlich Willkommen auf dieser Seite.";
    }
}
