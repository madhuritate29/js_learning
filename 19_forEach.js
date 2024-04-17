
let array = [2, 4, 1, 7, 9, 8];

array.forEach  (  (element, index, array) => {
    console.log(element, index, array);
} );

console.log("---------- forEach using mandatory arguments ------------");
array.forEach( (value) => {
    console.log(value);
});


console.log(`==== forEach to even numbers =====`);
array.forEach(element => {
    if(element%2==0){
        console.log(element);
    }
});

const set = new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(20);
set.add(50);
console.log(set);

set.forEach( (element) =>{
  console.log(element);
} );

console.log(`=== forEach using map collection ======`);
let mapStudentMarks = new Map();
mapStudentMarks.set("Elon", 90);
mapStudentMarks.set("Stew", 56);
mapStudentMarks.set("Jenny", 45);
mapStudentMarks.set("Ratan", 72);
mapStudentMarks.set("Andy", 80);
mapStudentMarks.set("Larry", 84);

mapStudentMarks.forEach( (value, key)=> {
    console.log(value, key);
} );


class Person {
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    detail(){
        console.log(`Person Details => Name: ${this.name}, City: ${this.city}, Age: ${this.age}`);
    }
}
const jenny = new Person("Jenny", "Pune", 22);
const bill = new Person("Bill", "Mumbai", 24);
const elon = new Person("Elon", "LA", 38);
const stew = new Person("Stew", "Pune", 58);

const arrayPerson = [jenny, bill, elon, stew];
console.log(`===== WAP to get employee from city - 'Pune' ======`);
arrayPerson.forEach(element => {
    if (element.city=="Pune") {
        element.detail();
    }
});