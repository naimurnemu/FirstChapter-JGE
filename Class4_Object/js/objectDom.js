const smartPhone = {
  brand: "Samsung",
  model: "note 10",
  makeCall: function(phoneNumber) {
    console.log(`Now making call to ${phoneNumber}`);
  },
  "make-year" : 2021,  
  users: ["rahim", "karim", "istiaq"],
  lastBuy: {
    shop: "Bashundhara Shop",
    date: "2022-04-08"
  }
};


// Using DOM - Document Object Model
// document.getElementById("ObjectDekhau").innerHTML = smartphone //--- Html neew string value to show browser. 

let text = "<ul>";
for( const item in smartPhone) {
  text = text + `<li> ${item}: ${smartPhone[item]}</li>` 
  if(item == "lastBuy") {
    text = text + `<li>${item}: <ul>`
    for(const lastBuyItem in smartPhone[item]) {
      text = text + `<li> ${lastBuyItem}: ${smartPhone[item][lastBuyItem]}</li>` 
    }
    text = text + "</ul></li>" 
  }
}
text = text + "</ul>" 


text = Object.values(smartPhone); // --- Make object as array. 

document.getElementById("ObjectDekha").innerHTML = JSON.stringify(smartPhone);

// Object is iterable value. Use For...in to play loop in object.
// --- dot notation not accessable in for in loop 
// JSON.stringify(smartPhone); --- make object as json. I will not convert fuction.  