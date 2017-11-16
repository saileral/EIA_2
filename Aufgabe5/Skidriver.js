var Aufgabe5;
(function (Aufgabe5) {
    var Skidriver = (function () {
        function Skidriver(_x, _y) {
            this.x = _x + 70 * Math.random();
            this.y = _y + 210 * Math.random();
        }
        Skidriver.prototype.sayHello = function () {
            console.log("Hallo");
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
            this.x += 3; // hier experimentieren um
            this.y += 2; // andere Bewegungsmuster zu finden
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
        Skidriver.prototype.setRandomStyle = function () {
            this.size = Math.random() * 30 + 10;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        };
        return Skidriver;
    }());
    Aufgabe5.Skidriver = Skidriver;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Skidriver.js.map