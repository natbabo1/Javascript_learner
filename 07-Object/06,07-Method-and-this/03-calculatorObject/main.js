// let calculator = {
//   number1: 0,
//   number2: 0,
//   read() {
//     this.number1 = +prompt('Enter number 1');
//     this.number2 = +prompt('Enter number 2');
//   },
//   sum() {
//     return this.number1 + this.number2;
//   },
//   mul() {
//     return this.number1 * this.number2;
//   }
// };

let calculator = {
  read() {
    this.num1 = +prompt("Enter num1: ");
    this.num2 = +prompt("Enter num2: ");
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
