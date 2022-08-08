const removeRandom = (arr) => {
  let length = arr.length;
  let removeIndex = Math.floor(Math.random() * length);
  const firstHalf = arr.slice(0, removeIndex);
  const secondHalf = arr.slice(removeIndex + 1);
  return [...firstHalf, ...secondHalf];
};

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const result1 = removeRandom(input);
const result2 = removeRandom(input);
const result3 = removeRandom(input);
const result4 = removeRandom(input);
const result5 = removeRandom(input);

console.log(input);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
