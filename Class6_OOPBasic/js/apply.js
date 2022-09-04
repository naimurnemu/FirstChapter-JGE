// Apply
const mobilePhone = { 
  vaberText: function (madeIn, designedIn) {
    return `amar phone ${this.brand} er ${this.model}. Made in ${madeIn}. Designed in ${designedIn}.`
  }
}

const iPhone = {
  brand: "Apple",
  model: "iPhone12"
}

console.log(mobilePhone.vaberText.apply(iPhone, ["Russia", "Ukrain"])); // different between call and apply is agrument neet to pass an array in apply. 

let panirBottol = ["Mum", "Pani"];
/* panirBottol.push(["Aquafina", "Fresh", "Kinlay"])
console.log(panirBottol); */

panirBottol.push.apply(panirBottol, ["Aquafina", "Fresh", "Kinlay"]); //use of apply.
console.log(panirBottol); 