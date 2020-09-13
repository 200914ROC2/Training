//You can use any value in a boolean context and it will be assigned a truthy or falsey value
function checkTruthy(input){
    console.log(`
    input = ${input}, and is typeof:${typeof(input)}
    and input is ${!!input}
    `);
    //note that !! will check if input is true of false
}
checkTruthy(true);
checkTruthy(1);
checkTruthy(-1);
checkTruthy(0);
checkTruthy(NaN);
checkTruthy(null);
checkTruthy(undefined);
checkTruthy({});
checkTruthy([]);
checkTruthy('');
checkTruthy('hello');
checkTruthy('false');
checkTruthy(Infinity);
checkTruthy(-Infinity);
let a = checkTruthy;
a(3);