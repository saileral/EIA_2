/* Name:Alica Sailer
     Matrikel:256030
     Datum:19.11.17
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Aufgabe5;
(function (Aufgabe5) {
    var SmallCloud = (function () {
        function SmallCloud(_x, _y) {
            this.x = _x;
            this.y = _y;
            this.color = "#99E5D0";
            this.g = Math.random() * 1;
        }
        SmallCloud.prototype.sayHello = function () {
            console.log("Hello small Clouds");
        };
        SmallCloud.prototype.update = function () {
            this.move();
            this.draw();
        };
        SmallCloud.prototype.move = function () {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += this.g;
        };
        SmallCloud.prototype.draw = function () {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 35, this.y, 25, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 25, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x - 17, this.y - 21, 20, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
        };
        return SmallCloud;
    }());
    Aufgabe5.SmallCloud = SmallCloud;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=SmallCloud.js.map