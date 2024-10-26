
/* ***** Click Events ***** */
{
    let buttonClickMe = document.createElement("button");
    buttonClickMe.addEventListener("click", function () {
        console.log("Button Clicked");
    })
    buttonClickMe.innerText = "Click Me";
    document.querySelector(".dynamic-button").before(buttonClickMe);
}

/* ***** Adding - Multiple Add Event Lister can be attached with an Event ***** */
{
    /* ***** Adding Event Listener - 1 ***** */
    let singleClickButton = document.querySelector("#single-clicked-button-id");

    /**
     * Event handler for single click events on the button.
     * Logs the message "Single Clicked" and the event object to the console.
     *
     * @param {Event} event - The event object associated with the click event.
     */
    let singleClickButtonEventHandler = function (event) {
        console.log("Single Clicked");
        console.log(event);
    }

    singleClickButton.addEventListener("click", singleClickButtonEventHandler);

    /**
     * Event handler for single click events on the button.
     * Logs the message "Single Clicked Again" and the event object to the console.
     *
     * @param {Event} event - The event object associated with the click event.
     */
    let singleButtonClickAgainHandler = function (event) {
        console.log("Single Clicked Again");
        console.log(event);
    }

    /* ***** Adding Event Listener - 2 ***** */
    singleClickButton.addEventListener("click", singleButtonClickAgainHandler);

    /* ***** Removing - Multiple Add Event Lister can be attached with an Event ***** */
    singleClickButton.removeEventListener("click", singleButtonClickAgainHandler);
    console.log(singleClickButton);
}

/* ***** Create a toggle button to toggle between Dark mode to light mode ***** */
{
    /* ***** 1st Approach ***** */
    let changeModeButton = document.querySelector("#change-mode");
    let currentMode = "light";

    let changeModeEventHandler = function ChangeModeEvent(event) {
        if (currentMode === "light") {
            currentMode = "dark";
            document.querySelector("body").style.backgroundColor = "black";
        }
        else {
            currentMode = "light";
            document.querySelector("body").style.backgroundColor = "white";
        }
    }

    changeModeButton.addEventListener("click", changeModeEventHandler);
}

{
    /* ***** 2nd Approach ***** */
    let changeMode = document.querySelector("#mode-change");
    let currentMode = "light";
    let body = document.querySelector("body");

    let changeModeEventHandler = function ChangeModeEvent (event) {
        if (currentMode === "light") {
            currentMode = "dark";
            body.classList.add("dark");
            body.classList.remove("light");
        }
        else {
            currentMode = "light";
            body.classList.add("light");
            body.classList.remove("dark");
        }
    }
    changeMode.addEventListener("click", changeModeEventHandler);
}