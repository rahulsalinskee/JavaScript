{
    let randomNumber = ValidateEnteredNumber();

    let userEnterNumber = document.getElementById("enterUserInput").value;

    let message = ValidateEnteredNumber(userEnterNumber);
    alert(message);

    function ValidateEnteredNumber(userInput) {
        let randomNumber = GenerateRandomNumberBetweenOneToHundred();

        if (userInput == randomNumber) {
            return "YAY! You Are The Lucky Winner!";
        } 
        else {
            return "Sorry! Better Luck Next Time!"; 
        }
    }

    function GenerateRandomNumberBetweenOneToHundred() {
        return Math.floor(Math.random() * 100) + 1;
    }
}