function isNumber(num) {
    return !(num === null || num.trim() == '' || isNaN(num));
}

let setNum = prompt("Enter answer:")

if (isNumber(setNum) && (+setNum >= 1 && +setNum <= 99)) {
    let guessNum;
    let count = 0;
    do {
        guessNum = prompt("Guess the number:")
        count++;
        if (!isNumber(guessNum)) 
            alert("Invalid number")
        else if (+guessNum === +setNum) 
            alert(`Correct! Count: ${count}`);
        else if (+guessNum > +setNum)
            alert(`Your guess is greater`);
        else 
            alert(`Your guess is lesser`);
    } while (!(+guessNum === +setNum))
}
else alert("Invalid number (1 - 99)");