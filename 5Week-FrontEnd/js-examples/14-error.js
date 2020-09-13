// At any point in time, the developer can choose to throw a new error using the "throw" keyword
// if you uncomment the line below, you will see the program crash (take a look at the stack trace you are given)
// throw new Error("I am an error");

// sometimes, as a developer, you want to create a function that behaves in a certain way
// you might also want to prevent the function from executing and cause the program to crash in
// the event of this misuse. You can do so by throwing an error

// let's say you want to write a function called "feed pets" that represents you feeding your pets 
// let's suppose that the function works fine, however, you have had a racoon problem lately,
// so you want your program to behave differently if for some reason the type of the animal
// receiving the food is actually a racoon....
function feedPet(animalType, foodAmount){
    if(animalType === 'racoon'){
        throw new Error("You shouldn't feed racoons pet food");
    }
    console.log("Dispensing " + foodAmount + " units of food for my " + animalType);
}

// lets say that the feedPet function is called at some point in the implementation of the doChores() function
// if you think about it, there is a chance of the error being thrown any time  the feedPet funciton is called
// (if the type of animal is a racoon)
function doChores1(){
  feedPet("racoon", 5); //if this function is called, it will cause the error to be thrown (program will crash)  
}
// doChores1();

//let's say we wanted to defy the intentions of the person who wrote the feedPet method and allow for racoons
// to be fed anyway. This can be accomplished by handling the error with try and catch. In doing this, we place
// risky code that may throw an error in the try block, and if an error would occur, the catch block will
// exectue instead of the error being thrown
function doChores2(){
    try{
        feedPet("racoon", 5); //if this function is called, it will cause the error to be thrown (program will crash)  
    }catch(err){
        console.log("I got an error message that says \'" +err.message+ "\' but I am going to feed the racoon anyway");
    }finally{ //optionally you can include a finally block, which will occur regardless of whether or not an exception occurs;
        console.log("I am out of here");
    }
}
doChores2();