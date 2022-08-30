// Constractor is blueprint of object. -- Constrator name start with pascale case. 

function SmartPhone(brand, model, makeYear) {
  this.brand = brand;
  this.model = model;
  this.makeYear = makeYear;
  this.makeCall = function(phoneNumber){
    console.log(phoneNumber);
  }
  this.vabDhoraText = function()  {
    return `Amar Smartphone holo ${this.brand} er ${this.model}`;
  }
}

const istiaqsPhone = new SmartPhone("Samsung", "Note10", 2021);
const karimsPhone = new SmartPhone("Apple", "iphone12", 2020);

// console.log(istiaqsPhone);
// console.log(karimsPhone);

// istiaqsPhone.makeCall("hellotee4wr");
// istiaqsPhone.makeCall("helloApple");

// console.log(karimsPhone.vabDhoraText());
// console.log(istiaqsPhone.vabDhoraText())/

istiaqsPhone.madeIn = "Chaina";
karimsPhone.designedIn = "California";

istiaqsPhone.ring = function () {
  console.log("ting ting")
}

console.log(istiaqsPhone);
console.log(karimsPhone);

istiaqsPhone.ring();

// Prototype
//  Prototype is some rules of object