let a = 1;
let b = 2;
let c = a++; //a=2 c=1
console.log(a,c)
let d = ++c; // d=2 c=2
console.log(d, c)
let e = ++d + d++ + d; //e= 3 + 3 + 4 d = 4
console.log(e, d)