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
    let checkedId: string[] = [];

    function createElements(): void {
        //Baumart:
        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art != "Baumart")
                return;
            if (posten[i].art == "Baumart") {
                var opt: HTMLElement = document.createElement("option");
                opt.innerText = posten[i].name;
                opt.id = "option" + i;
                // opt.value = nicht m�glich "keine eigenschaft von HTML Element"
                selectBox.appendChild(opt);
            }
        }

        //Halterung:
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung");
        for (let i: number = 0; i < posten.length; i++) {
            console.log("vkj");
            if (posten[i].art != "Halter")
                return;
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
            if (posten[i].art != "Beleuchtung")
                return;
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
            if (posten[i].art != "Schmuck")
                return;
            if (posten[i].art == "Schmuck") {
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check";
                schmuckartikel.appendChild(checkB);

                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = posten[i].name;
                schmuckartikel.appendChild(label2);

                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "0";
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
        let lieferopt: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art != "Lieferung")
                return;
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
        submit.innerText = "Bestellung �berpr�fen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }

    function warenkorb(_event: Event): void {
        console.log(_event.target);
      /*  let target: HTMLSelectElement = <HTMLSelectElement>_event.target;
        // console.log("Changed " + target.name + " to " + target.value);
        let zsmfassung: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        if (target.id == "selectBaumart") {
            let selectElement: HTMLSelectElement = <HTMLSelectElement>_event.target;
            let index: number = selectElement.selectedIndex;
            //console.log("Index: " + index);
            //console.log("Options: " + selectElement.options);
            //console.log("Selected: " + selectElement.options[index]);
            //console.log(selectElement.options[index].textContent);
            var create: HTMLParagraphElement = document.createElement("p");
            create.className = "warenkorbContent";
            create.innerText = selectElement.options[index].textContent + baumarten[index].preis;
            zsmfassung.appendChild(create); 
        }
        if (target.name == "radioGroupHalterung") {
            let inputElement: HTMLInputElement = <HTMLInputElement>_event.target;
            if (inputElement.checked && inputElement.id == "radio0") {
                let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label0");
                var create: HTMLParagraphElement = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + halterungen[0].preis;
                zsmfassung.appendChild(create);
            }
            if (inputElement.checked && inputElement.id == "radio1") {
                let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label1");
                var create: HTMLParagraphElement = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + halterungen[1].preis;
                zsmfassung.appendChild(create);
            }
            if (inputElement.checked && inputElement.id == "radio2") {
                let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label2");
                var create: HTMLParagraphElement = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + halterungen[2].preis;
                zsmfassung.appendChild(create);
            }
            if (inputElement.checked && inputElement.id == "radio3") {
                let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label3");
                var create: HTMLParagraphElement = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + halterungen[3].preis;
                zsmfassung.appendChild(create);
            }
        }

        if (target.id == "selectBeleuchtung") {
            let selectElement: HTMLSelectElement = <HTMLSelectElement>_event.target;
            let index: number = selectElement.selectedIndex;
            var create: HTMLParagraphElement = document.createElement("p");
            create.className = "warenkorbContent";
            create.innerText = selectElement.options[index].textContent + beleuchtungen[index].preis;
            zsmfassung.appendChild(create);
        }
        if (target.name == "radioGroupLieferoptionen") {
            let inputElement: HTMLInputElement = <HTMLInputElement>_event.target;
            console.log(inputElement.id);
            if (inputElement.checked && inputElement.id == "radio2.0") {
                let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label3.0");
                var create: HTMLParagraphElement = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + lieferOptionen[0].preis;
                zsmfassung.appendChild(create);
            }
            if (inputElement.checked && inputElement.id == "radio2.1") {
                let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label3.1");
                var create: HTMLParagraphElement = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = labelId.innerText + lieferOptionen[1].preis;
                zsmfassung.appendChild(create);
            }
        }
        if (target.id == "check") {
            let inputElement: HTMLInputElement = <HTMLInputElement>_event.target;
            for (let i: number = 0; i < schmuck.length; i++) {
                if (inputElement.checked == true) {
                    let labelId: HTMLLabelElement = <HTMLLabelElement>document.getElementById("label2." + i);
                    let text: string = labelId.innerText;
                    console.log(labelId.innerText);
                    checkedId.push(text);
                    console.log("array:" + checkedId);
                    console.log(checkedId.length);

                }
            }
            for (let i: number = 0; i < checkedId.length; i++) {
                var create: HTMLParagraphElement = document.createElement("p");
                create.className = "warenkorbContent";
                create.innerText = checkedId[i];
                zsmfassung.appendChild(create);
            }

        }

*/


    }


    function handleMouseDown(_event: MouseEvent): void {
        let feedback: HTMLDivElement = document.createElement("div");
        if (name.checkValidity() == false || strasse.checkValidity() == false || hNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Info zu deiner Bestellung: Du scheinst Deine Daten nicht korrekt angegeben zu haben. Bitte �berpr�fe sie nocheinmal.";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Info zu deiner Bestellung: Deine Daten wurden korrekt angegeben, vielen Dank.";
            document.body.appendChild(feedback);
        }
    }
}