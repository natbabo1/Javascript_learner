let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];
  // expected result: [0, 1, 2, 3, 4, 5]

let flatter = flattened.reduce((newArr, cur) => newArr.concat(cur), []);

console.log(flatter);