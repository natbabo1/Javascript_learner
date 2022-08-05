let str = 'I live in Thailand';

let arrFromStr = str.split(''); 

function countTHEFUCKINGLETTERS (obj, cur) {
    cur = cur.toLowerCase();
    if (cur !== ' ')
        obj[cur] = obj[cur] ? obj[cur] + 1 : 1;
    return obj;
    
}
let countLetters = arrFromStr.reduce(countTHEFUCKINGLETTERS, {})

console.log(countLetters);
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

