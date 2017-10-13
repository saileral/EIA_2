function dialogFeld(): void {
    let eingabe: string = prompt("Sag mir, wie du heißt!", "");
    if (eingabe != null) {
        document.getElementById("aufg0").innerHTML =
            "Hallo " + eingabe + "! Herzlich Willkommen auf dieser Seite.";
    }
}
