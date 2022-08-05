function Calculator() {
    this.read = function () {
        this.num1 = +prompt("Enter num1");
        this.num2 = +prompt("Enter num2");
    },
    this.sum = function () {
        return this.num1 + this.num2;
    },
    this.mul = function () {
        return this.num1 * this.num2;
    }
}
const calculator = new Calculator();

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
