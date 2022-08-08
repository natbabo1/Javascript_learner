const multiplies = (...nums) => nums.reduce((mul, cur) => mul * cur, 1);

console.log(multiplies(3, 4, 5, 6, 7, -1));
