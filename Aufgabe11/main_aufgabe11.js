/* Name:Alica Sailer
     Matrikel:256030
     Datum:04.01.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/
var Aufgabe11;
(function (Aufgabe11) {
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
    var basketBaumart = [Aufgabe11.bA[0][0], "" + Aufgabe11.bA[0][1]];
    var basketHalter = ["kein Halter ausgewählt", "0"];
    var basketBeleuchtung = [Aufgabe11.b[0][0], "" + Aufgabe11.b[0][1]];
    var basketSchmuck = [];
    var basketLieferopt = ["keine Lieferoption ausgewählt", "0"];
    var feedback = document.createElement("div");
    var gesamtpreisVR = document.createElement("input");
    gesamtpreisVR.style.display = "none";
    function createElements() {
        //Baumart:
        var baumart = document.getElementById("baumart");
        var selectBox = document.createElement("select");
        selectBox.name = "Baumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        for (var i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Baumart") {
                var opt = document.createElement("option");
                opt.innerText = Aufgabe11.posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
        }
        //Halterung:
        var halterung = document.getElementById("halterung");
        for (var i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Halter") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "Halterung";
                radioB.value = Aufgabe11.posten[i].name;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe11.posten[i].name;
                halterung.appendChild(label);
            }
        }
        //Beleuchtung:
        var beleuchtung = document.getElementById("beleuchtung");
        var selectBox2 = document.createElement("select");
        selectBox2.name = "Beleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (var i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Beleuchtung") {
                var opt2 = document.createElement("option");
                opt2.innerText = Aufgabe11.posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
        //Schmuckartikel:
        var schmuckartikel = document.getElementById("schmuckartikel");
        var checkB = document.createElement("input");
        for (var i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Schmuck") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "Schmuckartikel: " + Aufgabe11.posten[i].name;
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = Aufgabe11.posten[i].name;
                schmuckartikel.appendChild(label2);
                var stepper = document.createElement("input");
                stepper.type = "number";
                //                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "0";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                var br = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }
        //Deine Daten:
        var daten = document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "Name";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "Straße";
        strasse.placeholder = "Straße";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        daten.appendChild(strasse);
        hNr = document.createElement("input");
        hNr.type = "text";
        hNr.name = "Hausnummer";
        hNr.placeholder = "Hausnummer";
        hNr.pattern = "[0-9]{1,}";
        hNr.required = true;
        daten.appendChild(hNr);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "Ort";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        daten.appendChild(ort);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "Postleitzahl";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "Mail-Adresse";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
        zusatz = document.createElement("textarea");
        zusatz.name = "Datenzusatz";
        zusatz.placeholder = "Adresszusatz";
        zusatz.cols = 30;
        zusatz.rows = 3;
        zusatz.required = false;
        daten.appendChild(zusatz);
        //Lieferoptionen:
        var lieferopt = document.getElementById("lieferoptionen");
        for (var i = 0; i < Aufgabe11.posten.length; i++) {
            if (Aufgabe11.posten[i].art == "Lieferung") {
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "Lieferoptionen";
                radioB2.value = Aufgabe11.posten[i].name;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = Aufgabe11.posten[i].name;
                lieferopt.appendChild(label3);
            }
        }
        //Button:
        var button = document.getElementById("button");
        var submit = document.createElement("button");
        submit.type = "submit";
        submit.innerText = "Bestellung überprüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    function warenkorb(_event) {
        var target = _event.target;
        var stepper = [];
        var checkBoxes = [];
        var gesamtpreis = 0;
        var all = document.getElementsByTagName("input");
        for (var i = 0; i < all.length; i++) {
            if (all[i].type == "number") {
                if (all[i].value != "0" && target.checked == true)
                    console.log(all[i].id, all[i].value);
            }
        }
        for (var i_1 = 0; i_1 < Aufgabe11.posten.length; i_1++) {
            //            console.log(_event.target);
            if (Aufgabe11.posten[i_1].art == "Schmuck") {
                stepper[i_1] = document.getElementById("stepper" + i_1);
                checkBoxes[i_1] = document.getElementById("check" + i_1);
            }
            if (target.value == Aufgabe11.posten[i_1].name && target.id == "selectBaumart") {
                basketBaumart[0] = Aufgabe11.posten[i_1].name;
                basketBaumart[1] = "" + Aufgabe11.posten[i_1].preis;
            }
            if (target.id == "radio" + i_1) {
                basketHalter[0] = Aufgabe11.posten[i_1].name;
                basketHalter[1] = "" + Aufgabe11.posten[i_1].preis;
            }
            if (target.id == "radio2." + i_1) {
                basketLieferopt[0] = Aufgabe11.posten[i_1].name;
                basketLieferopt[1] = "" + Aufgabe11.posten[i_1].preis;
            }
            if (target.value == Aufgabe11.posten[i_1].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = Aufgabe11.posten[i_1].name;
                basketBeleuchtung[1] = "" + Aufgabe11.posten[i_1].preis;
            }
            if (target.id == "check" + i_1 || target.id == "stepper" + i_1) {
                basketSchmuck[i_1] = [Aufgabe11.posten[i_1].name, "" + (Aufgabe11.posten[i_1].preis * parseInt(stepper[i_1].value))];
            }
        }
        var korb = document.getElementById("zusammenfassung");
        korb.style.width = "25%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#0B610B";
        korb.innerHTML = "<span class='wk'>Warenkorb</span><hr>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + " <br>";
        korb.innerHTML += "Weihnachtsbaumständer: " + basketHalter[0] + " " + basketHalter[1] + "€ <br>";
        korb.innerHTML += "" + basketBeleuchtung[0] + " " + basketBeleuchtung[1] + "€ <br>";
        korb.innerHTML += " " + basketLieferopt[0] + " " + basketLieferopt[1] + "€ <br>";
        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketHalter[1]) + parseFloat(basketLieferopt[1]);
        for (var i_2 = 0; i_2 < stepper.length; i_2++) {
            if (checkBoxes[i_2] != null && checkBoxes[i_2].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i_2][1]);
                korb.innerHTML += "" + basketSchmuck[i_2][0] + " " + basketSchmuck[i_2][1] + "€ <br>";
            }
        }
        korb.innerHTML += "<hr> Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + "€";
        gesamtpreisVR.name = "Gesamtpreis: " + Math.round(gesamtpreis * 100) / 100 + " Euro";
        korb.appendChild(gesamtpreisVR);
    }
    function handleMouseDown(_event) {
        feedback.innerText = " ";
        feedback.style.paddingBottom = "1em";
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
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=main_aufgabe11.js.map