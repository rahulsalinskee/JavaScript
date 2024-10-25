/* ***** DOM - Practice Assignments ***** */

/* ***** 
    1. Create a Button Element. Give it 
        a text "Click Me One More Time" | Background color - Red | Text Color - White 
        Insert a button as first element inside the body tag
***** */
{
    /* ***** Before adding, we need to create new element (Here, Button) ***** */
    let buttonElement = document.createElement("button");

    /* ***** Setting ID to the Button Element ***** */
    buttonElement.id = "click-me-one-more-time-id";

    /* ***** Setting Inner Text For new Button element ***** */
    buttonElement.innerText = "Click Me One More Time";

    /* ***** Setting Background Color For new Button element ***** */
    buttonElement.style.backgroundColor = "red";

    /* ***** Setting Text Color For new Button element ***** */
    buttonElement.style.color = "white";

    /* ***** Setting a class to the new button element ***** */
    buttonElement.className = "click-me-one-more-time-class";

    /* ***** Inserting the new Button element as first element to render on UI ***** */
    document.querySelector("body").prepend(buttonElement);
}

/* ***** 
    2.  Create a <p> in HTML. Give it a class and some styling.  
        Create a new class in CSS and try to append this class to the <p> element
        To notice: How to overwrite the class name when you add a new one.
        Solve this problem using classList
***** */
{

}