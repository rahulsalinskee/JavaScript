// First assignment
let number = prompt("enter a number: ");

IsNumberDivisibleBy5(number) ? alert("number is divisible by 5") : alert("number is not divisible by 5");

/**
 * Checks whether a given number is divisible by 5.
 *
 * @param {number} inputNumber the number to check
 * @returns {boolean} true if the number is divisible by 5, false otherwise
 */
function IsNumberDivisibleBy5(inputNumber) {
    if (inputNumber % 5 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let score = prompt("Enter your score: ");
let grade = CalculateGrade(score);
alert(grade);


/**
 * Calculates a grade based on the given score.
 *
 * @param {number} scores the score to calculate the grade for
 * @returns {string} the grade as a string
 */
function CalculateGrade(scores) {
    if (scores >= 90 && scores <= 100) {
        return "Passed With Grade - A";
    }
    else if (scores >= 70 && scores <= 89) {
        return "Passed With Grade - B";
    }
    else if (scores >= 60 && scores <= 69) {
        return "Passed With Grade - C";
    }
    else if (scores >= 50 && scores <= 59) {
        return "Passed With Grade - D";
    }
    else if (scores >= 0 && scores <= 49) {
        return "Sorry! You have Failed!";
    }
    else {
        return "Invalid Input!";
    }
}