/* ****** Call Back - A function when it is passed as an argument to another function ****** */
{
    function Sum(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }

    function Calculator(firstNumber, secondNumber, SumCallBack) {
        return SumCallBack(firstNumber, secondNumber);
    }

    let sumResult = Calculator(2, 3, Sum);
    // let sumResult = Calculator(2, 3, Sum()); // This will not work because Sum is not a function 

    console.log("Sum Result = ", sumResult);
}

/* ****** Call Back Hell - Nested Callback stacked below one another forming a Pyramid like structure (Also known as Pyramid of Doom) ***** */
{
    /* ****** 
     * Callback Hell Scenario 
     * While doing login in HDFC internet banking applications,
     * It first asks for Customer ID (user ID). Once user provides customer ID then system validates if it exists in the database.
     * When validation gets successful, then it asks for password, image captcha, sms OTP, email OTP.
     * This scenario can be achieved by using callbacks
     * So, here, we have 2 nested callbacks stacked below one another forming a Pyramid like structure (Also known as Pyramid of Doom)
     **** */
    function GetUser(customerId, GetPassword) {
        setTimeout(() => {
            console.log("User Credentials: " + customerId);
            if (GetPassword) {
                GetPassword(customerId);
            }
        }, 2000);
    }

    /* ****** 
     * It is taking 2 seconds to get user and password from database and then need to pass captcha
     * We need to pass a function as callback in GetUser("username") for password
     * Here, we need to pass another arrow function as callback in in GetUser("password") for image captcha, sms otp and email otp
     * Slowly we are getting into Callback Hell or Pyramid of Doom
     * To solve this problem, we have Promises
     ***** */
    GetUser("username", () => {
        console.log("Getting Password...")
        GetUser("password", () => {
            console.log("Getting image captcha...")
            GetUser("image captcha", () => {
                console.log("Getting SMS OTP...")
                GetUser("SMS OTP", () => {
                    console.log("Getting Email OTP...")
                    GetUser("Email OTP");
                });
            });
        });
    });
}