// String modify

// Trim
let rafmail = "   naim.32@gmail.com  ";
let cleanMail = rafmail.trim(); //--- Remove start and end space by use trim() .


// Transform to Uppercase
const nubmail = "HriDoy.6@gMail.com";


// Transform to Lowercase
const netarNam = "Mr. neTa";

// console.log(cleanMail);
// console.log(nubmail.toLowerCase()); //--- convert all charecter in lower case
// console.log(netarNam.toUpperCase()); //--- convert all charecter in Upper case

// Char values && Existence check
let text  = "My name is Naimur Rahman Hridoy.";
let mistiFol = "Aam,Jam,Kathal,Lichu";

// console.log(text.charAt(11)); //--- Get character by index number. 
// console.log(text.charCodeAt(11)); //--- Get unicode number by of character by index number. 

// console.log(mistiFol.split(",")); //--- convert string to array. param define declearation. attention to space is important. 

// console.log(mistiFol.indexOf("th")); //--- indexOf get indexNumber of first character even when pass many character. if doesn't exist show index -1

// inclueds, Startswith, EndsWith

// console.log(text.includes("name")); //--- includes return boolean value by chect existisity. 

// console.log(mistiFol.startsWith("Jam", 4)); //--- check first character. second param is for start index direction. 

// console.log(mistiFol.endsWith("Kathal", 6)); //--- check last character. second param is for start index direction. 

let aam = 5;
let jaam = 1000;

// String templete literal
console.log("Amar kache ache "+ aam + " ti aam o " + jaam + " ti jaam.");
console.log(`Amar kache Ache ${aam} ti aam o ${jaam} ti jaam. Total Fol ache ${aam + jaam}`); //--- Using templete String literal called "Interpolation".