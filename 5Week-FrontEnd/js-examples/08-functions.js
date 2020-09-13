function add(a = 0, b = 0){//note the 0's are default values if no other value is passed
    //can give params default values
    return a + b;
}
//you can call a function with any number of parameters
console.log(add(10,20)); //normal
console.log(add(5)); //function will supply 0 as default value for b
console.log(add(20,30,1,2,3,4,5,6)); //ignore additional input

//arrow function were introduced in ES6, similar to lambdas in Java
let otherAdd = (one,two) => {
    return one + two;
};
//syntax:  (parameters) => {}
// you do not have to put the parenthesis if you only have one parameter
//this function will implicitly return somehting if you do not include the curly braces
//and have only one line of code
console.log(otherAdd(1,2));

//arrow notation / arrow funcitons are important becasue they allow for a way
//to create anonymous functions in a shorthanded way.