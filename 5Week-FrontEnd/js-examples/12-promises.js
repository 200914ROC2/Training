// Let's say upi are writing a program that will allow you to create chickens
// below is the chicken class
class Chicken {
    constructor(name = "No. 5", weight = 12) {
        this.name = name;
        this.weight = weight;
    }
}

//below is a function that acts as a "Chicken factory" that provides a chicken to whoever asks
let generateChicken = (name, weight)  => {
    return new Chicken(name, weight);
}


// console.log(asynchGenerateChicken());

// the function above is ok if the code is reasonably quick to execute, however, what if creating
// the chicken was a reasonably long process? what if we had to access a DB or query an API to make the chicken?
// you wouldn't want the program to hang while waiting for the chicken to be created
// maybe instead you will basically take an IOU or say a "Promise" of the chicken being provided to you eventually
// and then you will use the chicken when it is eventually ready
// So maybe we can do this using a Promise....

const chickenPromise = new Promise((resolve, reject) => {
    // sometimes, we fail to make the chicken for whatever reason, as seen in if statement below
    // calling the reject function indicates that the promise was not fulfilled
    // the if statement is set up to wear the promise should succeed half the time.
    if (Math.random() > .5) {
        reject(null);
    }else{
        //in the case that we succeed:
        console.log("Chicken was successfully prepared!")
        resolve(generateChicken);
    }
});


// the code below represents taking the promise you got earlier that a chicken will be given to you, and then
// doing some action with the chicken that was provided
let output = chickenPromise
// the .then() describes what will happen if the proimse to give you a chicken was fulfilled
.then(value => {
    console.log(value("bill",22));
    return value;
})
.then(value => {
    console.log(value("jim",12));
    return value;
})
.then(value => {
    console.log(value("time",21));
    return value;
})
.then(value => {
    console.log(value("jon",23));
    return value;
})
// the .catch() describes what will happen if for some reason, they were not able to get you a chicken
.catch((err)=>{
    if(!err){
        console.log("the chicken was not created...I want my money back!")
    }
});

// console.log(output);