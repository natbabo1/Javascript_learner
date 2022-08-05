const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
const aAlp = element => element === 'a';
const aIndex = [];

const clone = alphabets.slice();
while (true){
    let ind = clone.findIndex(aAlp);
    if (ind !== (-1)) {
        aIndex.push(ind);
        clone[ind] = '';
    }
    else
        break;
}

console.log(aIndex);
// expexted result: [0, 2, 4]