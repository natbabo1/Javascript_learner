let sum = 0;
let count = 0;
let enterN;

function isNumber(num) {
    return !(num === null || num.trim() == '' || isNaN(num));
}

do {
    enterN = prompt("Enter number:");
    if (isNumber(enterN) && +enterN > 0) {
        sum += +enterN;
        count++;
    }
} while (isNumber(enterN) && +enterN > 0)

let avg = sum / count;
alert(`Sum: ${sum}, Avg: ${avg}`);