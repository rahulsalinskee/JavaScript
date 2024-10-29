/* ***** Error Handled ***** */
{
    console.log("Start - Error Handled")
    let firstNumber = 2;
    let secondNumber = 3;

    console.log("firstNumber = ", firstNumber);
    console.log("firstNumber = ", secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    try {
        console.log("Sum = ", firstNumber + c); // Error
    }
    catch (error) {
        console.log(error);
    }
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("End - Error Handled")
}

/* ***** Error Not Handled ***** */
{
    console.log("Start - Error NOT Handled")
    let firstNumber = 2;
    let secondNumber = 3;

    console.log("firstNumber = ", firstNumber);
    console.log("firstNumber = ", secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("Sum = ", firstNumber + c); // Error
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("Sum = ", firstNumber + secondNumber);
    console.log("End - Error NOT Handled")
}