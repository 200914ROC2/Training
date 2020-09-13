//A callback funciton is simply a function that is the paramter of another function
function caller(callback){
    console.log(`caller called with param:
    ${callback}`)
    callback(5,6);
}

function callback(one,two){
    console.log(`invoked with params ${one} and ${two}`);
}

caller(callback);
caller(
    (one,two) => {
        console.log(`one + two = ${one+two}`);
    }
);// note that in this example, the arrow function passed as an argument to 'caller'
//is a callback function
//funcitonName(argument);