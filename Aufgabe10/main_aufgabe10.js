var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    var name;
    var strasse;
    var hNr;
    var ort;
    var plz;
    var mail;
    var zusatz;
    var label;
    var basketBaumart = [Aufgabe10.bA[0][0], "" + Aufgabe10.bA[0][1]];
    var basketHalter = ["kein Halter", "0"];
    var basketBeleuchtung = [Aufgabe10.b[0][0], "" + Aufgabe10.b[0][1]];
    var basketSchmuck = [];
    function createElements() {
        //Baumart:
        var baumart = document.getElementById("baumart");
        var selectBox = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Baumart") {
                var opt = document.createElement("option");
                opt.innerText = Aufgabe10.posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
        }
        //Halterung:
        var halterung = document.getElementById("halterung");
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Halter") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe10.posten[i].name;
                halterung.appendChild(label);
            }
        }
        //Beleuchtung:
        var beleuchtung = document.getElementById("beleuchtung");
        var selectBox2 = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Beleuchtung") {
                var opt2 = document.createElement("option");
                opt2.innerText = Aufgabe10.posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
        //Schmuckartikel:
        var schmuckartikel = document.getElementById("schmuckartikel");
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Schmuck") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = Aufgabe10.posten[i].name;
                schmuckartikel.appendChild(label2);
                var stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
            }
        }
        //Deine Daten:
        var daten = document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        //        name.pattern = "[a-z]";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Straße";
        //        name.pattern = "[a-z]";
        strasse.required = true;
        daten.appendChild(strasse);
        hNr = document.createElement("input");
        hNr.type = "text";
        hNr.name = "DatenHausnummer";
        hNr.placeholder = "Hausnummer";
        hNr.pattern = "[0-9]{2}";
        hNr.required = true;
        daten.appendChild(hNr);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        //        name.pattern = "[a-z]";
        ort.required = true;
        daten.appendChild(ort);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
        zusatz = document.createElement("textarea");
        zusatz.name = "DatenZusatz";
        zusatz.placeholder = "Adresszusatz";
        zusatz.cols = 30;
        zusatz.rows = 3;
        zusatz.required = true;
        daten.appendChild(zusatz);
        //Lieferoptionen:
        var lieferopt = document.getElementById("lieferoptionen");
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Lieferung") {
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = Aufgabe10.posten[i].name;
                lieferopt.appendChild(label3);
            }
        }
        //Button:
        var button = document.getElementById("button");
        var submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung überprüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    function warenkorb(_event) {
        var target = _event.target;
        var werte = [];
        var check = [];
        var gesamtpreis = 0;
        var korb = document.getElementById("zusammenfassung");
        korb.style.width = "40%";
        korb.style.height = "auto";
        korb.style.border = "1px solid black";
        korb.innerHTML = "<span>Warenkorb</span> <p></p>";
        console.log(target.value);
        for (var i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Schmuck") {
                werte[i] = document.getElementById("stepper" + i);
                check[i] = document.getElementById("check" + i);
            }
            if (target.value == Aufgabe10.posten[i].name && target.id == "selectBaumart") {
                basketBaumart[0] = Aufgabe10.posten[i].name;
                basketBaumart[1] = "" + Aufgabe10.posten[i].preis;
            }
            else if (target.id == "radio" + i) {
                basketHalter[0] = Aufgabe10.posten[i].name;
                basketHalter[1] = "" + Aufgabe10.posten[i].preis;
            }
            else if (target.value == Aufgabe10.posten[i].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = Aufgabe10.posten[i].name;
                basketBeleuchtung[1] = "" + Aufgabe10.posten[i].preis;
            }
            else if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [Aufgabe10.posten[i].name, "" + (Aufgabe10.posten[i].preis * parseInt(werte[i].value))];
            }
        }
        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketHalter[1]);
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "€ <p></p>";
        korb.innerHTML += "" + basketHalter[0] + " " + basketHalter[1] + "€ <p></p>";
        korb.innerHTML += "" + basketBeleuchtung[0] + " " + basketBeleuchtung[1] + "€ <p></p>";
        for (var i = 0; i < werte.length; i++) {
            if (check[i] != null) {
                if (check[i].checked == true) {
                    gesamtpreis += parseFloat(basketSchmuck[i][1]);
                    korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "€ <p></p>";
                }
            }
        }
        korb.innerHTML += " Gesamtpreis : " + Math.round(gesamtpreis * 100) / 100 + "€";
    }
    function handleMouseDown(_event) {
        var feedback = document.createElement("div");
        if (name.checkValidity() == false || strasse.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Info zu deiner Bestellung: Du scheinst Deine Daten nicht korrekt angegeben zu haben. Bitte überprüfe sie nocheinmal.";
            feedback.style.color = "red";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Info zu deiner Bestellung: Deine Daten wurden korrekt angegeben, vielen Dank.";
            feedback.style.color = "green";
            document.body.appendChild(feedback);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main_aufgabe10.js.map