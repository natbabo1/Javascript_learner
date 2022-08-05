const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];

const summary = [];

sales.forEach(element => {
    let obj = {};

    obj.netPrice = element.price * (1 - (element.discount ?? 0));
    summary.push(obj);
});

console.log(summary);