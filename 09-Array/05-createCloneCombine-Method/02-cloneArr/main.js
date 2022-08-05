function clone(arr) {
    return arr.slice();
}


const a = [1, 5, 7, 11]
const b = clone(a);

b.push(999);
console.log(a, b);
