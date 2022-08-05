const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];

let target = 'cherries';

  console.log(inventory.find(ele => ele.name === target))
  // expected result: { name: 'cherries', quantity: 5 }