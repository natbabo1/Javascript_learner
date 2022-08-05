const modArr = (arr) => {
  const newArr = [...arr];
  if (arr.length > 3) {
    newArr[3] **= 2;
  }
  return newArr;
};

const arr = [1, 2, 3, 4, 5];
const newArr = modArr(arr);

console.log(arr);
console.log(newArr);
