let saving = 100000;
let interest = 0.025;

for (i = 1; i <= 10; i++) {
    saving += saving * interest;
}

console.log(saving);
