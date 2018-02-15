/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
var Abschluss;
(function (Abschluss) {
    window.addEventListener("load", init);
    Abschluss.thickness = 30;
    var borders;
    var border;
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        Abschluss.crc2 = canvas.getContext("2d");
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
            var tempLine = lines[y];
            var splittedLine = tempLine.split("", 30);
            for (var x = 0; x < splittedLine.length; x++) {
                var character = splittedLine[x];
                if (character == "#") {
                    border = new Abschluss.Border(x, y);
                    border.drawBorders();
                    borders[y][x] = true;
                }
                else {
                    borders[y][x] = false;
                }
            }
        }
    }
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=main.js.map