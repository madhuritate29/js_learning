
console.log(`--------------- Step 1 ----------------`);
const word= "I am very good IT Developer";
const vowel="aeiou";
let vowelsCount=0;
for (let index = 0; index < word.length; index++) {
    let char=word.charAt(index);
    let lowerCase=char.toLowerCase();
    if(vowel.includes(lowerCase))
    {
        vowelsCount++;
    }  
}
console.log(`Total number of vowels in string : ${vowelsCount}`);

console.log(`--------------- Step 2 ----------------`);
let sum=0;
for (let index = 0; index <=5; index++) {
    sum = sum+ index * index * index;
    
}
console.log(`Sum of Cube : ${sum}`);

console.log(`--------------- Step 3 ----------------`);
function oddPositionedChars(word){
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if (index%2 != 0 && element != " ") {
            console.log(element);  
        }
    }
}
console.log("odd positioned characters for first string are: ");
 oddPositionedChars(`Hard work always pays back`);
 console.log("odd positioned characters for second string are: ");
 oddPositionedChars("Soon I will be UI IT Champ");
