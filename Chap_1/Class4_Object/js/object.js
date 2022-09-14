const smartPhone = {
  brand: "Samsung",
  model: "note 10",
  makeCall: function(phoneNumber) {
    console.log(`Now making call to ${phoneNumber}`);
  },
  "make-year" : 2021, // When use two word for property name. need make it as string. 
  users: ["rahim", "karim", "istiaq"],
  lastBuy: {
    shop: "Bashundhara Shop",
    date: "2022-04-08"
  }
};

// let makeCall = smartphone.makeCall(2304329)

// use (.)- Dot notation for access Data 
// console.log(smartphone.model); 

// use ([])- Array notation when property is a string.[dot notation doesn't work there]. 
// console.log(smartphone["make-year"]);



// There ways of object declearation is: 1. Object literal = []   / 2. new Object()   /

// JavaScript doesn't have prototype for assosiative array. Object use instade of it.  