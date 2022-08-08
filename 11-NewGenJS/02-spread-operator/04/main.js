const doubleAndReturnArgs = (...arr) =>
  arr.reduce(
    (resultArr, cur) =>
      Array.isArray(cur) ? [...resultArr, ...cur] : [...resultArr, cur * 2],
    []
  );

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));
