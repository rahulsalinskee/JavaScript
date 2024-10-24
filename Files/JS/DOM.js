/* ***** DOM - Selecting With ID ***** */
{
    let headingTagOneValue = document.getElementById("headingTagOne");
    console.dir(headingTagOneValue);
    console.log(headingTagOneValue);
    console.log(`Tag Name: ${headingTagOneValue.tagName}`);
}

/* ***** DOM - Selecting With Class ***** */
{
    let headingTagTwoValue = document.getElementsByClassName("headingTagTwo");
    console.dir(headingTagTwoValue);
    console.log(`Selecting with classes: ${headingTagTwoValue}`);
    console.log(`Tag Name: ${headingTagTwoValue[0].tagName}`);
    console.log(`Tag Name: ${headingTagTwoValue[1].tagName}`);
}

/* ***** DOM - Selecting With Tag ***** */
{
    let paragraphTag = document.getElementsByTagName("p");
    console.dir(paragraphTag);
    console.log(`Selecting with tags: ${paragraphTag}`);
    console.log(`Tag Name: ${paragraphTag[0].tagName}`);
    console.log(`Tag Name: ${paragraphTag[1].tagName}`);
}

/* ***** DOM - Query Selector For Tag ***** */
{
    /* ***** DOM - Query Selector - It will return first element ***** */
    let firstButtonElement = document.querySelector("button");
    console.dir(firstButtonElement);
    console.log(`First Button Element using Query Selector: ${firstButtonElement}`);
    console.log(`Tag Name: ${firstButtonElement.tagName}`);
}

/* ***** DOM - Query Selector All For Tag ***** */
{
    /* ***** DOM - Query Selector All - It will return all elements ***** */
    let allParagraphElements = document.querySelectorAll("p");
    console.dir(allParagraphElements);
    console.log(`All Paragraph Elements using Query Selector All: ${allParagraphElements}`);
    console.log(`Tag Name: ${allParagraphElements[0].tagName}`);
    console.log(`Tag Name: ${allParagraphElements[1].tagName}`);
}

/* ***** DOM - Query Selector For Class ***** */
{
    /* ***** DOM - Query Selector - It will return first element ***** */
    let firstButtonElement = document.querySelector(".headingTagTwo");
    console.dir(firstButtonElement);
    console.log(`First Button Element using Query Selector class: ${firstButtonElement}`);
    console.log(`Tag Name: ${firstButtonElement.tagName}`);
}

/* ***** DOM - Query Selector All For Class ***** */
{
    /* ***** DOM - Query Selector All - It will return all elements ***** */
    let allParagraphElements = document.querySelectorAll(".headingTagTwo");
    console.dir(allParagraphElements);
    console.log(`All Paragraph Elements using Query Selector All class: ${allParagraphElements}`);
    console.log(`Tag Name: ${allParagraphElements[0].tagName}`);
    console.log(`Tag Name: ${allParagraphElements[1].tagName}`);
}

/* ***** DOM - Query Selector For ID ***** */
{
    /* ***** DOM - Query Selector - It will return element by ID ***** */
    let headingTagElement = document.querySelector("#headingTagOne");
    console.dir(headingTagElement);
    console.log(`First Button Element using Query Selector ID: ${headingTagElement}`);
    console.log(`Tag Name: ${headingTagElement.tagName}`);
}

/* ***** DOM - Query Selector With Children ***** */
{
    let divChildren = document.querySelector("div").children;
    console.dir(divChildren);
    console.log(`Children of div: ${divChildren}`);
}

/* ***** DOM - Query Selector With Inner HTML | Inner Text | Text Content ***** */
{
    let fruitsNameDiv = document.querySelector("div");
    console.dir(fruitsNameDiv);
    console.log(`Fruits Name (Inner HTML): ${fruitsNameDiv.innerHTML}`);
    console.log(`Fruits Name (Inner Text): ${fruitsNameDiv.innerText}`);
    console.log(`Fruits Name (Text Content): ${fruitsNameDiv.textContent}`);
}

/* ***** DOM - Query Selector With Inner HTML To Change the content ***** */
{
    let setNewHeading = document.querySelector("h5").innerHTML = "<b>New Heading!</b>";
    console.log(`New Heading: ${setNewHeading}`);
}

/* ***** DOM - Query Selector With Inner Text To Concat the content ***** */
{
    let tagValue = document.querySelector("h6");
    tagValue = tagValue.innerText + " Learning is Fun!";
    console.log(`Updated Tag Name: ${tagValue}`);
}

/* ***** DOM - Query Selector With Inner Text To Get and Set the updated content ***** */
{
    let divBoxes = document.querySelectorAll(".box");
    let count = 0;
    /* ***** Here, we can use For of loop also instead of foreach ***** */
    divBoxes.forEach((box) => {
        box.innerText = `New Updated Box using Foreach ${++count}`;
    });
    console.dir(divBoxes);
    console.log(`Div Boxes: ${divBoxes}`);
}