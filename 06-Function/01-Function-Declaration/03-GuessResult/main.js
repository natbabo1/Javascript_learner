let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // log "Hello everybody"
}

logMessage(message);
console.log(message); // log "Welcome to Thailand" 


let name = "John";

function sayHi(input) {
  console.log(name); // log "John"
  name = input;
}

sayHi();
console.log(name); // log undefined