let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

let max = arr.reduce((max, cur) => max > cur ? max : cur, -Infinity);
let min = arr.reduce((min, cur) => min < cur ? min : cur, Infinity);

console.log(max, min);