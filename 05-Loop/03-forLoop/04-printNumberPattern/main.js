let message;
message = '';

for (let i = 0; i < 8; i++) {
    for (let j = 0; j <= i; j++){
        message += (j+1)+" ";
    }
    message = message.trim() + '\n';
}
console.log(message);