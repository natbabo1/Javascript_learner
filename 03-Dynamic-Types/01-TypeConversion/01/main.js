let a = undefined;
let b = 2;
let c = a++; //มีการทำ increment a เลยเป็น NaN

let d = String(a);
let e = String(b);
let f = ""+c;

console.log(`${d}, ${e}, ${f}`)