{
    let addPromise = (firstNumber, secondNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let sumResult = sum(firstNumber, secondNumber);
                resolve(sumResult);
            }, 2000)
        });
    }

    let minusPromise = (firstNumber, secondNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let minusResult = minus(firstNumber, secondNumber);
                resolve(minusResult);
            }, 3000)
        });
    }

    let multiplyPromise = (firstNumber, secondNumber) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let multiplyResult = multiply(firstNumber, secondNumber);
                resolve(multiplyResult);
            }, 4000)
        });
    }

    let userInput = () => {
        let firstNumber = prompt("Enter First Number: ")
        let inputFirstNumber = parseInt(firstNumber);

        let secondNumber = prompt("Enter Second Number: ");
        let inputSecondNumber = Number.parseInt(secondNumber);

        return [inputFirstNumber, inputSecondNumber];
    }

    let inputFromUser = () => {
        let [userFirstNumber, userSecondNumber] = userInput();
        let sumPromiseState = addPromise(userFirstNumber, userSecondNumber).then((value, error) => {
            console.log("Sum = ", value);
        }, (error) => {
            console.log("Error: ", error);
        });

        let minusPromiseState = minusPromise(userFirstNumber, userSecondNumber).then((value, error) => {
            console.log("Minus = ", value);
        }, (error) => {
            console.log("Error: ", error);
        });

        let multiplyPromiseState = multiplyPromise(userFirstNumber, userSecondNumber).then((value, error) => {
            console.log("Multiply = ", value);
        }, (error) => {
            console.log("Error: ", error);
        });

        // These will return Promise state for all the three promises: Pending or Fulfilled
        console.log("1. ", sumPromiseState);
        console.log("2. ", minusPromiseState);
        console.log("3. ", multiplyPromiseState);
    }

    let sum = (firstNumber, secondNumber) => {
        return firstNumber + secondNumber;
    }

    let minus = (firstNumber, secondNumber) => {
        return firstNumber - secondNumber;
    }

    let multiply = (firstNumber, secondNumber) => {
        return firstNumber * secondNumber;
    }


    inputFromUser();
}