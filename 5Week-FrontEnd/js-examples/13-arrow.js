function caller(callback){
    callback(" radiance", "!");
}

let inner = (x,y)=>{
    console.log("hello"+x+y);
}

caller(inner);

// by the way there are some optional syntaxes
// if you only have one param you can omit the ()
// if you only have to write one line for the implementation, and you want
// to return it, you don't have to put the {}
let inner2 = x=> "hello2";

function caller2(callback){
   console.log(inner2()); 
}

caller2(inner2);