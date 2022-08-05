const toTwoFix = num => (Math.trunc(num*100)/100).toFixed(2);


console.log(toTwoFix(10));
console.log(toTwoFix(5.1));
console.log(toTwoFix(3.1289));