function sayHi(age) {
    if (age < 12) alert("Hi kid");
}
console.log(sayHi); // log code ของ sayHi 
console.log(sayHi(10)); // ** alert "Hi kid" , log undefined

function sayHi2(name) {
    if (name) {
        alert("Hi " + name);
        return;
    } else {
        return "Who are you";
    }
}
console.log(sayHi2("John")); // alert "Hi John", log undefined
console.log(sayHi2()); // log "Who are you"