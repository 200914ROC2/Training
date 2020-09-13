let personLiteral = {
    name: 'Ashe',
    hairColor: 'ashen',
    height: 3
};
//as shown above, you can declare a variable using a literal {}
console.log(personLiteral);
console.log(`
To access objects you can use . or bracket notation
you should use . notation unless you have a reaons not to
name = ${personLiteral.name}
name = ${personLiteral['name']}
`);

personLiteral.age = 18;
//if you set a property of an object that doesn't exist, JS will let you
console.log(personLiteral);

//========================Different way of making a person===============================

function Person(name,hairColor, height){
    this.name = name;
    this.hairColor = hairColor;
    this.height = height;
    this.sayHello = function(){
        console.log(`hello from ${this.name}`)
    }
}

let pfog = new Person('Pfog', 'Orange', 4);
console.log(pfog);
pfog.sayHello();


//classes were introduced in ES6
class PersonClass {
    constructor(name, hairColor){
        this.name = name;
        this.hairColor = hairColor;
    }
    sayHello(){
        console.log(`hello from ${this.name}`);
    }
}

let rock = new PersonClass('Rock', 'Dark Brown');
console.log(rock);