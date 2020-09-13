// == vs ===
//== tries its best to ignore type and just compare the values
// this is known as 'type coercion'
// 5 == '5' <-- true
// 5 === '5' <-- false
//=== will compare both type and value, or basically whether or not they are the same in memory

function compare(one,two){
    console.log(`
    one = ${one}, and is type: ${typeof(one)}
    two = ${two}, and is type: ${typeof(two)}
        one == two evaluates to: ${one == two}
        one === two evaluates to: ${one === two}
    `
    );
}
compare(5,'5');
compare(97,'a');
compare(null,undefined);
compare([],[]); //objects are not equal to other instances of objects
compare([],null);
compare(true, false);
compare(NaN,NaN); //NanN is not equal to itself
compare(Infinity,Infinity);
compare(5/0,Infinity);