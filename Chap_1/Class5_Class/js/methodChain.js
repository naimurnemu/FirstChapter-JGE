// Own method chaining class
/* function Calculator() {
  this.result = 0;

  this.add = function (newNumber) {
    this.result = this.result + newNumber;
    return this;
  }

  this.substuct = function (newNumber) { // substuct will be substruct.
    this.result = this.result - newNumber;
    return this;
  }

  this.getResult = function () {
    return this.result;
  }
} */

/* 
let newCalculator = new Calculator();
console.log(newCalculator.add(10).add(20).add(50).substruct(20).add(10).getResult())
 */

function Calculator() {
  this.result = 0;

  this.add = function (newNumber) {
    this.result = this.result + newNumber;
    return this;
  }

  this.substruct = function (newNumber) {
    this.result = this.result - newNumber;
    return this;
  }

  this.getResult = function () {
    return this.result;
  }
}

let newCalculator = new Calculator();
console.log(newCalculator.add(1).add(2).add(3).substruct(1).add(2).getResult());

class Computing {
  constructor(newNumber1, newNumber2) {
    this.result = 0;
    this.newNumber1 = newNumber1;
    this.newNumber2 = newNumber2;
  }

  addition() {
    this.result = this.result + this.newNumber1
    return this;
  }

  subStructing() {
    this.result = this.result - this.newNumber2
    return this;
  }

  getResult() {
    return `After Calculate total is: ${this.result}.`
  } 
}
let newAccunting = new Computing(10, 3);
console.log(newAccunting.addition().subStructing().getResult())