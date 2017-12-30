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
    var checkedId = [];
    function createElements() {
        //Baumart:
        var baumart = document.getElementById("baumart");
        var selectBox = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        for (var i = 0; i < Aufgabe10.baumarten.length; i++) {
            var opt = document.createElement("option");
            opt.innerText = Aufgabe10.baumarten[i].art;
            opt.id = "option" + i;
            // opt.value = nicht m�glich "keine eigenschaft von HTML Element"
            selectBox.appendChild(opt);
        }
        //Halterung:
        var halterung = document.getElementById("halterung");
        for (var i = 0; i < Aufgabe10.halterungen.length; i++) {
            var radioB = document.createElement("input");
            radioB.type = "radio";
            radioB.name = "radioGroupHalterung";
            radioB.value = "radio" + i;
            radioB.id = "radio" + i;
            halterung.appendChild(radioB);
            label = document.createElement("label");
            label.id = "label" + i;
            label.htmlFor = radioB.id;
            label.innerText = Aufgabe10.halterungen[i].art;
            halterung.appendChild(label);
        }
        //Beleuchtung:
        var beleuchtung = document.getElementById("beleuchtung");
        var selectBox2 = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (var i = 0; i < Aufgabe10.beleuchtungen.length; i++) {
            var opt2 = document.createElement("option");
            opt2.innerText = Aufgabe10.beleuchtungen[i].art;
            opt2.id = "option2." + i;
            selectBox2.appendChild(opt2);
        }
        //Schmuckartikel:
        var schmuckartikel = document.getElementById("schmuckartikel");
        for (var i = 0; i < Aufgabe10.schmuck.length; i++) {
            var checkB = document.createElement("input");
            checkB.type = "checkbox";
            checkB.name = "CheckboxSchmuckartikel";
            checkB.value = "check";
            checkB.id = "check";
            schmuckartikel.appendChild(checkB);
            var label2 = document.createElement("label");
            label2.id = "label2." + i;
            label2.htmlFor = checkB.id;
            label2.innerText = Aufgabe10.schmuck[i].art;
            schmuckartikel.appendChild(label2);
            var stepper = document.createElement("input");
            stepper.type = "number";
            stepper.name = "StepperSchmuckartikel" + i;
            stepper.value = "0";
            stepper.id = "stepper" + i;
            stepper.min = "0";
            stepper.max = "15";
            stepper.step = "1";
            schmuckartikel.appendChild(stepper);
        }
        //Deine Daten:
        var daten = document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.required = true;
        daten.appendChild(name);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Stra�e";
        strasse.required = true;
        daten.appendChild(strasse);
        hNr = document.createElement("input");
        hNr.type = "text";
        hNr.name = "DatenHausnummer";
        hNr.placeholder = "Hausnummer, bitte 3-stellig";
        hNr.pattern = "[0-9]{3}";
        hNr.required = true;
        daten.appendChild(hNr);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
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
        for (var i = 0; i < Aufgabe10.lieferOptionen.length; i++) {
            var radioB2 = document.createElement("input");
            radioB2.type = "radio";
            radioB2.name = "radioGroupLieferoptionen";
            radioB2.value = "radio2." + i;
            radioB2.id = "radio2." + i;
            lieferopt.appendChild(radioB2);
            var label3 = document.createElement("label");
            label3.id = "label3." + i;
            label3.htmlFor = radioB2.id;
            label3.innerText = Aufgabe10.lieferOptionen[i].art;
            lieferopt.appendChild(label3);
        }
        //Button:
        var button = document.getElementById("button");
        var submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung �berpr�fen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    function warenkorb(_event) {
        console.log(_event.target);
        var target = _event.target;
        // console.log("Changed " + target.name + " to " + target.value);
        var zsmfassung = document.getElementById("zusammenfassung");
        if (target.id == "selectBaumart") {
            var selectElement = _event.target;
            var index = selectElement.selectedIndex;
            //console.log("Index: " + index);
            //console.log("Options: " + selectElement.options);
            //console.log("Selected: " + selectElement.options[index]);
            //console.log(selectElement.options[index].textContent);
            var create = document.createElement("p");
            create.className = "warenkorbContent";
            create.innerText = selectElement.options[index].textContent + Aufgabe10.baumarten[index].preis;
            zsmfassung.appendChild(create);
        }
        if (target.name == "radioGroupHalterung") {
            var inputElement = _event.target;
            if (inputElement.checked && inputElement.id == "radio0") {
                var labelId = document.getElementById("label0");
                var create = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + Aufgabe10.halterungen[0].preis;
                zsmfassung.appendChild(create);
            }
            if (inputElement.checked && inputElement.id == "radio1") {
                var labelId = document.getElementById("label1");
                var create = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + Aufgabe10.halterungen[1].preis;
                zsmfassung.appendChild(create);
            }
            if (inputElement.checked && inputElement.id == "radio2") {
                var labelId = document.getElementById("label2");
                var create = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + Aufgabe10.halterungen[2].preis;
                zsmfassung.appendChild(create);
            }
            if (inputElement.checked && inputElement.id == "radio3") {
                var labelId = document.getElementById("label3");
                var create = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + Aufgabe10.halterungen[3].preis;
                zsmfassung.appendChild(create);
            }
        }
        if (target.id == "selectBeleuchtung") {
            var selectElement = _event.target;
            var index = selectElement.selectedIndex;
            var create = document.createElement("p");
            create.className = "warenkorbContent";
            create.innerText = selectElement.options[index].textContent + Aufgabe10.beleuchtungen[index].preis;
            zsmfassung.appendChild(create);
        }
        if (target.name == "radioGroupLieferoptionen") {
            var inputElement = _event.target;
            console.log(inputElement.id);
            if (inputElement.checked && inputElement.id == "radio2.0") {
                var labelId = document.getElementById("label3.0");
                var create = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + Aufgabe10.lieferOptionen[0].preis;
                zsmfassung.appendChild(create);
            }
            if (inputElement.checked && inputElement.id == "radio2.1") {
                var labelId = document.getElementById("label3.1");
                var create = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + Aufgabe10.lieferOptionen[1].preis;
                zsmfassung.appendChild(create);
            }
        }
        if (target.id == "check") {
            var inputElement = _event.target;
            for (var i = 0; i < Aufgabe10.schmuck.length; i++) {
                if (inputElement.checked == true) {
                    var labelId = document.getElementById("label2." + i);
                    var text = labelId.innerText;
                    console.log(labelId.innerText);
                    checkedId.push(text);
                    console.log("array:" + checkedId);
                    console.log(checkedId.length);
                }
            }
            for (var i = 0; i < checkedId.length; i++) {
                var create = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = "hi";
                zsmfassung.appendChild(create);
            }
        }
    }
    function handleMouseDown(_event) {
        var feedback = document.createElement("div");
        if (name.checkValidity() == false || strasse.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Info zu deiner Bestellung: Du scheinst Deine Daten nicht korrekt angegeben zu haben. Bitte �berpr�fe sie nocheinmal.";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Info zu deiner Bestellung: Deine Daten wurden korrekt angegeben, vielen Dank.";
            document.body.appendChild(feedback);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main_aufgabe10.js.map