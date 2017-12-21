/* Name:Alica Sailer
     Matrikel:256030
     Datum:19.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe5;
(function (Aufgabe5) {
    var Snow = (function () {
        function Snow(_x, _y) {
            this.x = _x + Math.random() * 800;
            this.y = _y + Math.random() * 600;
            this.color = "#ffffff";
            this.g = Math.random();
        }
        Snow.prototype.sayHello = function () {
            console.log("Hello Snow");
        };
        Snow.prototype.update = function () {
            this.move();
            this.draw();
        };
        Snow.prototype.move = function () {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += this.g;
        };
        Snow.prototype.draw = function () {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
        };
        return Snow;
    }());
    Aufgabe5.Snow = Snow;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Snow.js.map