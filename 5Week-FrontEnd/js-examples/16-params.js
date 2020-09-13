function funcLetters(a,b="default",c,d){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

funcLetters(c= "hello",undefined, undefined,"two");
console.log(c);


// Spread operator...
// ...

let ray = [1,2,3];
let ray2 = [-1,0,...ray];
console.log(ray2);