
//1.Function with no arguments and no return value
function show(){
    console.log("Inside show function");
}
show();

//2.Function with arguments and no return value
function add(n1,n2,n3)
{
    console.log("Arguments: ",n1,n2,n3);
    var result=n1+n2+n3;
    console.log("Addition is: ",result);
}
add(3,6,7);
add(99.89,67,456789);
add(6,7);
add(16,9,90,44);
add("hii","good","morning");

//3.Function with arguments and return value
function substract(numOne,numTwo) {
    console.log("----------Substraction-----------");
    console.log("Arguments: ",numOne,numTwo);
    var result=numOne-numTwo;
    return result;
}
var returnValue=substract(9,4);
console.log("Result of substration is: ",returnValue);

var returnValue=substract(99,42);
console.log("Result of substraction is: ",returnValue);