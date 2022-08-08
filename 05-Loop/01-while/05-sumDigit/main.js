// let entered = prompt("Enter number:");
let entered = '-3294';


function isNumber(num) {

    return !(num === null || num.trim() == '' || isNaN(num));
}

if (isNumber(entered)) {
    let i = 0;
    if (+entered < 0) {
        i++;
    }
    let sum = 0;
    while (i < entered.length) {
        sum += +entered[i];
        i++;
    }
    console.log(sum);
    // let sum = 0;
    // entered = +entered;
    // while (entered > 0) {
    //     let remainder = entered % 10; 

    //     sum = sum + remainder; //sum += remainder

    //     entered = entered - remainder; // entered -= remainder
    //     entered = entered / 10; //entered /= 10;
    //     //entered = (entered - remainder) /10

    // console.log(sum);
}
else alert("Invalid number");