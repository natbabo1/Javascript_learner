const creatFruitsBasket = () => {
    let basket = {}
    while(true) {
        let key = prompt("Key");

        if (key === 'stop')
            break;
        if (key.trim() === '' || key === null)
            continue;

        let value = +prompt("Value");
        if (value > 1)
            key += 's';
        basket[key] = value;
    }
    return basket;
}
console.log(creatFruitsBasket());