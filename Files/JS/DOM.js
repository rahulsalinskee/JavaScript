/* ***** DOM - Selecting With ID ***** */
{
    let headingTagOneValue = document.getElementById("headingTagOne");
    console.dir(headingTagOneValue);
    console.log(headingTagOneValue);
    console.log(`Tag Name: ${headingTagOneValue.tagName}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** DOM - Selecting With Class ***** */
{
    let headingTagTwoValue = document.getElementsByClassName("headingTagTwo");
    console.dir(headingTagTwoValue);
    console.log(`Selecting with classes: ${headingTagTwoValue}`);
    console.log(`Tag Name: ${headingTagTwoValue[0].tagName}`);
    console.log(`Tag Name: ${headingTagTwoValue[1].tagName}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** DOM - Selecting With Tag ***** */
{
    let paragraphTag = document.getElementsByTagName("p");
    console.dir(paragraphTag);
    console.log(`Selecting with tags: ${paragraphTag}`);
    console.log(`Tag Name: ${paragraphTag[0].tagName}`);
    console.log(`Tag Name: ${paragraphTag[1].tagName}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** DOM - Query Selector For Tag ***** */
{
    /* ***** DOM - Query Selector - It will return first element ***** */
    let firstButtonElement = document.querySelector("button");
    console.dir(firstButtonElement);
    console.log(`First Button Element using Query Selector: ${firstButtonElement}`);
    console.log(`Tag Name: ${firstButtonElement.tagName}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** DOM - Query Selector All For Tag ***** */
{
    /* ***** DOM - Query Selector All - It will return all elements ***** */
    let allParagraphElements = document.querySelectorAll("p");
    console.dir(allParagraphElements);
    console.log(`All Paragraph Elements using Query Selector All: ${allParagraphElements}`);
    console.log(`Tag Name: ${allParagraphElements[0].tagName}`);
    console.log(`Tag Name: ${allParagraphElements[1].tagName}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** DOM - Query Selector For Class ***** */
{
    /* ***** DOM - Query Selector - It will return first element ***** */
    let firstButtonElement = document.querySelector(".headingTagTwo");
    console.dir(firstButtonElement);
    console.log(`First Button Element using Query Selector class: ${firstButtonElement}`);
    console.log(`Tag Name: ${firstButtonElement.tagName}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** DOM - Query Selector All For Class ***** */
{
    /* ***** DOM - Query Selector All - It will return all elements ***** */
    let allParagraphElements = document.querySelectorAll(".headingTagTwo");
    console.dir(allParagraphElements);
    console.log(`All Paragraph Elements using Query Selector All class: ${allParagraphElements}`);
    console.log(`Tag Name: ${allParagraphElements[0].tagName}`);
    console.log(`Tag Name: ${allParagraphElements[1].tagName}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** DOM - Query Selector For ID ***** */
{
    /* ***** DOM - Query Selector - It will return element by ID ***** */
    let headingTagElement = document.querySelector("#headingTagOne");
    console.dir(headingTagElement);
    console.log(`First Button Element using Query Selector ID: ${headingTagElement}`);
    console.log(`Tag Name: ${headingTagElement.tagName}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** DOM - Query Selector With Children ***** */
{
    let divChildren = document.querySelector("div").children;
    console.dir(divChildren);
    console.log(`Children of div: ${divChildren}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** DOM - Query Selector With Inner HTML | Inner Text | Text Content ***** */
{
    let fruitsNameDiv = document.querySelector("div");
    console.dir(fruitsNameDiv);
    console.log(`Fruits Name (Inner HTML): ${fruitsNameDiv.innerHTML}`);
    console.log(`Fruits Name (Inner Text): ${fruitsNameDiv.innerText}`);
    console.log(`Fruits Name (Text Content): ${fruitsNameDiv.textContent}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** DOM - Query Selector With Inner HTML To Change the content ***** */
{
    let setNewHeading = document.querySelector("h5").innerHTML = "<b>New Heading!</b>";
    console.log(`New Heading: ${setNewHeading}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** DOM - Query Selector With Inner Text To Concat the content ***** */
{
    let tagValue = document.querySelector("h6");
    tagValue = tagValue.innerText + " Learning is Fun!";
    console.log(`Updated Tag Name: ${tagValue}`);
}

/* ---------------------------------------------------------------------------------- */

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

/* ---------------------------------------------------------------------------------- */

/* ***** Get Attribute ***** */
{
    let divId = document.querySelector("div");
    console.dir(`Div ID Query Selector (DIR): ${divId}`);
    console.log(`Div ID Query Selector (LOG): ${divId}`);

    let id = divId.getAttribute("id");
    console.dir(`Div ID Attribute (DIR): ${id}`);
    console.log(`Div ID Attribute (LOG): ${id}`);
}

/* ---------------------------------------------------------------------------------- */

{
    let paragraphTag = document.querySelector("p");
    console.dir(paragraphTag);
    console.log(`Paragraph Tag ${paragraphTag}`);

    let paragraphAttribute = paragraphTag.getAttribute("class");
    console.log(`Paragraph Attribute: ${paragraphAttribute}`);
}

/* ---------------------------------------------------------------------------------- */

/* ***** Set Attribute ***** */
{
    document.querySelector(".paragraph-second").setAttribute("style", "color: red;");
    document.querySelector(".paragraph-second").setAttribute("style", "background-color: pink;");
    document.querySelector(".paragraph-second").setAttribute("class", "paragraph-second-updated");
}

/* ---------------------------------------------------------------------------------- */

/* ***** Insert Element: Append - Adds at the end of the node (Inside) ***** */
{
    let newParagraph = document.createElement("p");
    newParagraph.innerText = "New Paragraph from Append";
    document.querySelector("body").appendChild(newParagraph);

    /* ***** Before adding, we need to create new element (Here, Button) ***** */
    let newButton = document.createElement("button");

    /* ***** Setting Inner Text For new Button element ***** */
    newButton.innerText = "New Button from Append";

    /* ***** Appending the new Button element to render on UI ***** */
    document.querySelector(".fruit-list-div").append(newButton);
}

/* ---------------------------------------------------------------------------------- */

/* ***** Insert Element: Prepend - Adds at the Start of the node (Inside) ***** */
{
    /* ***** Before adding, we need to create new element (Here, Button) ***** */
    let newButton = document.createElement("button");

    /* ***** Setting Inner Text For new Button element ***** */
    newButton.innerText = "New Button from Prepend";

    /* ***** Appending the new Button element to render on UI ***** */
    document.querySelector(".fruit-list-div").prepend(newButton);
}

/* ---------------------------------------------------------------------------------- */

/* ***** Insert Element: Before - Adds before the node (Outside) ***** */
{
    /* ***** Before adding, we need to create new element (Here, Button) ***** */
    let newButton = document.createElement("button");

    /* ***** Setting Inner Text For new Button element ***** */
    newButton.innerText = "New Button from Before";

    /* ***** Appending the new Button element to render on UI ***** */
    document.querySelector(".fruit-list-div").before(newButton);
}

/* ---------------------------------------------------------------------------------- */

/* ***** Insert Element: After - Adds after the node (Outside) ***** */
{
    /* ***** Before adding, we need to create new element (Here, Button) ***** */
    let newButton = document.createElement("button");

    /* ***** Setting Inner Text For new Button element ***** */
    newButton.innerText = "New Button from After";

    /* ***** Appending the new Button element to render on UI ***** */
    document.querySelector(".fruit-list-div").after(newButton);
}

/* ---------------------------------------------------------------------------------- */

/* ***** Delete Element: Remove - Remove the element ***** */
{
    /* ***** Before adding, we need to refer the element (Here, h5 tag whose class name is "old-heading") ***** */
    let elementToRemove = document.querySelector(".old-heading");

    /* ***** Remove the element to render on UI ***** */
    elementToRemove.remove();
}