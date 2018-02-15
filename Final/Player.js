var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Final;
(function (Final) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(_x, _y) {
            _super.call(this, _x, _y);
        }
        Player.prototype.drawPlayer = function () {
            Final.crc2.beginPath();
            Final.crc2.arc(this.x * Final.thickness + (Final.thickness / 2), this.y * Final.thickness + (Final.thickness / 2), 10, 0, 2 * Math.PI);
            Final.crc2.fillStyle = "blue";
            Final.crc2.fill();
        };
        Player.prototype.movePlayerX = function (_a) {
            if ((this.x + _a) < 0 || (this.x + _a) >= Final.borders[0].length)
                return;
            if (Final.borders[this.y][this.x + _a] == false)
                this.x += _a;
        };
        Player.prototype.movePlayerY = function (_a) {
            if ((this.y + _a) < 0 || (this.y + _a) >= Final.borders.length)
                return;
            if (Final.borders[this.y + _a][this.x] == false)
                this.y += _a;
        };
        return Player;
    }(Final.CanvasObjects));
    Final.Player = Player;
})(Final || (Final = {}));
//# sourceMappingURL=Player.js.map