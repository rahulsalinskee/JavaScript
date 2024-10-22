/* ***** Filter Number Greater Than 30 from Number Array using Arrow Function & Filter (With double return statement && extra brace) ***** */
{
    /**
     * Returns an array of numbers from the given array of numbers that are greater than 30.
     *
     * @param {number[]} numbers - An array of numbers.
     * @returns {number[]} An array of numbers greater than 30 from the given array of numbers.
     */
    let GetNumberGreaterThanThirty = (numbers) => {
        return numbers.filter(number => {
            return number > 30;
        });
    };

    let numbers = [20, 22, 44, 66, 98, 30, 84, 10, 12];
    let numberGreaterThanThirty = GetNumberGreaterThanThirty(numbers);
    console.log(`Number Greater Than 30: ${numberGreaterThanThirty}`);
}

/* ***** Filter Number Greater Than 30 from Number Array using Arrow Function & Filter (With single return statement && no extra brace) ***** */
{
    /**
     * Returns an array of numbers from the given array of numbers that are greater than 30.
     *
     * @param {number[]} numbers - An array of numbers.
     * @returns {number[]} An array of numbers greater than 30 from the given array of numbers.
     */
    let GetNumberGreaterThanThirty = (numbers) => {
        return numbers.filter((number, index, numbers) => number > 30);
    }

    let numbers = [20, 22, 44, 66, 98, 30, 84, 10, 12];
    let numberGreaterThanThirty = GetNumberGreaterThanThirty(numbers);
    console.log(`Number Greater Than 30: ${numberGreaterThanThirty}`);
}