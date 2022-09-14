// Array Common methos
const names = [
  "naimur",
  "abdul",
  "rahim",
  "fahim",
  "batin",
];

//Push - for include new Item as last Item. 
/* let newItem = names.push("Natalia");
let newItem2 = names.push("Akbor"); 
console.log(names);
console.log(newItem2); */

// unShift - for include new Item as first Item. 
// let newItem = names.unshift("Natalia");  
// let newItem2 = names.unshift("Akbor"); 
// console.log(names);
// console.log(newItem2);

//Pop - for Delete last Item. 
// let poppedItem = names.pop();
// let newItem2 = names.push("Akbor"); 
// console.log(names);
// console.log(poppedItem);  

// Shift - for Delete first Item.
// console.log(names);
/* let shiftedItem = names.shift();
console.log(names);
console.log(shiftedItem); */

// Delete - Delete is delete item by index but make an hole, and take index as empty. 
/* delete names[3];
console.log(names); */

// splice - include item in index number. First param for specify index number. second param ask how item need delete from right side of added index. and third and next param get element that need add. 
// let falaiDeyaItem = names.splice(3, 3, "momtaz", "Shajahan", "Mir Zafor");
// console.log(names);
// console.log(falaiDeyaItem)

// Delete With Splice
// console.log(names);
// names.splice(2, 1);
// console.log(names);

//Slice - Return new array. and don't change new array. 
console.log(names);
// let slicedArray = names.slice(2, 5);
// console.log(slicedArray);

// toString() - make array as string. 
console.log(names.toString());

// .join() - Concate all element of array with params. 
console.log(names.join(" "))


// Push and unshift return new array length. 
// shift & pop return Popped Item. 
// splice is return an array of Deleted Items.
//shift & unshirt is more time and memory constly then push.