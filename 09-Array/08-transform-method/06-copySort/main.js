let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)

function copySorted(arr) {
    return arr.slice().sort();
}