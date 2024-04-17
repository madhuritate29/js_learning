
const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];

console.log(`----- Step 1 -----`);
console.log(`Fist element: ${fruits_seasonal[0]}`);
const len = fruits_seasonal.length;
console.log(`Last Element: ${fruits_seasonal[len-1]}`);

console.log(`----- Step 2 -----`);
console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`----- Step 3 -----`);
