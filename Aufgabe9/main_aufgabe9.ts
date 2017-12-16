/* Name:Alica Sailer
     Matrikel:256030
     Datum:16.12.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert.*/

namespace Aufgabe9 {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeydown);
    let text: HTMLElement;
    let aBisZ: string[];
    let tempABisZ: string = "";


    function init(): void {
        //      console.log("Hallo");
        aBisZ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        for (let i: number = 0; i < aBisZ.length; i++) {
            let s1: HTMLDivElement = document.createElement("div");
            s1.style.width = "40px";
            s1.style.margin = "2px";
            s1.style.height = "40px";
            s1.style.backgroundColor = "#2FEEC5";
            s1.style.color = "white";
            s1.style.fontSize = "30px";
            s1.style.display = "inline";
            s1.style.textAlign = "center";
            s1.innerText = aBisZ[i];
            s1.id = aBisZ[i].toLowerCase();
            s1.addEventListener("mousedown", handleMouseDownS1);
            document.body.appendChild(s1);
        }

        let s2: HTMLDivElement = document.createElement("div");
        s2.style.backgroundColor = "#2FEEC5";
        s2.style.width = "1150px";
        s2.style.height = "500px";
        s2.style.marginTop = "10px";
        s2.addEventListener("mousedown", handleMouseDownS2);
        document.body.appendChild(s2);

    }

    function handleMouseDownS1(_event: MouseEvent): void {
        //      console.log(_event.target);
        if (tempABisZ == "") {
            let h: HTMLDivElement = <HTMLDivElement>_event.target;
            //          console.log(h.innerText);
            h.style.color = "#2FEEC5";
            h.style.backgroundColor = "white";
            tempABisZ = h.id.toUpperCase();
            //          console.log(tempABisZ);
        }
    }

    function handleMouseDownS2(_event: MouseEvent): void {
        if (tempABisZ == "")
            return;

        text = document.createElement("div");
        text.className = "DOM-Pointer";
        text.innerText = tempABisZ;
        text.style.position = "absolute";
        text.style.color = "white";
        text.style.fontSize = "30px";
        text.style.left = _event.pageX.toString();
        text.style.top = _event.pageY.toString();
        text.addEventListener("mousedown", handleMouseDownDelete);
        document.body.appendChild(text);

        let clickedDiv: HTMLDivElement = <HTMLDivElement>document.getElementById(tempABisZ.toLowerCase());
        clickedDiv.style.color = "white";
        clickedDiv.style.backgroundColor = "#2FEEC5";
        tempABisZ = "";

    }

    function handleKeydown(_event: KeyboardEvent): void {
//        console.log(_event);
        if (aBisZ.indexOf(_event.key.toUpperCase()) != -1) {
            let h: HTMLDivElement = <HTMLDivElement>document.getElementById(_event.key);
            //          console.log(h.innerText);
            h.style.color = "#2FEEC5";
            h.style.backgroundColor = "white";
            tempABisZ = _event.key.toUpperCase();
        }
    }


    function handleMouseDownDelete(_event: MouseEvent, _keyEvent: KeyboardEvent): void {
        console.log("Funktion wird aufgerufen");
        if (_keyEvent.altKey == false)
            return;
        
        if (_keyEvent.altKey == true) {
            let h: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(h);
        }





    }
}
