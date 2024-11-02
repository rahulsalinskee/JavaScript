{
    const catFactArticle = document.querySelector("#cat-facts-article");
    const getCatFactButton = document.querySelector("#get-cat-facts-button");

    const URL = "https://cat-fact.herokuapp.com/facts";


    let getCatFact = async function GetCatFacts() {
        let response = await fetch(URL);
        console.log("Getting Data...");
        console.log("Response: ", response);
        let data = await response.json();
        console.log("Data: ", data);
        catFactArticle.innerHTML = data.map((fact) => `<li>${fact.text}</li>`).join("");
        catFactArticle.style.color = "green";
    };

    getCatFactButton.addEventListener("click", getCatFact);
}