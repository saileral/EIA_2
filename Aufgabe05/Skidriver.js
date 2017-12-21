/* Name:Alica Sailer
     Matrikel:256030
     Datum:19.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe5;
(function (Aufgabe5) {
    var Skidriver = (function () {
        function Skidriver(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.dx = 3 + Math.random() * 3;
            this.dy = 2 + Math.random();
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        Skidriver.prototype.sayHello = function () {
            console.log("Hello Skidrivers");
        };
        Skidriver.prototype.update = function () {
            this.move();
            this.draw();
        };
        Skidriver.prototype.move = function () {
            if (this.x > 800) {
                this.x = 0;
                this.y = 150;
            }
            this.x += this.dx;
            this.y += this.dy;
        };
        Skidriver.prototype.draw = function () {
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fillRect(this.x, this.y, 50, -10);
            Aufgabe5.crc2.fillRect(this.x + 10, this.y - 10, 16, -40);
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 18, this.y - 50, 12, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x + 20, this.y - 35);
            Aufgabe5.crc2.lineTo(this.x + 40, this.y - 30);
            Aufgabe5.crc2.stroke();
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x + 40, this.y - 30);
            Aufgabe5.crc2.lineTo(this.x + 55, this.y - 10);
            Aufgabe5.crc2.stroke();
        };
        return Skidriver;
    }());
    Aufgabe5.Skidriver = Skidriver;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Skidriver.js.map