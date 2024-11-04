{
    const BASE_URL = "https://api.apilayer.com/fixer/convert?";
    const dropDownSelects = document.querySelectorAll(".drop-down select");
    const getCurrentExchangeRateButton = document.querySelector("#get-current-exchange-rate");
    const fromCurrency = document.querySelector("#from-currency");
    const toCurrency = document.querySelector("#to-currency");
    const currentExchangeRateElement = document.querySelector(".current-exchange-rate");
    const displayFinalAmount = document.querySelector(".message");

    for (let select of dropDownSelects) {
        /* ***** Add Country List to Drop Down Select ***** */
        for (let currencyCode in countryList) {
            let newOption = document.createElement("option");
            newOption.value = currencyCode;
            newOption.innerText = currencyCode;
            if (select.name == "from" && currencyCode == "USD") {
                newOption.selected = "selected";
            }
            else if (select.name == "to" && currencyCode == "INR") {
                newOption.selected = "selected";
            }
            select.append(newOption);
        }
        select.addEventListener("change", (event) => {
            UpdateFunction(event);
        });
    }

    function UpdateFunction(event) {
        let currencyCode = event.target.value;
        let countryCode = countryList[currencyCode];
        let countryFlagImageSource = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let imageTag = event.target.parentElement.querySelector("img");
        imageTag.src = countryFlagImageSource;
    }

    getCurrentExchangeRateButton.addEventListener("click", async (event) => GetCurrentExchangeRate(event));
    window.addEventListener("load", (event) => GetCurrentExchangeRate(event));

    async function GetCurrentExchangeRate(event) {
        event.preventDefault();
        let amount = document.querySelector("#amount");
        let amountValue = amount.value;
        if (amountValue === "" || amountValue < 1) {
            amountValue = 1;
            amount.value = 1;
        }

        try {
            const URL = `${BASE_URL}to=${toCurrency.value.toLowerCase()}&from=${fromCurrency.value.toLowerCase()}&amount=${amountValue}`;
            let response = await fetch(URL, ApiRequestOption());
            var data = await response.json();
            let currentExchangeRate = data.info.rate;
            let finalAmount = currentExchangeRate * amountValue;
            RenderCurrentExchangeRate(fromCurrency.value, toCurrency.value, currentExchangeRate);
            RenderConvertedAmount(amountValue, fromCurrency.value, finalAmount, toCurrency.value, currentExchangeRate);
        }
        catch (error) {
            console.log(error);
        }
    }

    function ApiRequestOption() {
        let requestOptions = "";
        try {
            var myHeaders = new Headers();
            myHeaders.append("apikey", "Oimeh4o27w9P3wz2KHMLljN5HNk3yjhX");
            requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };
            return requestOptions;
        }
        catch (error) {
            requestOptions = `${error}`;
        }
        return requestOptions;
    }

    function RenderConvertedAmount(amountValue, fromCurrencies, finalAmount, toCurrency) {
        displayFinalAmount.innerText = `${amountValue} ${fromCurrencies} = ${finalAmount} ${toCurrency}`;
    }

    function RenderCurrentExchangeRate(fromCurrencies, toCurrency, currentExchangeRate) {
        currentExchangeRateElement.innerText = `1 ${fromCurrencies} = ${currentExchangeRate} ${toCurrency}`;
    }
}