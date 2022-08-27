// Kata kati
let keteFelbo = "Toke ami kete felbo";

// String.slice(Start, End)
console.log(keteFelbo.slice(-14, -11)); //--- Need index+1 number for cut in slice. Second perameter is optional. Without last argument, It showing full string.  using minus start slice from end



// String.substring(Start, End)
console.log(keteFelbo.substring( -3, 4)); //--- For slicing Slice and SubString behave like same with index number. Substring not support from minus, minus start from 0. 



// String.substr(Start, End)
console.log(keteFelbo.substr(1, 5)) //--- There First param is index number and last parameter is number of length. 