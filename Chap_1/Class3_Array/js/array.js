// let names = ["naimur", "abdul", "rahim"]; // Array use to make collection of data in programming. 
const names = [
  "naimur",
  "abdul",
  "rahim",
  "fahim",
  "batin",
];
// console.log(names);
names[names.length] = "Obama";
// console.log(names);
// console.log(names.length); //---length check of array. 
// console.log(names[names.length - 1]); //--- Get last element and index of array.

// Array
let goodMan = "Istiaq vai";
let taka = 0;
function kiJani() {
  console.log("Ki Jani")
}

const human = {
  nak: true,
  kan: true
}

//--- We can check type of data useing Type of method. 
console.log(typeof goodMan);
console.log(typeof taka);
console.log(typeof kiJani);
console.log(typeof human);
// console.log(typeof names); //--- With default behavior in javaScript Array also a object. 

console.log(Array.isArray(names)); //--- using this method we can check is that object prototype is array. value is boolean. 


goodMan[length - 1] = "Hasan"; //--- String is non-primitive value. That's why last value not added. 
console.log(goodMan);

// loop with array
for (let index = 0; index < names.length; index++) {
  const element = names[index];
  // console.log(`I am ${element}.`)
}

const chada = [112, 324, 43, 334, 433, 434, 34, 5, 3, 8, 3, 3];
let totalChadaUthece = 0;
for (let index = 0; index < chada.length; index++) {
  const element = chada[index];
  totalChadaUthece = totalChadaUthece + element; //--- Concat chadar taka
}
console.log(totalChadaUthece);

// There ways of array declearation is: 1. array literal = []   / 2. new Array()   /

// names[0] ---- used for get data by index number.

// JavaScript doesn't have prototype for assosiative array. 

