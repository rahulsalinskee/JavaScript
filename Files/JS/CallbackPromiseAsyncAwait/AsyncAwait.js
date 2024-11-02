{
    async function GetWeatherApi() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Get Weather Api");
                resolve(200);
            }, 2000)
        })
    }

    async function GetWeatherData() {
        await GetWeatherApi();
        await GetWeatherApi();
    }

    // GetWeatherData();
}

/* ****** To solve call back Hell scenario with Promise chaining and Promise Chaining with Async Await ***** */
{
    /* ***** This is the same function which we used in callback hell and in Promise chaining ***** */
    async function GetUser(customerId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("User Credentials: " + customerId);
                resolve(200);
            }, 2000);
        })
    }
    
    /* ***** This way of calling a function is called as I.I.F.E. or Immediately Invoked Function Expression ***** */
    (async function GetUserData() {
        console.log("Fetching Customer ID...");
        await GetUser("customerId");
        console.log("Fetching Password...");
        await GetUser("password");
        console.log("Fetching Image Captcha...");
        await GetUser("image captcha");
        console.log("Fetching SMS OTP...");
        await GetUser("SMS OTP");
        console.log("Fetching Email OTP...");
        await GetUser("Email OTP");
    })();
}