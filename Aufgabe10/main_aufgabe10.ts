namespace Aufgabe10 {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    var name: HTMLInputElement;
    var strasse: HTMLInputElement;
    var hNr: HTMLInputElement;
    var ort: HTMLInputElement;
    var plz: HTMLInputElement;
    var mail: HTMLInputElement;
    var zusatz: HTMLTextAreaElement;
    var label: HTMLLabelElement;

    var basketBaumart: string[] = [bA[0][0], "" + bA[0][1]];
    var basketHalter: string[] = ["Halter", " noch auswählen 0"];
    var basketBeleuchtung: string[] = [b[0][0], "" + b[0][1]];
    var basketSchmuck: string[][] = [];
    
    function createElements(): void {
        //Baumart:
        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Baumart") {
                var opt: HTMLElement = document.createElement("option");
                opt.innerText = posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
        }

        //Halterung:
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Halter") {
                var radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);

                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = posten[i].name;
                halterung.appendChild(label);
            }
        }

        //Beleuchtung:
        let beleuchtung: HTMLDivElement = <HTMLDivElement>document.getElementById("beleuchtung");
        let selectBox2: HTMLSelectElement = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Beleuchtung") {
                var opt2: HTMLElement = document.createElement("option");
                opt2.innerText = posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }

        //Schmuckartikel:
        let schmuckartikel: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuckartikel");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Schmuck") {
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);

                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = posten[i].name;
                schmuckartikel.appendChild(label2);

                let stepper: HTMLInputElement = document.createElement("input");
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
        let daten: HTMLDivElement = <HTMLDivElement>document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.required = true;
        daten.appendChild(name);

        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Straße";
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
        let lieferopt: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Lieferung") {
                var radioB2: HTMLInputElement = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);

                var label3: HTMLLabelElement = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = posten[i].name;
                lieferopt.appendChild(label3);
            }
        }

        //Button:
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung überprüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }

    function warenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let werte: HTMLInputElement[] = [];
        let check: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;

        for (let i: number = 10; i < 23; i++) {
            werte[i] = <HTMLInputElement>document.getElementById("stepper" + i);
            check[i - 10] = <HTMLInputElement>document.getElementById("check" + i);
        }

        for (let i: number = 0; i < posten.length; i++) {

            if (target.value == posten[i].name && target.id == "selectBaumart") {
                basketBaumart[0] = posten[i].name;
                basketBaumart[1] = "" + posten[i].preis;
            }
            else if (target.id == "radio" + i) {
                basketHalter[0] = posten[i].name;
                basketHalter[1] = "" + posten[i].preis;

            }
            else if (target.value == posten[i].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = posten[i].name;
                basketBeleuchtung[1] = "" + posten[i].preis;

            }
            else if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i - 10] = [posten[i].name, "" + (posten[i].preis * parseInt(werte[i].value))];

            }


        }

        let shoppingBasket: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        shoppingBasket.style.width = "30%";
        shoppingBasket.style.height = "auto";
        shoppingBasket.style.border = "1px solid black";
        shoppingBasket.innerHTML = "<span>Warenkorb</span> <p></p>";
        shoppingBasket.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "€ <p></p>";
        shoppingBasket.innerHTML += "" + basketHalter[0] + " " + basketHalter[1] + "€ <p></p>";
        shoppingBasket.innerHTML += "" + basketBeleuchtung[0] + " " + basketBeleuchtung[1] + "€ <p></p>";

        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketHalter[1]);
        
        for (let i: number = 0; i < 13; i++) {
            if (check[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]);
                shoppingBasket.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "€ <p></p>";
            }
        }

        shoppingBasket.innerHTML += " Gesamtpreis : " + gesamtpreis + "€";

    }


    function handleMouseDown(_event: MouseEvent): void {
        let feedback: HTMLDivElement = document.createElement("div");
        if (name.checkValidity() == false || strasse.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Info zu deiner Bestellung: Du scheinst Deine Daten nicht korrekt angegeben zu haben. Bitte überprüfe sie nocheinmal.";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Info zu deiner Bestellung: Deine Daten wurden korrekt angegeben, vielen Dank.";
            document.body.appendChild(feedback);
        }
    }
}