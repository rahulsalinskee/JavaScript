
{
    /* ****** Array is mutable ****** */
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(numbers);

    numbers[0] = 10;
    console.log(numbers); // Output: 10, 2, 3, 4, 5, 6, 7, 8

    /* ****** String is NOT mutable ****** */
    let name = "Hello";
    console.log(name);

    name[0] = "Y";
    console.log(name); // Output: Hello

    for (let number of numbers) {
        console.log(number);
    } // output: 1, 2, 3, 4, 5, 6, 7, 8
}

{
    let marks = [85, 97, 44, 37, 76, 60];
    let averageMarks = CalculateAverageMarks(marks);
    console.log(`Average Marks: ${averageMarks}`);

    /**
     * Calculates the average of an array of marks.
     *
     * @param {number[]} marks - An array of numerical marks.
     * @returns {number} The average of the marks.
     */
    function CalculateAverageMarks(marks) {
        let sum = 0;
        for (let mark of marks) {
            sum += mark;
        }
        return (sum / marks.length);
    }
}

{
    let itemPrices = [250, 645, 300, 900, 50];
    let itemPricesAfterDiscount = CalculateItemPricesAfterDiscount(itemPrices);

    for (let eachItemPriceAfterDiscount of itemPricesAfterDiscount) {
        console.log(`Each Item Price After Discount Applied: ${eachItemPriceAfterDiscount}`);
    }

    function CalculateItemPricesAfterDiscount(itemPrices) {
        let discountPercentage = 10;
        let itemPricesAfterDiscountApply = [];

        for (let eachItemPrice of itemPrices) {
            let itemPriceAfterDiscountApply = eachItemPrice - (eachItemPrice * discountPercentage / 100);
            itemPricesAfterDiscountApply.push(itemPriceAfterDiscountApply);
        }
        return itemPricesAfterDiscountApply;
    }
}

/* ****** Concat ****** */
{
    let cities = ["Delhi", "Mumbai", "Bangalore", "Patna", "Kolkata", "Chennai"];
    let countries = ["India", "Japan", "South Africa", "Bhutan", "Nepal", "SriLanka"];

    let places = cities.concat(countries);
    console.log(places);
}

/* ****** UnShift | Push, Shift | Pop  ****** */
{
    let cities = [" Delhi", " Mumbai", " Bangalore", " Patna ", " Kolkata ", " Chennai"];
    console.log(`Cities Name Without Muzaffarpur: ${cities}`);

    cities.unshift("Muzaffarpur");
    console.log(`Cities Name After Adding Muzaffarpur: ${cities}`);

    cities.shift();
    console.log(`Cities Name: ${cities}`);
}

/* ****** Slice - Does Not Change in original Array ****** */
{
    let cities = [" Delhi", " Mumbai", " Bangalore", " Patna ", " Kolkata ", " Chennai"];

    let newCities = cities.slice(1, 4);
    console.log(`New Cities Using Slice: ${newCities}`);
    console.log(`Original Cities: ${cities}`);
}

/* ****** Splice - It changes the Original Array by Add, Remove, Replace ****** */
{
    let numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
    numbers.splice(2, 4, 101, 102, 103);
    console.log(`Spliced Array ${numbers}`);
}