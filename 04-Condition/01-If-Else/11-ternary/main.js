let login = prompt("Enter username");
let message;

message = login == "Employee" ? "Hello" : login == "Director" ? "Greeting" : login == "" ? "No login" :"";
alert(message);