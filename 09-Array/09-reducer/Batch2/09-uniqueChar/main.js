let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd'].

const getUniq = (arr, cur) => {
    if (!arr.includes(cur))
        arr.push(cur);
    return arr
};

let uniq = alphabets.reduce(getUniq, []);

console.log(uniq);