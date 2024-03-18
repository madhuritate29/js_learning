console.log("---------trim()------------" );
var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);

console.log( `Total space removed is : ${lengthBeforeTrim-greetAfterTrim} `);

console.log('-----------includes()--------------');
var greet = "Good Morning";
var result=greet.includes("nin");
console.log(`is string ${greet} include word or char 'nin':${result}`);

var result=greet.includes("MoR");
console.log(`is string ${greet} include word or char 'MoR':${result}`);

console.log('------------search()---------');
var greet="Good Morning";
var result=greet.search("Morning");
console.log(`"Morning" is available at ${result}`);

console.log('------slice()--------');
var greet="Good Morning";
var result=greet.slice(3,4);
console.log(`slice is ${result}`);

console.log('-----------split()----------');
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

// Write a function with name totalWord() with one arguments
//  "I am happy Buddy" 
//  "I am learning JS the language of internet"
// and this function should return the total numbers of words

function totalWord(sentence){
    var words = sentence.split(" ");
    var totalWords = words.length;
    return totalWords
}
var totalWords = totalWord("I am happy Buddy");
console.log(`"I am happy Buddy". Total number od words is: ${totalWords}`);

var totalWords = totalWord("I am learning JS the language of internet");
console.log(`"I am learning JS the language of internet". Total number od words is: ${totalWords}`);
