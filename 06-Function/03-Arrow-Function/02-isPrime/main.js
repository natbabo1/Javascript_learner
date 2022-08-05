const isPrime = a => {
    for (let i=2; i<=Math.sqrt(a); i++) {
        if (a%i==0)
            return false
    }
    return true;
}

alert(isPrime(+prompt("Enter Number")));
