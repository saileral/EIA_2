/*   Name:Alica Sailer
     Matrikel:256030
     Datum:01.12.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=m oder 1=w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        //Student Objekt vom Typ StudentData erstellen
        var stringToSplit = _input.split(",", 6); //string wird in 6 Teile gesplitted
        if (parseInt(stringToSplit[0]) == NaN) {
            return "'Matrikelnummer' muss eine Zahl sein";
        }
        else if (stringToSplit[1] == "") {
            return "'Name' darf nicht leer sein";
        }
        else if (stringToSplit[2] == "") {
            return "'Vorname' darf nicht leer sein";
        }
        else if (parseInt(stringToSplit[3]) == NaN) {
            return "'Alter' muss eine Zahl sein";
        }
        else if (parseInt(stringToSplit[4]) != 1 && parseInt(stringToSplit[4]) != 0) {
            return "'Geschlecht' bitte mit 0=m oder 1=w eingeben; Eingabe war: " + stringToSplit[4];
        }
        else if (stringToSplit[5] == "") {
            return "'Kommentar' als W�rter eingeben";
        }
        else {
            var student = {
                matrikelnummer: parseInt(stringToSplit[0]),
                name: stringToSplit[1],
                vorname: stringToSplit[2],
                alter: parseInt(stringToSplit[3]),
                geschlecht: parseInt(stringToSplit[4]) == 1,
                kommentar: stringToSplit[5]
            };
            students.push(student);
            console.log(students);
            return "Erfolgreich gespeichert";
        }
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {
                var matrikelnummer = "Matrikelnummer " + students[i].matrikelnummer;
                var name_1 = "Name: " + students[i].name;
                var vorname = "Vorname: " + students[i].vorname;
                var alter = "Alter: " + students[i].alter;
                var geschlecht = void 0;
                if (students[i].geschlecht)
                    geschlecht = "Geschlecht: weiblich";
                else
                    geschlecht = "Geschlecht: m�nnlich";
                var kommentar = "Kommentar: " + students[i].kommentar;
                return "Deine Daten: " + "\n" + matrikelnummer + "\n" + name_1 + "\n" + vorname + "\n" + alter + "\n" + geschlecht + "\n" + kommentar;
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=main_aufgabe7.js.map