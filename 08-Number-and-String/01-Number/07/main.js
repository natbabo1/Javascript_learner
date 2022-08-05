const randyDice = () => Math.trunc(Math.random()*(6)+1);

let mes = '';

for (let i=0; i<100; i++)
    mes+= randyDice()+" ";

console.log(mes);