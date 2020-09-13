/*
    What are closures?
    Closures:
    1)Allow an inner function to access an enclosing function's variables
    2)Allow an inner function to preserve (closure) an enclosing function's scope
    chain when this enclosing function is executed

    EXAMPLE:
*/

var x = function cake(){
    var flour = true;
    var cornMill = false;
    var cupsSugar = 1;

    function bake(){
        var heat = 350;
        console.log("Baking cake at...." + heat + "!");
        console.log("flour:" + flour);
        console.log("cornMill:" + cornMill);
        console.log("Cups of Sugar:" + cupsSugar);

        heat++;
        flour = !flour;
        cornMill = !cornMill;
        cupsSugar++;
    }

    return bake;
}

/*
    So our inner function 'bake' has the following scope chains:
    1)It has access to its own scope(the variable "heat" in this case)
    2)It has access to the outer/enclosing funciton's variables (so flour and cornMill)
    3)It has access to any global variables
*/

//Notice that the above function returns a funciton. This means taht the value of 
//x is the funciton bake(), making x a function. As a result, we can write
//x() to execute bake;

x = x();
x();//invoking our inner function the first time
x();//invoking our function the second time
x();

//notice with subsequent calls to the function, the heat variable will never change because
//it only exists in the scope of the inner function (which is redefined each time we call x)
//however, the variables that exist inside the inner function but outside the outer function
//are changed with subequent calls. This is because they are not reset.
//this is the whole point of closures

//This is how you do encapsulation in JS, you are effectively protecting the variables
//that are inside of the outer function but outside of the inner function by only allowing
//them to be accessed using the inner function

/*
    Here is a more useful example that kind of uses closures to make a "class"
*/

function William(){
    var lname = "Ona";
    var hobby = "Working";

    return{
        getLastName:function(){
            return lname;
        }, //use comma to separate multiple items in an object
        setLastName:function(lastName){
            lname = lastName;
        },
        getHobby:function(){
            return hobby;
        }, //use comma to separate multiple items in an object
        setHobby:function(newHobby){
            hobby = newHobby;
        }
    };
}

//lets see who the class works....
let me = new William(); //instantiate a new (imporved?) William
console.log(me.getLastName());
me.setHobby("Still...working");
console.log(me.getHobby());