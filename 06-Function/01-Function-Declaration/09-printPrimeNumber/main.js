function isPrime(num) {
    let checker = true;
    if (!isNaN(num) && num > 0) {
        let sqrtNum = Math.sqrt(num);
        for (let i = 2; i <= sqrtNum; i++) {
            if (num % i == 0) {
                checker = false;
                break;
            }
        }
        return checker;
    }
    else 
        return false
}

function printPrimTo(num) {
    message = '';

    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            message += ' '+i;
    }
    alert(message);
}
// printPrimTo(+prompt());