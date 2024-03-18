var a=5;
var b=a++;
console.log(`a: ${a}`);
console.log(`b: ${b}`);

var n1=5;
var res=n1++ + ++n1 + n1++;
console.log(`n1: ${n1}`);
console.log(`Result: ${res}`);

var a=2;
var b= ++a + ++a + a++ - --a;
console.log(`a: ${a}`);
console.log(`b: ${b}`);

var a=4;
var b= a-- + ++a + ++a + a++;
console.log(`a: ${a}`);
console.log(`b: ${b}`);

var a=8;
var res=a%2==0?"Even":"Odd";
console.log(`Result: ${res}`);