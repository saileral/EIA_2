/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Final {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeydown);

    export let crc2: CanvasRenderingContext2D;
    export let thickness: number = 30;
    export let borders: boolean[][];
    let border: Border;
    let player: Player;

    function init(): void {
        borders = []; //initialisiere borders

        player = new Player(11, 0);

        drawField();
    }

    function drawField(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        let field: string = "" +
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
        let lines: string[] = field.split("\n", 20);

        for (var y: number = 0; y < lines.length; y++) {

            borders[y] = []; //initialisiere borders[y]

            let tempLine: string = lines[y];
            let splittedLine: string[] = tempLine.split("", 30);

            for (var x: number = 0; x < splittedLine.length; x++) {
                let character: string = splittedLine[x];

                if (character == "#") {
                    border = new Border(x, y);
                    border.drawBorders();
                    borders[y][x] = true;
                }
                else {
                    crc2.fillStyle = "white";
                    crc2.fillRect(x * 30, y * 30, 300, 300);

                    borders[y][x] = false;
                }
            }
        }
        player.drawPlayer();
    }

    function handleKeydown(_event: KeyboardEvent): void {
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
}