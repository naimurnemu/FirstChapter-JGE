// Eta ki? What is this
const bigMan = "ironman"
const smartPhone = {
  brand: "Samsung",
  model: "note 10",
  makeCall: function(phoneNumber) {
    console.log(`Now making call to ${phoneNumber} from ${this.bigMan}`);
  },
  "make-year" : 2021, // When use two word for property name. need make it as string. 
  users: ["rahim", "karim", "istiaq"],
  lastBuy: {
    shop: "Bashundhara Shop",
    date: "2022-04-08"
  }
};


// Using this in different place: 

// method --- object use as this
// smartPhone.makeCall("43543")

// Alone - refer window to this
// console.log(this)
function hi () {
  console.log(`Hi from ${this}`)
}

hi()