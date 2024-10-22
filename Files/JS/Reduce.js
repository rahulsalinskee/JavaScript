/* ***** Calculate Average of Number Array ***** */
{
    let numbers = [20, 22, 44, 66, 98, 30, 84, 10, 12];
    let averageNumber = GetAverage(numbers);
    console.log(`Average Number: ${averageNumber}`);

    /**
     * Calculates the average of an array of numbers.
     *
     * @param {number[]} numbers the array of numbers to calculate the average for
     * @returns {number} the average of the numbers in the given array
     */
    function GetAverage(numbers) {
        return numbers.reduce((total, number) => total + number, 0) / numbers.length;
    }
}

/* ***** Create a number array from user's limit and add & calculate factorial of numbers from 1 to the given array limit ***** */
{
    let inputNumber = prompt("Enter a number: ");

    /**
     * Generates an array of numbers from 1 to the given array limit.
     * For example, if the given arrayLimit is 10, the returned array will be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
     *
     * @param {number} arrayLimit the array limit to generate the array of numbers for
     * @returns {number[]} the array of numbers from 1 to the given array limit
     */
    let numberArray = (arrayLimit) => {
        let numbers = [];
        for (let i = 1; i <= arrayLimit; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    let numbers = numberArray(inputNumber);
    console.log(`Number Sequence: ${numbers}`);

    /**
     * Calculates the total of an array of numbers.
     *
     * @param {number[]} numberArray the array of numbers to calculate the total for
     * @returns {number} the total of the numbers in the given array
     */
    function GetTotal(numberArray) {
        return numberArray.reduce((total, number) => total + number, 0);
    }

    /**
     * Calculates the product of an array of numbers.
     *
     * @param {number[]} numberArray the array of numbers to calculate the product for
     * @returns {number} the product of the numbers in the given array
     */
    function GetProduct(numberArray) {
        return numberArray.reduce((total, number) => total * number, 1);
    }

    let total = GetTotal(numbers);
    console.log(`Sum of Number: ${total}`);

    let product = GetProduct(numbers);
    console.log(`Product of Number: ${product}`);
}