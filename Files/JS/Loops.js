/* ************* For Loop ************* */
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/* ************* While Loop ************* */
{
    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
}

/* ************* Do While Loop ************* */
{
    let j = 0;
    do {
        console.log(j);
        j++;
    } while (j < 10);
}

/* ************* For In Loop - Helps to iterate through an object ************* */
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

{
    for (let key in person) {
        console.log(`For In Loop - ${key}: ${person[key]}`); // Output: name: John, age: 30, city: New York
    }
}

/* ************* For Of Loop - Helps to iterate through an array ************* */
{
    let colors = ["red", "green", "blue"];
    for (let color of colors) {
        console.log("For Of Loop - ", color); // Output: red, green, blue
    }
}

/* ************* Even Numbers ************* */
{
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

/* ************* Odd Numbers ************* */
{
    let i = 1;
    while (i <= 20) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }
}

/* ************* Number Game ************* */
{
    let gameNumber = 25;
    let enteredNumber = prompt("Guess a number between 1 and 100");
    while (enteredNumber != gameNumber) {
        alert("Try again");
        enteredNumber = prompt("Guess a number between 1 and 100");
    }
    alert("You guessed it right!");
    console.log("You guessed it right!");
}