/* ***** Calculate Square Of Each Number in Number Array using Normal Function & Foreach ***** */
{
    let numbers = [20, 22, 24, 26, 28, 30];
    GetNumberSquare(numbers);

    /**
     * Calculates the square of each number in the given array.
     *
     * @param {number[]} numbers the array of numbers to calculate the square for
     * @returns {void}
     */
    function GetNumberSquare(numbers) {
        numbers.forEach(number => {
            console.log(number * number);
        });
    }
}

/* ***** Calculate Square Of Each Number in Number Array using Arrow Function & Map ***** */
{
    /**
     * Calculates the square of each number in the given array.
     *
     * @param {number[]} numbers the array of numbers to calculate the square for
     * @returns {number[]} an array of the squares of the numbers in the given array
     */
    let squareNumber = (numbers) => {
        return numbers.map(number => number * number);
    }

    let numbers = [20, 22, 24, 26, 28, 30];
    let result = squareNumber(numbers);
    console.log(`Square of Number: ${result}`);
}