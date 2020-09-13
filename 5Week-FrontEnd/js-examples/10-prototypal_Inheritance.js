var car ={
    wheels: 3,
    engine: 5,
    getStats: function(){
        return this.wheels + ' ' + this.engine;
    }
    //when the 'this' keyword is used within an object's method, it refers to the owner
    //of the method
    //in this case, it will refer to the car object
}

var mustang ={
    wheels:6,
    engine:35,
    color: 'hot-rod red'
}

//All objects have a hidden property in JS called a "prototype"
//if you attempt to access a property or a method that is not present in an object, it will
//look for it in tis prototype
//you can access the prototype in the following way
mustang.__proto__ = car;
// console.log(car);
// console.log(mustang);
console.log(mustang.color); //you get the property that is present in mustang
console.log(mustang.getStats); //you get the property that is inherited from car
console.log(mustang.wheels); // you get the property of mustang instead of the one from car
console.log(mustang.engine);
console.log(mustang.getStats()); // you get the mustang's properties despite calling the
//inherited method from the car