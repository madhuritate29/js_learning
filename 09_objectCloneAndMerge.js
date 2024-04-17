
const  person= {
    name: "Gajanan",
    city: "Pune",
    experience: 10
}

// Cloning an object using spread operator

const personClone ={...person}
console.log(person);

personClone.name="Elon";
console.log(personClone);

//Cloning an object using Object.assign()
console.log(`------------- Cloning an object using Object.assign() -------------`);
const cloneObject=Object.assign({},person);
console.log(cloneObject);

//Merging an object
console.log(`------------- Merging an object --------------`);

const  personGK= {
    name: "Gajanan",
    city: "Pune",
    experience: 10
}
const address ={
    flatNumber: 1005,
    wing: "B2 Block",
    street: "Wakad"
}

const mergedObject= Object.assign(personGK, address);
console.log(`--------------- MergedObject -----------------`);
console.table(mergedObject);

console.log(`----------- personGK -----------------`);
console.table(personGK);

