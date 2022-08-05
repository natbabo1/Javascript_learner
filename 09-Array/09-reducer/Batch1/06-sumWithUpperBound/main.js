let str = '31 45 12 67 34 86 23 37 19 41';

let arr = str.split(' ');
let sumLess40 = arr.reduce((sum, cur) => +cur < 40 ? sum + +cur : sum, 0)
console.log(sumLess40);