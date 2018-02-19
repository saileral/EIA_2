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
    var starX = [2, 5, 20, 14, 27, 15];
    var starY = [1, 13, 18, 5, 2, 11];
    var star = [];
    var score = 0;
    var sterneScore;
    function init() {
        Final.borders = []; //initialisiere borders
        player = new Final.Player(11, 0);
        for (var i = 0; i < starX.length; i++) {
            star[i] = new Final.Stars(starX[i], starY[i]);
        }
        drawField();
        sterneScore = document.getElementById("score");
        sterneScore.innerText = "Du hast noch keinen Stern gesammelt!";
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
            "# # # ## #      #            #\n" +
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
        for (var i = 0; i < star.length; i++) {
            if (starX[i] != 100 && starY[i] != 100)
                star[i].drawStar(10, 5);
        }
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
        scoreUpdate();
        console.log(player.x + " " + player.y);
        console.log(score);
    }
    function checkField() {
        for (var i = 0; i < star.length; i++) {
            if (player.x == starX[i] && starX[i] != 100) {
                if (player.y == starY[i] && starY[i] != 100) {
                    score += 1;
                    starX[i] = 100;
                    starY[i] = 100;
                }
            }
        }
        if (player.x == 29 && starX[i] != 19)
            alert("Herzlichen Glueckwunsch du hast das Ziel erreicht!\nDabei konntest du " + score + " Stern(e) sammeln.");
    }
    Final.checkField = checkField;
    function scoreUpdate() {
        if (score == 1)
            sterneScore.innerText = "Du hast bereits einen Stern gesammelt.";
        else
            sterneScore.innerText = "Du hast bereits " + score + " Sterne gesammelt.";
    }
})(Final || (Final = {}));
//# sourceMappingURL=main.js.map