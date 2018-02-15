/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Final;
(function (Final) {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeydown);
    Final.thickness = 30;
    var borders;
    var border;
    var player;
    var tempPositionX = 12;
    var tempPositionY = 0;
    function init() {
        borders = []; //initialisiere borders
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
            borders[y] = []; //initialisiere borders[y]
            var tempLine = lines[y];
            var splittedLine = tempLine.split("", 30);
            for (var x = 0; x < splittedLine.length; x++) {
                var character = splittedLine[x];
                if (character == "#") {
                    border = new Final.Border(x, y);
                    border.drawBorders();
                    borders[y][x] = true;
                }
                else {
                    borders[y][x] = false;
                }
            }
        }
        player = new Final.Player(12, 0);
        player.drawPlayer();
    }
    function handleKeydown(_event) {
        console.log(_event);
        if (_event.keyCode == 40 || _event.keyCode == 83) {
            player = new Final.Player(tempPositionX, tempPositionY + Final.thickness);
            player.drawPlayer();
        }
        if (_event.keyCode == 38 || _event.keyCode == 87) {
            player = new Final.Player(tempPositionX, tempPositionY - Final.thickness);
            player.drawPlayer();
        }
        if (_event.keyCode == 39 || _event.keyCode == 68) {
            player = new Final.Player(tempPositionX + Final.thickness, tempPositionY);
            player.drawPlayer();
        }
        if (_event.keyCode == 37 || _event.keyCode == 65) {
            player = new Final.Player(tempPositionX - Final.thickness, tempPositionY);
            player.drawPlayer();
        }
    }
})(Final || (Final = {}));
//# sourceMappingURL=main.js.map