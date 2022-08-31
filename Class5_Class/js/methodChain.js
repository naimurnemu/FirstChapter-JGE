// Own method chaining class
function Calculator(){
  this.result = 0;

  this.add = function(newNumber){
    this.result = this.result + newNumber;
    return this;
  }

  this.substuct = function(newNumber){
    this.result = this.result - newNumber;
    return this;
  }

  this.getResult = function(){
    return this.result;
  }
}

let newCalculator = new Calculator();
console.log(newCalculator.add(10).add(20).add(50).substruct(20).add(10).getResult())