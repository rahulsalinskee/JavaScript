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

{
    let inputNumber = prompt("Enter a number: ");

    let numberArray = (arrayLimit) => {
        let numbers = [];
        for (let i = 1; i <= arrayLimit; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    let numbers = numberArray(inputNumber);
    console.log(`Number Sequence: ${numbers}`);

    function GetTotal(numberArray) {
        return numberArray.reduce((total, number) => total + number, 0);
    }

    function GetProduct(numberArray) {
        return numberArray.reduce((total, number) => total * number, 1);
    }

    let total = GetTotal(numbers);
    console.log(`Sum of Number: ${total}`);

    let product = GetProduct(numbers);
    console.log(`Product of Number: ${product}`);
}