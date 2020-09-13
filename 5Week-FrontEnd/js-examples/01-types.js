/*
    JavaScript is the programming language of HTML and the Web
    It is used to program the behavior of web pages
    In HTML, JS code must be inserted between the <script> and </script>
    tags
    You can place any number of scripts in an HTML document. Scripts can be placed
    in the <body>, the <head>, or you can include a link to an external file
    JavaScript can be used to change HTML content
    It can also be used to change attributes and CSS
    Can hide/show HTML elements
    Make web pages more dynamic

    Java =/= JavaScript!!! <--- important, dont forget this
*/

/*
    There are several datatypes in JS

    number
    string
    boolean
    null*
    undefined
    object
*/

//A JS function is a block of JS code that can be executed when "called on"
function logType(input){
    console.log('input is: ' + input + ' \n\t and is type of: ' + typeof(input));
}

//JS does have types, but the variables are dynamically and loosely typed
//Dynamic typing means that the same variable can hold different datatypes
// var x; //Now x is undefined
// x = 5; //Now x is a number
// x = "William"; //Now x is a string
//this is okay....
//The fact that you can cause a variable to accept different types is due to the
//fact that JS is a 'loosely typed' language. Compare this to Java, which is
//'strongly typed'. In JS you do not have to specify variable types, and
//you can use the same variable as more than one type.

var a = 'hello'; //note that you can use ' or " for strings
logType(a);
logType(5);
logType(5.5);
logType(true);
logType({}); //JS objects are written within curly braces
            //object properties are written as name:value pairs separated by commas
logType([1,2,3]);// note that this is an array
logType(logType);// note that logType is the name of the function we created earlier
logType(null);
//note that the line above will say that null is of type 'object'
//the 'typeof' function will determine 'null' to be an object
//this is somewhat controversial... some people say that null is its own type
//(basically this means that the typeof of null being an object is a bug)
//others just say that it is an object
logType(undefined);
var f;
logType(f);
f='something';
logType(f);
f=undefined;
logType(f);

logType(5/'a'); //NaN stands for not a number
//basically you will get this anytime you perform an "inappropriate" math operation
//NaN is of the datatype number
logType(5/0); //Infinity (is of type number)
logType(5/Infinity);// this is equal to 0... which is a number