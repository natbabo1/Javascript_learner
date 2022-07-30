let num1 = prompt("Enter num1");
let num2 = prompt("Enter num2");

function isNotNumber(num) {
    return num === null || num.trim() == '' || isNaN(num);
}

if (isNotNumber(num1) || isNotNumber(num2)) alert("Invalid number");
else alert(`${num1} + ${num2} = ${+num1 + +num2}`)