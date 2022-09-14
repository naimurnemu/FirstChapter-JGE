// function call()

// Method, Property
// Object

// let text = "hellow";

const mobilePhone =  {
  vaberText : function (madeIn, designedIn) {  //Funcation is a first class citizen of JavaScript
    return `amar phone ${this.brand} er ${this.model}. Made in ${madeIn}. Designed in ${designedIn}.`
  }
}

const iPhone = {
  brand: "Apple", 
  model: "iPhone12"
}


console.log(mobilePhone.vaberText.call(iPhone, "Gulisthan", "California"));