// JavaScript String 

// 3 way to decler javaScript is 
// '', "", String()

let myName = "Naimur Rahman";
let myCity = "Tangail";
const myCountry = "I live in \"BanglaDesh\""; //--- \ for skip string litaral. 

// console.log(myCountry + " ...With concated string!"); //--- String concat by (+)
 
// console.log(Myname);
// console.log(myCity);
// console.log(myCountry);

// console.log(myName.length);  //--- length is array prototype.

// console.log(myCity[5]); //--- Get element by index number.


// For Loop
for (let index = 0; index < myCountry.length; index++) { //---when you know end of loop. 
  // console.log(myCountry[index]);
} 


// While Loop
let length = 0

let index = 0;
while(myCity[index] !== undefined) { //---When you didn't know ends actually.
  length = length + 1; 
  index++;
}

console.log("Length of String: " + length);