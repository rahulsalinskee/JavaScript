{
    let boxes = document.querySelectorAll(".box");
    let resetButton = document.querySelector("#reset-button");
    let newGameButton = document.querySelector("#start-new-game-button");
    let messageContainer = document.querySelector(".message-container");
    let winnerMessage = document.querySelector("#message");

    let turnO = true;

    const winningPatterns = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8]
    ];

    const resetGame = () => {
        boxes.forEach((box) => {
            messageContainer.classList.add("hide");
            StartGameByEnableBoxes();
        });
    }

    /* ***** Approach - 1 For Working Code using Anonymous function  ***** */
    // boxes.forEach((box) => {
    //     box.addEventListener("click", () => {
    //         box.innerHTML = "X";
    //     });
    // });

    /* ***** Approach - 2 For Working Code with Anonymous & named function ***** */
    // boxes.forEach((box) => {
    //     box.addEventListener("click", function markBox() {
    //         box.innerHTML = "X";
    //     });
    // });

    /* ***** Approach - 3 For Working Code Using Named function  ***** */
    /*************  ✨ Codeium Command ⭐  *************/
    /**
     * Marks a box in a Tic Tac Toe grid with either an X or O, depending on the
     * current turn.
     * @param {Event} event - The click event on a box.
     */
    /******  c16da9f2-f51a-411b-91f1-890bd64cf305  *******/
    function markBox(event) {
        if (turnO) {
            event.target.innerHTML = "O";
            turnO = false;
        }
        else {
            event.target.innerHTML = "X";
            event.target.style.color = "blue";
            turnO = true;
        }
        event.target.disabled = true;
        CheckWinner();
    }

    boxes.forEach((box) => {
        box.addEventListener("click", markBox);
    });

    /**
     * Checks if there is a winner in the Tic Tac Toe game.
     * Goes through all the winning patterns and checks if all the boxes in the
     * pattern have the same value. If yes, it calls the ShowWinner method with
     * the winner message.
     */
    function CheckWinner() {
        for (let pattern of winningPatterns) {
            let position1Value = boxes[pattern[0]].innerHTML;
            let position2Value = boxes[pattern[1]].innerHTML;
            let position3Value = boxes[pattern[2]].innerHTML;

            if (position1Value != "" && position2Value != "" && position3Value != "") {
                if (position1Value === position2Value && position2Value === position3Value) {
                    ShowWinner(`Congratulations! Winner is: ${position1Value}`);
                }
            }
        }
    }

    /**
     * Shows the winner message and ends the game by disabling all boxes.
     * @param {String} winner - The winner message to be displayed.
     */
    let ShowWinner = (winner) => {
        winnerMessage.innerText = winner;
        messageContainer.classList.remove("hide");
        EndGameByDisableBoxes();
    }

    /**
     * Disables all boxes on the Tic Tac Toe board, effectively ending the game.
     * This prevents any further moves from being made.
     */
    let EndGameByDisableBoxes = () => {
        boxes.forEach((box) => {
            box.disabled = true;
        });
    }

    /**
     * Starts a new game by enabling all boxes and clearing them of any X or O
     * values. Also resets the turn to O.
     */
    let StartGameByEnableBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerHTML = "";
            turnO = true;
            box.style.color = "";
        }
    }

    /**
     * Logs a message to the console indicating that this is a draw situation in
     * the Tic Tac Toe game. This method is called when the game ends in a draw.
     */
    let DrawSituation = () => {
        console.log("This is Draw situation!");
    }

    newGameButton.addEventListener("click", resetGame);
    resetButton.addEventListener("click", resetGame);
}