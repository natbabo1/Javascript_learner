let entered = prompt("Enter number:");

function isNumber(num) {
    return !(num === null || num.trim() == '' || isNaN(num));
}

if (isNumber(entered)) {
    let i = 0;
    if (+entered < 0) i++;
    let sum = 0;
    while (i < entered.length) {
        sum += +entered[i];
        i++;
    }
    alert(sum);
}
else alert("Invalid number");