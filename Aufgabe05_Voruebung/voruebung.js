var L05_Class;
(function (L05_Class) {
    var square;
    var squares = [];
    window.addEventListener("load", init);
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        L05_Class.crc2 = canvas.getContext("2d");
        console.log(L05_Class.crc2);
        square = new L05_Class.Square(200, 100);
        square.setRandomStyle();
        square.sayHello();
        for (var i = 0; i < 30; i++) {
            var s = new L05_Class.Square(200, 150);
            s.setRandomStyle();
            squares[i] = s;
        }
        animate();
    }
    function animate() {
        L05_Class.crc2.clearRect(0, 0, 400, 300); // hier Hintergrund restaurieren
        square.update();
        for (var i = 0; i < squares.length; i++) {
            var s = squares[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(L05_Class || (L05_Class = {}));
//# sourceMappingURL=voruebung.js.map