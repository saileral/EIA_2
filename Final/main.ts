/* Name:Alica Sailer
     Matrikel:256030
     Datum:14.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Final {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    export let thickness: number = 30;
    let borders: boolean[][];
    let border: Border;
    let player: Player;

    function init(): void {
        borders = []; //initialisiere borders

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
                    borders[y][x] = false;
                }
            }
        }
        //player = new Player(12, 1);
        //player.drawPlayer();








    }
}