var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        var fieldsets = document.getElementsByTagName("fieldset");
        for (var i = 0; i < fieldsets.length; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function handleChange(_event) {
        //console.log(_event);
        //*/
        var target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        //*/
        //*/ note: this == _event.currentTarget in an event-handler
        if (this.id == "checkbox")
            console.log("Changed " + target.name + " to " + target.checked);
        //*/
        //*/
        if (target.name == "Slider") {
            var progress = document.getElementsByTagName("progress")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
        //*/
        if (target.name == "Stepper") {
            var progress = document.getElementsByTagName("meter")[0];
            progress.value = parseFloat(target.value);
        }
        //*/
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=main_aufgabe10.js.map