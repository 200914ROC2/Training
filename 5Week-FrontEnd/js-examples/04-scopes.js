// 'use strict'; //used to require declaration of variable
// x = 24; //this would actually throw an error
//enforces better practices
//note that if you use 'use strict within a function, it will only apply to the function
funScope();
/*
    Two main scopes: global and functional scope
    scope determines the accessibility of variables
    Global scope is the most general scope and is available everywhere
    variables declared outside of functions using the var keyword are available
    everywhere
    if you do not expli//funccitly use the 'var' keyword, it will be used for you (unless you
        declare with let or const)
        >note that this will also not occur if you are using 'use strict'
*/
function funScope(){
    //functional scope is where the variable is available within just the function
    //in which it is declared
    //can be accomplished using teh var keyword
    // console.log(a);
    
    /*
        Hoisting
        'Hoisting' occurs with all variables declared with the 'var' keyword
        JS will 'hoist' all objects declarations to the top of the scope
        automatically
    */
   if(true){
        var a = 'hoisting'; //this is in the functional scope since var was used to declare it
        //this is why it is available below.
   }
   console.log(a);
}

/*
    Lexical/ block scoping was introduced in ES6
    it allows for block scopeing
    you have to use let or const to declare your variable that will be
    in this type of scoping
*/

function blockScope(){
    // console.log(m);// this will actually give you an error, since only var is hoisted
    let m =10;
    m = 12;
    m="gotcha";
    console.log(m);
    const c = 99;
    //let and const allow for block scoping
    //note that let and const cannot be redeclared
    //const allows you to declare a variable and then only initialize it once
    // let m = 11; //note that you cant do this because you can only declare let once
    // c = 11; //you cant do this either becaue you can't reassign const
    //variables declared using let or const are not hoisted
    if(true){
        let d = 12;
        //this d variable exists in the scope of this block
    }
    // console.log(d); can't do this because d only exist in the block scope in the block above

}
blockScope();