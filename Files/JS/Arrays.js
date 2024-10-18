
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
}