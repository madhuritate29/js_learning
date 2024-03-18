console.log("-------------Step 1--------------");
function greaterNumber(n1,n2){
    var result=(n1>n2)?"n1 is greater":"n2 is greater";
    console.log(`Result: ${result}`);
}
greaterNumber(10,-10)

console.log("-------------Step 2--------------");

function isEvenOrOddNum(n) {
    var res =(n%2==0)?true:false;
    return res;    
}
var returnValue=isEvenOrOddNum(29);
console.log(returnValue);

var returnValue=isEvenOrOddNum(44);
console.log(returnValue);

var returnValue=isEvenOrOddNum(101);
console.log(returnValue);

var returnValue=isEvenOrOddNum(0);
console.log(returnValue);

console.log("-------------Step 3--------------");


