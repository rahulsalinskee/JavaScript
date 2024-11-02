{
    let promise;
    promise = new Promise((resolve, reject) => {
        // console.dir(promise);
        // console.log(promise);
        // console.log("Hello From Promise 1", promise);
        resolve("Success");
    });
}

/* ***** Promise State - resolve(value) or reject("error") ***** */
{
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("Hello From Promise 2")
            // console.dir(promise);
        }, 0);
        /* ***** resolve() or reject() - Whatever it ()resolve / reject comes first, promise state will be set with it! ***** */
        resolve("Success2");
        // reject("Error2");
    });
}

/* ***** 
 * When we deal with any API, they return Promise. So, we do not need to create a promise in this case.
 * But we need to consume those promises and we do it with help of .then() and .catch()
 * .then(value) => This function takes an argument and the value of this argument is the same value which is being passed to resolve() function
 * .catch(error) => This function takes an argument and the value of this argument is the same value which is being passed to reject() function
***** */
{
    let getPromise = GetPromise();
    getPromise.then((value) => {
        // console.log("Promise Fulfilled!: ", value);
    });

    getPromise.catch((error) => {
        // console.log("Promise Rejected!: ", error);
    });

    function GetPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // console.log("Promise Value!");
                // resolve("Data Sent Success!");
                reject("Network Error");
            });
        });
    }
}

/* ***** 
 * Promise Chain - Promise chaining is a feature of JavaScript that allows you to chain asynchronous callbacks together.
***** */
{
    function GetTeachersAsync() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // console.log("Teachers Data!");
                resolve("Get Teachers Success!");
            }, 2000);
        })
    }

    function GetStudentsAsync() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // console.log("Students Data!");
                resolve("Get Students Success!");
            }, 2000);
        });
    }

    /* ****** The Same lines of code can be written in different ways ***** */
    // console.log("Fetching Teachers...");
    GetTeachersAsync().then((value) => {
        // console.log(value);
        /* ****** Calling Second Data ***** */
        // console.log("Fetching Students...");
        GetStudentsAsync().then((value) => {
            // console.log(value);
        });
    });
}

/* ****** To solve this call back Hell scenario with Promise chaining ***** */
{
    /* ****** 
     * Promise Chaining 
     * While doing login in HDFC internet banking applications,
     * It first asks for Customer ID (user ID). Once user provides customer ID then system validates if it exists in the database.
     * When validation gets successful, then it asks for password, image captcha, sms OTP, email OTP.
     * This scenario can be achieved by using callbacks && Promise chaining
     * So, here, we have 2 Promises chaining
     **** */
    function GetUser(customerId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("User Credentials: " + customerId);
                resolve("Success!");
            }, 2000);
        })
    }

    /* ****** 
     * It is taking 2 seconds to get user and password from database and then need to pass captcha
     * We need to pass a Promise inside another Promise using .then() function for Promise chaining
     * To solve this problem, we have Promises
     * 
     * 1st Way of Promise chaining
     ***** */
    GetUser("customerId").then((result) => {
        console.log("Fetching Customer ID...");
        console.log(result);
        GetUser("password").then((result) => {
            console.log("Fetching Password...");
            console.log(result);
        });
    });

    /* ****** 
     * It is taking 2 seconds to get user and password from database and then need to pass captcha
     * We need to pass a Promise inside another Promise using .then() function for Promise chaining
     * To solve this problem, we have Promises
     * 
     * 2nd Way of Promise chaining
     * Now we have started Promise chaining and this is getting complicated to read and understand the code
     * To solve this problem, we have Async Await
     ***** */
    GetUser("customerId").then((result) => {
        console.log("Fetching Customer ID...");
        console.log(result);
        return GetUser("password");
    }).then((result) => {
        console.log("Fetching Password...");
        console.log(result);
        return GetUser("captcha");
    }).then(() => {
        console.log("fetching Captcha...");
        console.log(result);
        return GetUser("SMS OTP");
    }).then((result) => {
        console.log("Fetching OTP...");
        console.log(result);
        return GetUser("Email OTP");
    }).then((result) => {
        console.log("Fetching Email OTP...");
        console.log(result);
    });
}