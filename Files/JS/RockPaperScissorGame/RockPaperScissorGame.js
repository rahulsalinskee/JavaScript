{
    let userScore = 0;
    let computerScore = 0;
    const allChoices = document.querySelectorAll(".choice");
    let message = document.querySelector("#message");
    let computerScoreDisplay = document.querySelector("#computer-score");
    let userScoreDisplay = document.querySelector("#user-score");

    allChoices.forEach(eachChoice => {
        const userChoice = eachChoice.id;
        eachChoice.addEventListener("click", () => SelectChoice(userChoice))
    });

    /**
     * Starts the game and determines the winner.
     * @param {string} userChoice the user's choice of rock, paper or scissors
     */
    function SelectChoice(userChoice) {
        PlayGame(userChoice);
    }

    /**
     * Play the game and determine the winner.
     * @param {string} userChoice the user's choice of rock, paper or scissors
     */
    function PlayGame(userChoice) {
        const computerChoice = GenerateComputerChoice();

        if (userChoice === computerChoice) {
            DrawGame();
        }
        else {
            let userWin = true;
            if (userChoice === "rock") {
                userWin = (computerChoice === "paper") ? false : true;
            }
            else if (userChoice === "paper") {
                userWin = (computerChoice === "scissor") ? false : true;
            }
            else {
                userWin = (computerChoice === "rock") ? false : true;
            }
            ShowWinner(userWin, userChoice, computerChoice);
        }
    }

    /**
     * Generates a random choice from the game choices array. 
     * The choices are rock, paper and scissors. The function uses Math.random() to generate a random index.
     * The function then returns the choice at the randomly generated index from the game choices array.
     * @returns {string} The random choice from the array.
     */
    function GenerateComputerChoice() {
        const gameChoices = ["rock", "paper", "scissor"];
        const randomIndex = Math.floor(Math.random() * 3);
        return gameChoices[randomIndex];
    }

    /**
     * Logs a message to the console when the game ends in a draw situation.
     * @function
     */
    function DrawGame() {
        message.innerText = "Game Draw!";
        message.style.backgroundColor = "#f0ad4e";
    }

    /**
     * Logs a message to the console and updates the score displays based on
     * whether the user won or not.
     * @param {boolean} isUserWinner Whether the user won or not.
     */
    function ShowWinner(isUserWinner, userChoice, computerChoice) {
        if (isUserWinner) {
            userScore++;
            message.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
            message.style.backgroundColor = "#5cb85c";
            userScoreDisplay.innerText = userScore;
        }
        else {
            message.innerText = `You Lost! ${computerChoice} beats your ${userChoice}`;
            message.style.backgroundColor = "#d9534f";
            computerScore++;
            computerScoreDisplay.innerText = computerScore;
        }
    }
}

