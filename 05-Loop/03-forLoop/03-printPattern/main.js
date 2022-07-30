let message;
message = '';

for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++){
        message += "* ";
    }
    message += '\n';
}
console.log(message);