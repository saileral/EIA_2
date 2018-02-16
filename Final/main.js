/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Final;
(function (Final) {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeydown);
    Final.thickness = 30;
    var border;
    var player;
    var star;
    function init() {
        Final.borders = []; //initialisiere borders
        player = new Final.Player(11, 0);
        star = new Final.Stars(11 * Final.thickness, 3 * Final.thickness);
        drawField();
    }
    function drawField() {
        var canvas = document.getElementsByTagName("canvas")[0];
        Final.crc2 = canvas.getContext("2d");
        var field = "" +
            "########### ##################\n" +
            "#  ##     # #    #   # ##   ##\n" +
            "##    # # # # ## # # #  # #  #\n" +
            "### # #  #  # #  #        ## #\n" +
            "#  # ## #   ## # #######     #\n" +
            "# #       ## #        #  # ###\n" +
            "# ## # ###      #  #  # ##   #\n" +
            "#    ##  ####### # #     #   #\n" +
            "#  ##    #  # #   # ## # # ###\n" +
            "# # # ## #                   #\n" +
            "# #      # #  ######  ###  # #\n" +
            "#    ### # # #    #  #   # ###\n" +
            "#####  #   # #### ## # # #  ##\n" +
            "##      # ##    # #### #  #  #\n" +
            "##  ##  #   ### #       #    #\n" +
            "#  #  #  ## #   ##### #  ### #\n" +
            "# ###    # #  #   # #     #  #\n" +
            "#   # # ##     ##   ##### ####\n" +
            "#   # #    # ##   #  #  #     \n" +
            "##############################\n";
        var lines = field.split("\n", 20);
        for (var y = 0; y < lines.length; y++) {
            Final.borders[y] = []; //initialisiere borders[y]
            var tempLine = lines[y];
            var splittedLine = tempLine.split("", 30);
            for (var x = 0; x < splittedLine.length; x++) {
                var character = splittedLine[x];
                if (character == "#") {
                    border = new Final.Border(x, y);
                    border.drawBorders();
                    Final.borders[y][x] = true;
                }
                else {
                    Final.crc2.fillStyle = "white";
                    Final.crc2.fillRect(x * 30, y * 30, 300, 300);
                    Final.borders[y][x] = false;
                }
            }
        }
        player.drawPlayer();
        star.drawStar(5, 30, 15);
    }
    function handleKeydown(_event) {
        console.log(_event);
        if (_event.keyCode == 40 || _event.keyCode == 83) {
            player.movePlayerY(1);
        }
        if (_event.keyCode == 38 || _event.keyCode == 87) {
            player.movePlayerY(-1);
        }
        if (_event.keyCode == 39 || _event.keyCode == 68) {
            player.movePlayerX(1);
        }
        if (_event.keyCode == 37 || _event.keyCode == 65) {
            player.movePlayerX(-1);
        }
        drawField();
    }
})(Final || (Final = {}));
//# sourceMappingURL=main.js.map