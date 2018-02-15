var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Final;
(function (Final) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(_x, _y) {
            _super.call(this, _x, _y);
        }
        Player.prototype.drawPlayer = function () {
            Final.crc2.beginPath();
            Final.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            Final.crc2.fillStyle = "blue";
            Final.crc2.fill();
        };
        Player.prototype.movePlayer = function () {
            //hi
        };
        return Player;
    }(Final.CanvasObjects));
    Final.Player = Player;
})(Final || (Final = {}));
//# sourceMappingURL=Player.js.map