let username = prompt("Enter username");

if (username !== null && username.trim() != '') {
    let password = prompt("Enter password");
    if (password !== null || password.trim() != '') {
        if ((username == "admin" && password == 
        "1234") || (username == "john" && password == "qwerty"))
            alert(`Hello ${username}`);
        else alert("Invalid username or password");
    }
    else alert("password is required");
}
else alert("username is required");
