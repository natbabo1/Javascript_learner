let sum = 0, sumOdd = 0, sumEven = 0;
let sumSqEven = 0, sumSqThree = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
    if (i % 2 == 0) {
        sumEven += i;
        sumSqEven += i**2;
    }
    else if (i % 2 != 0){
        sumOdd += i;
        if (i % 3 == 0) 
            sumSqThree += i**2;
    }
}

alert(`Sum: ${sum}, Sum of Odd: ${sumOdd}, Sum of Even: ${sumEven}, Sum square Even: ${sumSqEven}, Sum square divided by three: ${sumSqThree}, Diff: ${sumSqEven - sumSqThree}`)