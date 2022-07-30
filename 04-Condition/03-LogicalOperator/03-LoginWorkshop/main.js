let user; 
user = prompt("Enter username:") || "guest";

if (user == "codecamp") {
    let password;
    password = prompt("Enter password");
    if (password != "123456")
        alert("Wrong password")
}
else {
    user = "guest"
}

alert(`Welcome ${user}`);

