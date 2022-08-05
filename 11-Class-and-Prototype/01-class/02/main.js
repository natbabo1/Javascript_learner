class Sale {
  name;
  calcPrice() {
    return this.price * (1 - this.discount);
  }
  constructor(name) {
    this.name = name;
  }
}

class Berverage extends Sale {
  amount;
  price;
  discount;
  constructor(name, amount, price, discount) {
    super(name);
    this.amount = amount;
    this.price = price;
    this.discount = discount;
  }
}

let a = new Berverage("Pepsi", 3, 19, 0.1);
console.log(a);
console.log(a.calcPrice());
