const numArr = [];
let input;
while (true) {
    input = prompt("Enter number");
    if (input === null || input.trim() === '' || isNaN(input))
        break;
    numArr.push(+input);
}

let sum = 0;

numArr.forEach(item => {
    sum += item;
});

console.log(numArr, sum);