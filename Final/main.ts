/* Name:Alica Sailer
     Matrikel:256030
     Datum:21.02.2018
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und nicht diktiert. */
namespace Final {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeydown);

    export let crc2: CanvasRenderingContext2D;
    export let thickness: number = 30;
    export let borders: boolean[][];
    let border: Border;
    let player: Player;
    let starX: number[] = [2, 5, 20, 14, 27, 15];
    let starY: number[] = [1, 13, 18, 5, 2, 11];
    let star: Stars[] = [];
    let score: number = 0;
    let sterneScore: HTMLDivElement;

    function init(): void {
        borders = []; //initialisiere borders

        player = new Player(11, 0);

        for (var i: number = 0; i < starX.length; i++) {
            star[i] = new Stars(starX[i], starY[i]);
        }

        drawField();

        sterneScore = <HTMLDivElement>document.getElementById("score");
        sterneScore.innerText = "Du hast noch keinen Stern gesammelt!";

        let buttonHoch: HTMLButtonElement = <HTMLButtonElement>document.getElementById("hoch");
        buttonHoch.addEventListener("click", handleClickHoch);
        let buttonLinks: HTMLButtonElement = <HTMLButtonElement>document.getElementById("links");
        buttonLinks.addEventListener("click", handleClickLinks);
        let buttonRechts: HTMLButtonElement = <HTMLButtonElement>document.getElementById("rechts");
        buttonRechts.addEventListener("click", handleClickRechts);
        let buttonRunter: HTMLButtonElement = <HTMLButtonElement>document.getElementById("runter");
        buttonRunter.addEventListener("click", handleClickRunter);
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
        for (var i: number = 0; i < star.length; i++) {
            if (starX[i] != 100 && starY[i] != 100)
                star[i].drawStar(10, 5);
        }
    }

    function handleKeydown(_event: KeyboardEvent): void {
        if (_event.keyCode == 40 || _event.keyCode == 83) {//runter
            player.movePlayerY(1);
        }
        if (_event.keyCode == 38 || _event.keyCode == 87) {//hoch
            player.movePlayerY(-1);
        }
        if (_event.keyCode == 39 || _event.keyCode == 68) {//rechts
            player.movePlayerX(1);
        }
        if (_event.keyCode == 37 || _event.keyCode == 65) {//links
            player.movePlayerX(-1);
        }

        drawField();
        scoreUpdate();
    }

    export function checkField(): void {
        for (var i: number = 0; i < star.length; i++) {
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

    function scoreUpdate(): void {
        if (score == 0)
            return;
        if (score == 1)
            sterneScore.innerText = "Du hast bereits einen Stern gesammelt.";
        else
            sterneScore.innerText = "Du hast bereits " + score + " Sterne gesammelt.";
    }

    function handleClickHoch(_event: MouseEvent): void {
        player.movePlayerY(-1);

        drawField();
        scoreUpdate();
    }

    function handleClickLinks(_event: MouseEvent): void {
        player.movePlayerX(-1);

        drawField();
        scoreUpdate();
    }
    
    function handleClickRechts(_event: MouseEvent): void {
        player.movePlayerX(1);

        drawField();
        scoreUpdate();
    }

    function handleClickRunter(_event: MouseEvent): void {
        player.movePlayerY(1);

        drawField();
        scoreUpdate();
    }
}