class Calculator {
  constructor(value) {
    this.value = value ?? 0;
  }
  sum(num) {
    this.value += num;
  }
  subtract(num) {
    this.value -= num;
  }
  multiply(num) {
    this.value *= num;
  }
  divide(num) {
    this.value /= num;
  }
  show() {
    alert(this.value);
  }
}

const a = new Calculator(10);
a.divide(2);
a.sum(20);
a.multiply(3);
a.subtract(99);
console.log(a);
