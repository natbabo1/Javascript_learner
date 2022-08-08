const q = { prop: 5, prop2: [10, 100] };

let {
  prop: x,
  prop2: [, y]
} = q;

console.log(x, y);
