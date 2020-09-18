/*
    Event propagation describes what will occur in the event of
    more than one Event Listener being triggered at the same time

    It comes in two different flavors, there is bubbling and there is
    capturing. With bubbling, the innermost element will occur first and
    then propagate outwards. With capturing, the outermost element will
    occur first, and then propagate inwards. Note that the event
    propagation will default to bubbling

    Here is the synatax for specifying a type of event propagation:
    elementVar.addEventListener("click", callbackFunc, bubbleOrCapture);
    Event prop is specified in the third argument. if you do not specify,
    it is bubbling by default. Also, if you input false, you are specifying
    bubbling, if you put true, you are specifying capturing
*/

let capturing = true;
let bubbling = false;

// document.getElementById("inner").addEventListener("click",() =>{
//     alert("INNER-Bubbling");
// },bubbling);

// document.getElementById("middle").addEventListener("click",() =>{
//     alert("Middle-Bubbling");
// },bubbling);

// document.getElementById("outer").addEventListener("click",() =>{
//     alert("outer-Bubbling");
// },bubbling);


//capturing


document.getElementById("inner").addEventListener("click", () => {
    alert("INNER-capturing");
}, capturing);

document.getElementById("middle").addEventListener("click", (e) => {
    alert("Middle-capturing");
    // e.stopPropagation(); //will prevent the next event from occuring
    // e.stopImmediatePropagation();//will prevent event events on the same element from occurring

}, capturing);

document.getElementById("outer").addEventListener("click", (e) => {
    alert("Outer-capturing");
    // e.stopPropagation(); //will prevent the next event from occuring

}, capturing);


// document.getElementById("outer").addEventListener("click", () => {
//     alert("outer-bubbling");
// }, bubbling);
