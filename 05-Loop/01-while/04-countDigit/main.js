let entered = prompt("Enter number:");

function isNumber(num) {
    return !(num === null || num.trim() == '' || isNaN(num));
}

// if (isNumber(entered)) {
//     if (+entered >=0 ) 
//         alert(entered.length);   
//     else 
//         alert(entered.length - 1);
// }
// else alert("Invalid number");


num = +entered
let count = 0;
while (num) {
    let remainder = num % 10;
    num = (num - remainder) / 10;
    count++;
}
alert(count);