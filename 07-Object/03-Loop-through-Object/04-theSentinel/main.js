let thatObj = {};
const SENTINEL = 'stop';

while (true) {
    let key = prompt("Key");
    
    if (key === SENTINEL) 
        break;
    if (key === null || key.trim() == '')
        continue;

    let value = prompt("Value");

    if (value === SENTINEL) 
        break;

    thatObj[key] = value;
}

console.log(thatObj);