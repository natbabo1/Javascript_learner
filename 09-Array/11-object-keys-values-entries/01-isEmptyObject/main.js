const checkEmptyObj = (obj) => (Object.keys(obj).length === 0);

console.log(checkEmptyObj({}));
console.log(checkEmptyObj({1: 1, 2: 1}));