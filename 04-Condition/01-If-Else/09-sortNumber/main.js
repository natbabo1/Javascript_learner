let num1 = prompt("Enter num1:");
let num2 = prompt("Enter num2:");
let num3 = prompt("Enter num3:");

function isNumber(num) {
    return !(num === null || num.trim() == '' || isNaN(num));
}


let sortedNum1, sortedNum2, sortedNum3;

if (isNumber(num1) && isNumber(num2) && isNumber(num3)) {
    if (+num1 >= +num2 && +num1 >= +num3) {
        sortedNum1 = +num1;
        if (+num2 >= +num3) {
            sortedNum2 = +num2;
            sortedNum3 = +num3;
        }
        else {
            sortedNum2 = +num3;
            sortedNum3 = +num2;
        }
    }
    else if (+num2 >= +num1 && +num2 >= +num3) {
        sortedNum1 = +num2;
        if (+num1 >= +num3) {
            sortedNum2 = +num1;
            sortedNum3 = +num3;
        }
        else {
            sortedNum2 = +num3;
            sortedNum3 = +num1;
        }
    }
    else {
        sortedNum1 = +num3;
        if (+num1 >= +num2) {
            sortedNum2 = +num1;
            sortedNum3 = +num2;
        }
        else {
            sortedNum2 = +num2;
            sortedNum3 = +num1;
        }
    }
    alert(`Sorted: ${sortedNum1}, ${sortedNum2}, ${sortedNum3}`);
}
else {
    alert("Invalid numbers");
}
