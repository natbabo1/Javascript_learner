let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}
function countTHEFUCKINGNAME (obj, cur) {
    obj[cur] = obj[cur] ? obj[cur] + 1 : 1;
    return obj;
}

let countNames = names.reduce(countTHEFUCKINGNAME, {})

console.log(countNames);