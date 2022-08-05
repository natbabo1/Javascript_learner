const arr = [2, 3, 5, 7, 11];

const squareArr = arr => {
    const newArr = [];
    arr.forEach(element => {
        newArr.push(element**2);
    });
    return newArr;
}
console.log(squareArr(arr)); // [4, 9, 25, 49, 121]