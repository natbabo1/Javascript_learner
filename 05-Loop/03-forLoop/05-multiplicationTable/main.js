let multiplication = '';

for (let i = 2; i <= 12; i++) {
    for (let j = 1; j <= 12; j++) {
        multiplication += i + ' x ' + j + ' = ' + i*j + '\n';
    }
    multiplication += '\n';
}

console.log(multiplication);