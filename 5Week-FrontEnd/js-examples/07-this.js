/*
    We will now discuss the 'this' keyword in JS.. So what is it?
    Well... in JS the 'this' keyword refers to whatever object it belongs to:

    -when used alone, it refers to the global window object
    -when used in a function, it refers to the global window object
    -when used with event handlers, it refers to the HTML element that is
    the recipient of the event.
*/

//EXAMPLES:

//the "this" keyword used laone:

var windowObject = this; //the value of windowObject is, indeed, the window
var bigFoot = "Bigfoot is real."
console.log(windowObject);
console.log(this.bigFoot);

function aFunc(){
    var bigArm = "Bigfoot is a myth!";
    console.log(this.bigFoot); //<--- this refers to the global window object's bigFoot
    console.log(bigFoot); // <--- this refers to the bigFoot in the functional scope
    console.log(this);
}
aFunc();

//3rd way...

/*
    if you use it within an event handler (within an HTML file)

    <button onclick="this.style.display='none'">Text</button>

    note that if used in an event handler as seen above, this will refer to the
    actual object (in this case the button)
*/
