
function Person(name,city,age){
    this.name = name;
    this.city = city;
    this.age = age;
}

const jenny = new Person("Jenny", "Pune", 22);
console.log(jenny);

const bill = new Person("Bill", "Mumbai", 24);
console.log(bill);

const elon = new Person("Elon", "LA", 38);
console.log(elon);


// instanceof
const result = elon instanceof Person;
console.log(result);