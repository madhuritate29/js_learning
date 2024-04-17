

let array = [2, 4, 1, 7, 8, 9];
const newArray = array.filter((element) => {
    return element%2==0;
});
console.log(newArray);


let arrayNums = [21, 42, 1, 7, 8, 9];
const arrayMultipleOf3 = arrayNums.filter( (currentValue)=>{
    return currentValue%3==0;
} );
console.log(arrayMultipleOf3);