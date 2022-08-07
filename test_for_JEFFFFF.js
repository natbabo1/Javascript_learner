const arr = ['John', 'Doe', 33, 'Golf', 'Swimming', 51];
// {John: 3, Doe: 3...}
const family = {}
function toObj(item) {
    family[item] = 3;
}
function checkOdd(item) {
    return item % 2 == 1;
}
function plusTwo(item) {
    return item + 2;
}
// for (const item of arr) {
//     if (checkOdd(item)) {
//         return item;
//     }
// }

// const result = [];
// for (index = 0; index < arr.length; index++) {
//     if (checkOdd(arr[index])) { // arr[4] -> chec('Swin')
//         result.push(arr[index]);
//     }
// }
// return result;

// arr.forEach(toObj);
// for (index = 0; index < arr.length; index++) {
//     arr[index] = plusTwo(arr[index], index, arr);
// }
// const result = [];
// for (index in arr) {
//     result.push(plusTwo(arr[index], index, arr));
// }
// return result;
let a = arr.map(plusTwo);
console.log(a);

function sumStr(sum, item) {
    if max < item
    return item;
    else if max > item
    return max
}

function fakeReduce(sumStr, init) { //sum, ""
    
    for (index in arr) {
        init = sumStr(init, arr[index], index, arr);
    }

    return init;
}

let sumone = arr.reduce(sumStr, "");
console.log(sumone)

