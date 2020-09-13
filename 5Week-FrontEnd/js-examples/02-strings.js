a = "hello"; //note that if you do not declare with a keyword, it will just be 'var'
let b = "world";

console.log(a);
console.log(b);

//introduced in 2015 in ES 6 standard
//ES 6 aka ECMA Script 6 is basically the name of a version of JS
//that came out in 2015
//we will get more into this later
let templateLiteral = 
`you can use backtick
to create multiline strings
and also allow for string interpolation
a = ${a}
b = ${b}
5 + 5 = ${5+5}`;
console.log(templateLiteral);
